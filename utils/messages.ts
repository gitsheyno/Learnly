import { and, desc, eq, inArray } from "drizzle-orm";
import "server-only";
import { db } from "@/db/db";
import { messages } from "@/db/schema";
import { memoize } from "nextjs-better-unstable-cache";

export const getMessages = memoize(
  async (userId: string) => {
    const userMessages = await db.query.messages.findMany({
      where: eq(messages.createdById, userId),
      columns: {
        description: true, // Select only the description column
        status:true
      },
    });
    return userMessages;
  },
  {
    persist: true,
    revalidateTags: () => ["dashboard:messages"],
    suppressWarnings: true,
    log: ["datacache", "verbose"],
    logid: "dashboard:messages",
  },
);
