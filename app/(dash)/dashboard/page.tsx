import React from "react";
import { Suspense } from "react";
import TutorList from "component/TutorList";
import TutorFilter from "component/TutorFilter";
import SkeletonUI from "component/Skeleton";
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
      <Suspense key={query} fallback={<SkeletonUI />}>
        <TutorList query={query} />
      </Suspense>
    </div>
  );
}
