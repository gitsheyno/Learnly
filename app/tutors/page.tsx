import React from "react";
import TutorList from "component/TutorList";
import TutorFilter from "component/TutorFilter";
import { getCurrentUser } from "@/utils";

export default async function page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  const user = await getCurrentUser();
  return (
    <section className="max-w-6xl px-6 text-center  mx-auto flex flex-col justify-between items-center ">
      <TutorFilter />
      {/* <TutorList query={query} /> */}
    </section>
  );
}
