import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import TutorList from "../ui/TutorList";
const data = [
  "English",
  "English",
  "English",
  "English",
  "English",
  "English",
  "English",
  "English",
  "English",
  "English",
  "English",
  "English",
  "English",
];
export default function tutors() {
  return (
    <section className="max-w-6xl px-6 text-center  mx-auto flex flex-col justify-between items-center ">
      <div className="grid grid-cols-1 md:grid-cols-2  justify-center items-center gap-10">
        <div className="flex flex-col items-start gap-4 py-8">
          <h1 className="text-4xl font-bold text-left">
            Online German tutors & teachers for private lessons
          </h1>
          <p className="text-left">
            Looking for an online tutor? Learnly is the leading online learning
            platform worldwide.
          </p>
          <p className="font-bold">I want to learn</p>
          <ul className="flex gap-2 flex-wrap">
            {data.map((item, index) => (
              <li
                className="border-1 text-xs cursor-pointer md:text-lg rounded-md px-4 py-1  hover:bg-gray-200"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
          <Button className="bg-pink-400 w-[100%] md:w-auto" variant="shadow">
            <Link href="#">Get started</Link>
          </Button>
        </div>
        <div className="mx-auto">
          <Image
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={300}
            height={350}
            alt="image"
          />
        </div>
      </div>
      <TutorList />
    </section>
  );
}
