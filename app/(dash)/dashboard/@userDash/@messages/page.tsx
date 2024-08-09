import React from "react";
import UserMessages from "@/app/ui/UserMessages";
import { getCurrentUser } from "@/utils/users";

export default async function page() {

  const user = await getCurrentUser();

  return (
    <>
      {user ? <UserMessages /> : null}
    </>
  );
}
