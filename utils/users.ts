import "server-only";
import { COOKIE_NAME } from "./constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getUserFromToken } from "./authTools";
import { cache } from "react";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const getCurrentUser = cache(async () => {
  const token = cookies().get(COOKIE_NAME);
  if (!token) return null;

  const user = await getUserFromToken(token as RequestCookie);
  if (!user) return null;

  return user;
});
