import "server-only";
import { and, eq, gte, lte, or,asc, desc } from "drizzle-orm";
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

export const getTutors = async (queryParams: SearchParams) => {
  const { query, name, sortBy, min, max, page } = queryParams;

  // Initialize conditions array for filtering
  const conditions = [];

  // Add filtering conditions based on provided parameters
  if (name) {
    conditions.push(eq(tutors.name, name));
  }

  if (min !== undefined && min !== "") {
    conditions.push(gte(tutors.cost, min));
  }

  if (max !== undefined && max !== "") {
    conditions.push(lte(tutors.cost,max));
  }

  // Define sorting options using a lookup table
  const sortByOptions: { [key: string]: any } = {
    highest: desc(tutors.cost),
    lowest: asc(tutors.cost),
    name: asc(tutors.name),
  };

  // Retrieve the corresponding sort option
  const orderBy = sortByOptions[sortBy];

  // Construct the query options
  const queryOptions: any = {
    where: conditions.length > 0 ? and(...conditions) : undefined,
    // Include orderBy only if a valid sort option exists
    ...(orderBy ? { orderBy: [orderBy] } : {}),
    // Implement pagination if needed
    // skip: (page - 1) * pageSize,
    // take: pageSize,
  };

  try {
    // Execute the query
    const allTutors = await db.query.tutors.findMany(queryOptions);
    return allTutors;
  } catch (error) {
    console.error("Error fetching tutors:", error);
    throw error; 
  }
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
