import React from "react";
import Booking from "@/app/ui/Booking";

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

export default function BookingPage({ params }: { params: { id: string } }) {
  const data: TutorCard = {
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
  };

  //TODO fetch the data from db

  return (
    <div>
      <Booking data={data} />
    </div>
  );
}
