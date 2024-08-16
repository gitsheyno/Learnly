import React from "react";
import UserLikes from "@/app/ui/UserLikes";
import { getCurrentUser } from "@/utils/users";
import { getFavoriteTutor } from "@/utils/getTutors";

type TutorCard = {
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

export default async function page() {
  const user = await getCurrentUser();
  const favoriteTutors: TutorCard[] = await getFavoriteTutor(
    user?.id as string,
  );

  // const favoriteTutors: FavoriteTutor[] = [];

  return <>{user ? <UserLikes data={favoriteTutors} /> : null}</>;
}
