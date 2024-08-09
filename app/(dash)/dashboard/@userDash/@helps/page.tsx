import React from "react";
import UserHelp from "@/app/ui/UserHelp";
import { getCurrentUser } from "@/utils/users";

export default async function Page() {
  const user = await getCurrentUser();

  return <>{user ? <UserHelp /> : null}</>;
}
