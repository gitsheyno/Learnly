import React from "react";
import UserMessages from "@/app/ui/UserMessages";
import { getCurrentUser } from "@/utils/users";
import { getMessages } from "@/utils/messages";

type Message = {
  description: string | null;
  status: string;
};
export default async function page() {
  const user = await getCurrentUser();
  const messages: Message[] = await getMessages(user?.id as string);
  console.log("message", messages);
  const favoriteTutors: Message[] = [];
  return <>{user ? <UserMessages data={messages} /> : null}</>;
}
