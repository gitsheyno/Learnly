"use server";
import { getCurrentUser } from "@/utils";
import { revalidateTag } from "next/cache";
import { addFavorite, removeFromFavorite, getFavoriteTutor } from "@/utils";

type TutorCard = {
  id: string;
  category?: string;
  image: string;
  name: string;
  language: string;
  students: string;
  lessons: string;
  speakLang: string;
  benefit: string;
  cost: string;
  session: string;
};

type FavTutorCard = {
  tutorId: string;
  tutorName: string | null;
  tutorImage: string | null;
  tutorLanguage: string | null;
  tutorCategory: string | null;
  tutorStudents: string | null;
  tutorLessons: string | null;
  tutorSpeakLang: string | null;
  tutorBenefit: string | null;
  tutorCost: string | null;
  tutorSession: string | null;
};

const isFavorite = (item: string, tutorsList: FavTutorCard[]) => {
  const res = tutorsList.filter((tutor) => {
    return tutor.tutorId === item ? true : false;
  });

  return res.length ? true : false;
};

export const addFavoriteTutor = async (tutorId: string) => {
  const user = await getCurrentUser();
  const tutorsList = await getFavoriteTutor(user?.id as string);

  const res = isFavorite(tutorId, tutorsList);
  console.log("res", res);
  res
    ? await removeFromFavorite(tutorId, user?.id as string)
    : await addFavorite(tutorId, user?.id as string);

  revalidateTag("dashboard:favorite");
  revalidateTag("favorite");
};
