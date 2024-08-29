import React from "react";
import { Suspense } from "react";
import TutorList from "@/app/ui/TutorList";
import TutorFilter from "@/app/ui/TutorFilter";

export default async function page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "English";

  return (
    <div className="max-w-6xl px-6  text-center  mx-auto flex flex-col justify-between items-center ">
      <TutorFilter />
      <Suspense key={query} fallback={<p>wait...</p>}>
        <TutorList query={query} />
      </Suspense>
    </div>
  );
}
