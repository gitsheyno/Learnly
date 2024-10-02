import React from "react";
import UserHelp from "component/UserHelp";
import { getCurrentUser } from "@/utils";

export default async function Page() {
  const user = await getCurrentUser();

  return <>{user ? <UserHelp /> : null}</>;
}
