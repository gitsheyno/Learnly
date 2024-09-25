import "server-only";
import { and, eq, gte, lte, or } from "drizzle-orm";
import { db } from "@/db/db";
import { userFavorites } from "@/db/schema";
import { memoize } from "nextjs-better-unstable-cache";
import { tutors } from "@/db/schema";

type SearchParams = {
  query: string;
  name: string;
  sortBy: string;
  min: string;
  max: string;
  page: number;
};

export const getTutors = async (
  queryParams: SearchParams,
) => {



  const conditions = [];

  // Check for each filter and add it to the conditions array if it exists
  if (queryParams.name) {
    conditions.push(eq(tutors.name, queryParams.name));
  }

  if (queryParams.min !== undefined) {
    conditions.push(gte(tutors.cost, queryParams.min));
  }

  if (queryParams.max !== undefined) {
    conditions.push(lte(tutors.cost, queryParams.max));
  }

  // If no conditions are set, return all tutors
  const allTutors = await db.query.tutors.findMany({
    where: conditions.length > 0 ? and(...conditions) : undefined,
  });

  return allTutors;


};

export const getOneTutor = async (tutorId: string) => {
  const requestedTutors = await db.query.tutors.findFirst({
    where: eq(tutors.id, tutorId),
  });
  return requestedTutors;
};

export const removeFromFavorite = memoize(
  async (tutorId: string, userId: string) => {
    try {
      await db
        .delete(userFavorites)
        .where(
          and(
            eq(userFavorites.tutorId, tutorId),
            eq(userFavorites.userId, userId),
          ),
        );
      console.log("Tutor removed to favorites successfully!");
    } catch (err) {
      console.error("Error removing tutor to favorites:", err);
    }
  },
  {
    persist: true,
    revalidateTags: () => ["dashboard:favorite"],
    suppressWarnings: true,
    log: ["datacache", "verbose"],
    logid: "dashboard:favorite",
  },
);

export const addFavorite = memoize(
  async (tutorId: string, userId: string) => {
    const tutor = await getOneTutor(tutorId);

    try {
      await db.insert(userFavorites).values({
        userId: userId,
        tutorId: tutorId,
      });
      console.log("Tutor added to favorites successfully!");
    } catch (error) {
      console.error("Error adding tutor to favorites:", error);
    }
  },
  {
    persist: true,
    revalidateTags: () => ["dashboard:favorite"],
    suppressWarnings: true,
    log: ["datacache", "verbose"],
    logid: "dashboard:favorite",
  },
);

export const getFavoriteTutor = memoize(
  async (userId: string) => {
    try {
      const favoriteTutors = await db
        .select({
          tutorId: userFavorites.tutorId,
          tutorName: tutors.name,
          tutorImage: tutors.image,
          tutorLanguage: tutors.language,
          tutorCategory: tutors.category,
          tutorStudents: tutors.students,
          tutorLessons: tutors.lessons,
          tutorSpeakLang: tutors.speakLang,
          tutorBenefit: tutors.benefit,
          tutorCost: tutors.cost,
          tutorSession: tutors.session,
        })
        .from(userFavorites)
        .leftJoin(tutors, eq(userFavorites.tutorId, tutors.id))
        .where(eq(userFavorites.userId, userId));

      return favoriteTutors;
    } catch (error) {
      console.error("Error fetching favorite tutors:", error);
      return [];
    }
  },
  {
    persist: true,
    revalidateTags: () => ["dashboard:favorite"],
    suppressWarnings: true,
    log: ["datacache", "verbose"],
    logid: "dashboard:favorite",
  },
);
