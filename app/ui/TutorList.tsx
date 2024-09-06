import React from "react";
import BredCrumbs from "component/BredCrumbs";
import { getCurrentUser } from "@/utils/users";
import AccordionComponent from "component/Accardion";
import TutorCard from "component/TutorCard";
import { getTutors } from "@/utils/getTutors";
import { getFavoriteTutor } from "@/utils/getTutors";
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

export default async function TutorList({ query }: { query: string }) {
  const user = await getCurrentUser();
  const tutors: TutorCard[] = await getTutors(query);
  const favoriteTutors: FavTutorCard[] = await getFavoriteTutor(
    user?.id as string,
  );
  const filteredData = tutors.filter((item) => item.category === query);

  const isFavorite = (item: TutorCard) => {
    const res = favoriteTutors.filter((tutor) => {
      return tutor.tutorId === item.id ? true : false;
    });

    return res.length ? true : false;
  };

  return (
    <section className="max-w-full px-6 text-center my-24 mx-auto flex flex-col justify-between items-center">
      <div className="flex flex-col gap-6 mb-6">
        {filteredData.map((item, index) => (
          <TutorCard
            key={index}
            item={item}
            isAuthenticated={user?.id}
            fav={isFavorite(item)}
          />
        ))}
      </div>

      <BredCrumbs data={[{ title: "Tutors" }, { title: "Find a Tutor" }]} />
      <AccordionComponent />
    </section>
  );
}
