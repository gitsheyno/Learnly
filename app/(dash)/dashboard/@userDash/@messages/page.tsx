import React from "react";
import UserMessages from "component/UserMessages";
import { getCurrentUser } from "@/utils";
import { getMessages } from "@/utils";

type Message = {
  description: string | null;
  status: string;
};
export default async function page() {
  const user = await getCurrentUser();
  const messages: Message[] = await getMessages(user?.id as string);
  return <>{user ? <UserMessages data={messages} /> : null}</>;
}
