import React from "react";
import BredCrumbs from "./BredCrumbs";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import AccordionComponent from "./Accardion";
import TutorCard from "./TutorCard";

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

const data: TutorCard[] = [
  // English Tutors
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Samuel",
    language: "English",
    category: "English",
    students: "67 active students",
    lessons: "8,074 lessons",
    speakLang: "Speaks English (Native), Spanish (Pre-Intermediate)",
    benefit: "Native English speaker to help you improve your English skills",
    cost: "36",
    session: "50-min lesson",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jessica",
    language: "English",
    category: "English",
    students: "120 active students",
    lessons: "10,550 lessons",
    speakLang: "Speaks English (Native), French (Intermediate)",
    benefit: "Experienced English tutor focusing on conversational skills",
    cost: "42",
    session: "60-min lesson",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Michael",
    language: "English",
    category: "English",
    students: "89 active students",
    lessons: "9,245 lessons",
    speakLang: "Speaks English (Native), Italian (Basic)",
    benefit: "Specializes in business English and professional communication",
    cost: "38",
    session: "45-min lesson",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Emily",
    language: "English",
    category: "English",
    students: "53 active students",
    lessons: "7,320 lessons",
    speakLang: "Speaks English (Native), Japanese (Basic)",
    benefit: "Helps with academic English, essay writing, and test prep",
    cost: "35",
    session: "55-min lesson",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "David",
    language: "English",
    category: "English",
    students: "104 active students",
    lessons: "12,210 lessons",
    speakLang: "Speaks English (Native), German (Intermediate)",
    benefit: "Focuses on improving English pronunciation and fluency",
    cost: "40",
    session: "60-min lesson",
  },

  // German Tutors
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Lukas",
    language: "German",
    category: "German",
    students: "72 active students",
    lessons: "7,000 lessons",
    speakLang: "Speaks German (Native), English (Fluent)",
    benefit: "Native German tutor focusing on grammar and vocabulary",
    cost: "34",
    session: "50-min lesson",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sophia",
    language: "German",
    category: "German",
    students: "98 active students",
    lessons: "10,400 lessons",
    speakLang: "Speaks German (Native), French (Intermediate)",
    benefit: "Expert in teaching German to beginners",
    cost: "39",
    session: "60-min lesson",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Maximilian",
    language: "German",
    category: "German",
    students: "110 active students",
    lessons: "11,200 lessons",
    speakLang: "Speaks German (Native), Italian (Basic)",
    benefit: "Specializes in business German and professional communication",
    cost: "43",
    session: "55-min lesson",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Hanna",
    language: "German",
    category: "German",
    students: "65 active students",
    lessons: "8,500 lessons",
    speakLang: "Speaks German (Native), Spanish (Intermediate)",
    benefit: "Teaches German through interactive and immersive methods",
    cost: "37",
    session: "50-min lesson",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Friedrich",
    language: "German",
    category: "German",
    students: "85 active students",
    lessons: "9,300 lessons",
    speakLang: "Speaks German (Native), English (Fluent)",
    benefit: "Focuses on helping students master German idioms",
    cost: "40",
    session: "60-min lesson",
  },

  // Italian Tutors
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Giulia",
    language: "Italian",
    category: "Italian",
    students: "74 active students",
    lessons: "7,600 lessons",
    speakLang: "Speaks Italian (Native), English (Fluent)",
    benefit: "Native Italian tutor focusing on conversation and culture",
    cost: "38",
    session: "50-min lesson",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Alessandro",
    language: "Italian",
    category: "Italian",
    students: "85 active students",
    lessons: "8,900 lessons",
    speakLang: "Speaks Italian (Native), Spanish (Intermediate)",
    benefit: "Helps with mastering Italian grammar and vocabulary",
    cost: "40",
    session: "55-min lesson",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Martina",
    language: "Italian",
    category: "Italian",
    students: "62 active students",
    lessons: "7,200 lessons",
    speakLang: "Speaks Italian (Native), French (Basic)",
    benefit: "Specializes in Italian literature and advanced conversation",
    cost: "42",
    session: "60-min lesson",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Leonardo",
    language: "Italian",
    category: "Italian",
    students: "92 active students",
    lessons: "9,800 lessons",
    speakLang: "Speaks Italian (Native), English (Fluent)",
    benefit: "Teaches Italian for travel and daily life conversations",
    cost: "39",
    session: "55-min lesson",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Francesca",
    language: "Italian",
    category: "Italian",
    students: "78 active students",
    lessons: "8,100 lessons",
    speakLang: "Speaks Italian (Native), German (Basic)",
    benefit: "Helps with exam preparation and academic Italian",
    cost: "41",
    session: "60-min lesson",
  },
];

//TODO check separate route if its possible

export default function TutorList({ query }: { query: string }) {
  const filteredData = data.filter((item) => item.category === query);

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
