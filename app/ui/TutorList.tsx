import React from "react";
import BredCrumbs from "./BredCrumbs";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import AccordionComponent from "./Accardion";
import TutorCard from "./TutorCard";
import { getTutors } from "@/utils/getTutors";

const colors = [
  "foreground",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
];

type TutorCard = {
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

//TODO implement the favorite tutors

export default async function TutorList({ query }: { query: string }) {
  const tutors: TutorCard[] = await getTutors(query);
  const filteredData = tutors.filter((item) => item.category === query);
  return (
    <section className="max-w-full px-6 text-center my-24 mx-auto flex flex-col justify-between items-center">
      <div className="flex flex-col gap-6 mb-6">
        {filteredData.map((item, index) => (
          <TutorCard key={index} item={item} />
        ))}
      </div>

      <BredCrumbs data={[{ title: "Tutors" }, { title: "Find a Tutor" }]} />
      <AccordionComponent />
    </section>
  );
}
