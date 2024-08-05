import Link from "next/link";
import React from "react";

const data = [
  {
    title: "ABOUT US",
    list: [
      "Who we are",
      "How it works",
      "Learnly reviews",
      "Work at Learnly",
      "Status",
    ],
  },
  {
    title: "FOR STUDENTS",
    list: [
      "Reply Blog",
      "Student discount",
      "Refer a friend",
      "Test your English vocab for free",
      "Test your vocab",
    ],
  },
  {
    title: "For TUTORS",
    list: [
      "Become an oline tutor",
      "Teach english online",
      "Teach French online",
      "Teach German online",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black">
      <section className=" bg-black  mx-auto container max-w-6xl grid grid-cols-1 md:grid-cols-3 items-center justify-center p-8 gap-6">
        {data.map((item,index)=>(
            <ul className="flex flex-col gap-1 h-[200px] items-center" key={index}>
                <h5 className="text-white mb-4 font-bold text-lg">{item.title}</h5>
                {item.list.map((li,index)=>(
                    <li key={index} className="text-white underline text-sm">
                        <Link href="#">{li}</Link>
                    </li>
                ))}
            </ul>
        ))}
      </section>
    </footer>
  );
}
