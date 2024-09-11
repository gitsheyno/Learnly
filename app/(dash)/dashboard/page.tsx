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
    name?: string;
    sortBy?: string;
    min?: number;
    max?: number;
  };
}) {
  const query = searchParams?.query || "English";
  const name = searchParams?.name || "";
  const sortBy = searchParams?.sortBy || "";
  const min = searchParams?.min || 0;
  const max = searchParams?.max || 50;

  return (
    <div className="max-w-6xl px-6  text-center  mx-auto flex flex-col justify-between items-center ">
      <TutorFilter />
      <Suspense
        key={query + name + sortBy + min + max}
        fallback={<SkeletonUI />}
      >
        <TutorList
          query={query}
          name={name}
          sortBy={sortBy}
          min={min}
          max={max}
        />
      </Suspense>
    </div>
  );
}
