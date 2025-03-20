"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function RootLayoutComponents({
  children,
  infos,
  categories,
  guides,
  becomeTutor,
}: {
  children: React.ReactNode;
  infos: React.ReactNode;
  guides: React.ReactNode;
  categories: React.ReactNode;
  becomeTutor: React.ReactNode;
}) {
  const path = usePathname();

  return (
    <>
      {path === "/" ? (
        <div className="flex flex-col w-full">
          <section className="w-full">{children}</section>

          <div className="flex flex-col gap-16 my-8">
            <section className="w-full">{infos}</section>
            <section className="w-full">{categories}</section>
            <section className="w-full">{guides}</section>
            <section className="w-full">{becomeTutor}</section>
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
