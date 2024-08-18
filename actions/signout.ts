"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { COOKIE_NAME } from "@/utils/constants";

export const signout = async () => {
  cookies().delete(COOKIE_NAME);
  redirect("/");
};
