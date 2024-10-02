"use server";
import { cookies } from "next/headers";
import { signin, signup } from "@/utils";
import { z } from "zod";
import { redirect } from "next/navigation";
import { COOKIE_NAME } from "@/utils";

export type State = {
  errors?: {
    email?: string;
    password?: string;
  };
  message?: string | null;
};

const authSchema = z.object({
  email: z.string().email({ message: "Please enter valid email" }),
  password: z.string().min(4, { message: "Password cannot be empty" }),
  role: z.string(),
});

export const registerUser = async (prevState: any, formData: FormData) => {
  const data = authSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    role: "user",
  });

  if (!data.success) {
    return {
      errors: data.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Sign up.",
    };
  }

  try {
    const {
      data: { email, password, role },
    } = data;
    const { token } = await signup({ email, password, role });
    cookies().set(COOKIE_NAME, token);
  } catch (e) {
    return { message: "Failed to sign you up" };
  }
  redirect("/dashboard");
};

export const signinUser = async (prevState: any, formData: FormData) => {
  const data = authSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    role: "user",
  });

  if (!data.success) {
    return {
      errors: data.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Login.",
    };
  }
  try {
    const {
      data: { email, password },
    } = data;
    const { token } = await signin({ email, password });

    cookies().set(COOKIE_NAME, token);
  } catch (e) {
    return { message: "couldn't lig in" };
  }
  redirect("/dashboard");
};
