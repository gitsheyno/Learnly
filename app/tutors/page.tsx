import React from "react";

import TutorList from "../ui/TutorList";
import TutorFilter from "../ui/TutorFilter";

export default function tutors() {
  return (
    <section className="max-w-6xl px-6 border-2 text-center  mx-auto flex flex-col justify-between items-center ">
      <TutorFilter />
      <TutorList />
    </section>
  );
}
