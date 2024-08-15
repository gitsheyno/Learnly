"use server";

import { db } from "@/db/db";
import { messages } from "@/db/schema";
import { getCurrentUser } from "@/utils/users";
import { eq } from "drizzle-orm";
import { revalidateTag } from "next/cache";

export const sendReceiptToUser = async (des: string) => {
  const user = await getCurrentUser();

  console.log("us", user?.id, des);

  await db.insert(messages).values({
    createdById: user?.id as string,
    description: des,
  });

  // await db.update(user)

  revalidateTag("dashboard:messages");
  revalidateTag("messages");
};

export const changeMessageStatus = async () => {
  const user = await getCurrentUser();

  await db
    .update(messages)
    .set({
      status: "read",
    })
    .where(eq(messages.createdById, user?.id as string));

  revalidateTag("dashboard:messages");
  revalidateTag("messages");
};
