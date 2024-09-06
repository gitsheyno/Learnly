import React from "react";
import { Skeleton } from "@nextui-org/skeleton";

export default function SkeletonUI() {
  return (
    <>
      <SkeletonList />
      <SkeletonList />
      <SkeletonList />
      <SkeletonList />
      <SkeletonList />
    </>
  );
}

const SkeletonList = () => {
  return (
    <div className="grid w-full grid-cols-6 gap-4 p-8  mt-12 ">
      {/* Image Skeleton */}
      <Skeleton className="col-start-1 col-span-1 rounded-lg">
        <div className="h-24 w-full bg-default-300">
          {/* Placeholder for Image */}
        </div>
      </Skeleton>

      {/* Content Skeleton */}
      <div className="col-start-2 col-span-3 flex flex-col items-start gap-2">
        <Skeleton className="w-full rounded-lg">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-4">
              <div className="h-6 w-3/5 rounded-lg bg-default-200"></div>
              <div className="h-6 w-10 rounded-lg bg-default-300"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-6 w-12 rounded-lg bg-default-200"></div>
              <div className="h-4 w-8 rounded-lg bg-default-300"></div>
            </div>
          </div>
        </Skeleton>

        <Skeleton className="w-full rounded-lg">
          <div className="flex flex-col gap-2 items-start">
            <div className="h-4 w-4/5 rounded-lg bg-default-300"></div>
            <div className="h-4 w-3/5 rounded-lg bg-default-300"></div>
            <div className="h-4 w-2/5 rounded-lg bg-default-300"></div>
            <div className="h-4 w-full rounded-lg bg-default-200"></div>
          </div>
        </Skeleton>
      </div>

      {/* Empty Flex Skeleton */}
      <Skeleton className="col-start-2 col-span-3 flex flex-col items-start rounded-lg">
        <div className="h-6 w-full bg-default-300"></div>
      </Skeleton>

      {/* Buttons and Modal Skeleton */}
      <div className="col-start-5 col-span-2 flex flex-col items-start row-start-1 row-span-1 gap-4 justify-end">
        <Skeleton className="w-full rounded-lg">
          <div className="h-10 bg-default-300">
            {/* Placeholder for SendMessageModal */}
          </div>
        </Skeleton>
        <Skeleton className="w-full rounded-lg">
          <div className="h-10 bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-full rounded-lg">
          <div className="h-10 bg-default-300"></div>
        </Skeleton>
      </div>
    </div>
  );
};
