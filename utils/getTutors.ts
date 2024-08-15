import "server-only";
import { and, desc, eq, inArray } from "drizzle-orm";
import { db } from "@/db/db";
import { messages } from "@/db/schema";
import { memoize } from "nextjs-better-unstable-cache";
import { tutors } from "@/db/schema";

export const getTutors = async (query: string) => {
  const requestedTutors = await db.query.tutors.findMany({
    where: eq(tutors.category, query),
  });

  return requestedTutors;
};
