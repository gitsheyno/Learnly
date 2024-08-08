import React from "react";
import TutorList from "@/app/ui/TutorList";
import TutorFilter from "@/app/ui/TutorFilter";
export default function page() {
  return (
    <div className="max-w-6xl px-6  text-center  mx-auto flex flex-col justify-between items-center ">
      <TutorFilter />
      <TutorList />
    </div>
  );
}
