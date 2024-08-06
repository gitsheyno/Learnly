"use client";

import { usePathname } from "next/navigation";
import React from "react";
export default function RootLayoutComponents({
  children,
  infos,
  categories,
  guides,
  tutorslider,
  becomeTutor,
}: {
  children: React.ReactNode;
  infos: React.ReactNode;
  guides: React.ReactNode;
  categories: React.ReactNode;
  tutorslider: React.ReactNode;
  becomeTutor: React.ReactNode;
}) {
  const path = usePathname();

  return (
    <>
      {path === "/" ? (
        <>
          {children}
          {infos}
          {categories}
          {tutorslider}
          {guides}
          {becomeTutor}
        </>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
