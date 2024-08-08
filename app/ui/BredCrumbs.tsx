"use client";
import clsx from "clsx";
import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

type Data = {
  title: string;
  sub?: string;
  status?: boolean;
};

export default function BredCrumbs({ data }: { data: Data[] }) {
  return (
    <div className="text-left  my-4">
      <Breadcrumbs>
        {data.map((item, index) => (
          <BreadcrumbItem
            className=" text-md md:text-4xl flex items-start"
            key={index}
          >
            <div className="flex flex-col items-center justify-start">
              <p
                className={clsx("text-md md:text-2xl", {
                  "text-black": item.status === true,
                  "text-gray-500": item.status === false,
                })}
              >
                {item.title}
              </p>
              <p className="text-xs hidden md:block text-gray-500">
                {item.sub}
              </p>
            </div>
          </BreadcrumbItem>
        ))}
      </Breadcrumbs>
    </div>
  );
}
