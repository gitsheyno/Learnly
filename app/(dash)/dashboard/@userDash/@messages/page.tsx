import React from "react";
import UserMessages from "@/app/ui/UserMessages";
import { getCurrentUser } from "@/utils/users";
type FavoriteTutor = string;
export default async function page() {
  const user = await getCurrentUser();
  const favoriteTutors: FavoriteTutor[] = [];
  return <>{user ? <UserMessages data={favoriteTutors} /> : null}</>;
}
