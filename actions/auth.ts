"use server";
import { cookies } from "next/headers";
import { signin, signup } from "@/utils/index";
import { z, ZodError } from "zod";
import { redirect } from "next/navigation";
import { COOKIE_NAME } from "@/utils/constants";

export type State = {
  errors?: {
    emailError?: string;
    passError?: string;
  };
};

const authSchema = z.object({
  email: z.string().email({ message: "Please enter valid email" }),
  password: z.string().min(4, { message: "Password cannot be empty" }),
  role: z.string(),
});

export const registerUser = async (prevState: any, formData: FormData) => {
  const data = authSchema.parse({
    email: formData.get("email"),
    password: formData.get("password"),
    role: "user",
  });

  try {
    const { token } = await signup(data);
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
  console.log(data.data?.password, "pass");

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
    return { message: "couldent lig in" };
  }
  redirect("/dashboard");
};
