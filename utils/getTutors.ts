import "server-only";
import { and, eq } from "drizzle-orm";
import { db } from "@/db/db";
import { userFavorites } from "@/db/schema";
import { memoize } from "nextjs-better-unstable-cache";
import { tutors } from "@/db/schema";

export const getTutors = async (
  query: string,
  name: string,
  sortBy: string,
  ...price: number[]
) => {
  if (price) {
    const allTutors = await db.query.tutors.findMany();
    const [min, max] = price;

    const filteredTutors = allTutors.filter((tutor) => {
      const cost = tutor.cost as unknown as number;

      return cost >= min && cost <= max;
    });

    return filteredTutors;
  }

  if (sortBy) {
    const allTutors = await db.query.tutors.findMany();

    if (sortBy === "highest") {
      allTutors.sort((a, b) => {
        const costA = a.cost as unknown as number;
        const costB = b.cost as unknown as number;
        return costB - costA;
      });

      return allTutors;
    } else if (sortBy === "lowest") {
      allTutors.sort((a, b) => {
        const costA = a.cost as unknown as number;
        const costB = b.cost as unknown as number;
        return costA - costB;
      });

      return allTutors;
    }
  }

  if (name) {
    const allTutors = await db.query.tutors.findMany();

    const filteredTutors = allTutors.filter((tutor) =>
      tutor.name.includes(name),
    );

    return filteredTutors;
  }
  const requestedTutors = await db.query.tutors.findMany({
    where: eq(tutors.category, query),
  });

  return requestedTutors;
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
