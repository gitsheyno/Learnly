import React from "react";
import { getCurrentUser } from "@/utils/users";

const Dash = async ({
  children,
  likes,
  messages,
  helps,
}: {
  children: React.ReactNode;
  likes: React.ReactNode;
  messages: React.ReactNode;
  helps: React.ReactNode;
}) => {
  const user = await getCurrentUser();

  return (
    <>
  
        <div className="flex max-w-6xl justify-end px-4 items-center gap-6 mx-auto py-8">
          {children}
          {messages}
          {likes}
          {helps}
        </div>
    
    </>
  );
};

export default Dash;
