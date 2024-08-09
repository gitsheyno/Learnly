import React from "react";
import UserLikes from "@/app/ui/UserLikes";
import { getCurrentUser } from "@/utils/users";
export default async function page() {
  const user = await getCurrentUser();

  return (
    <>
      {user ? <UserLikes /> : null}
    </>
  );
}
