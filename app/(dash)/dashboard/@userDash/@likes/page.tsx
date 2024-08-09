import React from "react";
import UserLikes from "@/app/ui/UserLikes";
import { getCurrentUser } from "@/utils/users";

type FavoriteTutor = string;
export default async function page() {
  const user = await getCurrentUser();

  const favoriteTutors: FavoriteTutor[] = [];

  return <>{user ? <UserLikes data={favoriteTutors} /> : null}</>;
}
