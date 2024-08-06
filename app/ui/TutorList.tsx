import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
const data = [
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Samuel",
    language: "English",
    students: "67 active students",
    lessons: "8,074 lessons",
    speakLang:
      "Speaks German (Native), English (Native), Spanish (Pre-Intermediate)",
    benefit: "Native German here to help you improve your German-skills",
    cost: "36",
    session: "50 - min lesson",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Samuel",
    language: "English",
    students: "67 active students",
    lessons: "8,074 lessons",
    speakLang:
      "Speaks German (Native), English (Native), Spanish (Pre-Intermediate)",
    benefit: "Native German here to help you improve your German-skills",
    cost: "36",
    session: "50 - min lesson",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Samuel",
    language: "English",
    students: "67 active students",
    lessons: "8,074 lessons",
    speakLang:
      "Speaks German (Native), English (Native), Spanish (Pre-Intermediate)",
    benefit: "Native German here to help you improve your German-skills",
    cost: "36",
    session: "50 - min lesson",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Samuel",
    language: "English",
    students: "67 active students",
    lessons: "8,074 lessons",
    speakLang:
      "Speaks German (Native), English (Native), Spanish (Pre-Intermediate)",
    benefit: "Native German here to help you improve your German-skills",
    cost: "36",
    session: "50 - min lesson",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Samuel",
    language: "English",
    students: "67 active students",
    lessons: "8,074 lessons",
    speakLang:
      "Speaks German (Native), English (Native), Spanish (Pre-Intermediate)",
    benefit: "Native German here to help you improve your German-skills",
    cost: "36",
    session: "50 - min lesson",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Samuel",
    language: "English",
    students: "67 active students",
    lessons: "8,074 lessons",
    speakLang:
      "Speaks German (Native), English (Native), Spanish (Pre-Intermediate)",
    benefit: "Native German here to help you improve your German-skills",
    cost: "36",
    session: "50 - min lesson",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Samuel",
    language: "English",
    students: "67 active students",
    lessons: "8,074 lessons",
    speakLang:
      "Speaks German (Native), English (Native), Spanish (Pre-Intermediate)",
    benefit: "Native German here to help you improve your German-skills",
    cost: "36",
    session: "50 - min lesson",
  },
];

//TODO check separate route if its possible

export default function TutorList() {
  return (
    <section className="max-w-full px-6 text-center my-24 mx-auto flex flex-col justify-between items-center">
      <div className="flex flex-col gap-6">
        {data.map((item, index) => (
          <div key={index}>
            <div className="grid grid-cols-6 gap-4 p-8 border-1 border-black">
              <div className="col-start-1 col-span-1">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={100}
                  height={100}
                  alt="img"
                  className="w-[100%] object-cover"
                />
              </div>
              <div className="col-start-2 col-span-3 flex flex-col items-start gap-2">
                <div className="flex justify-between w-full">
                  <h3 className="font-bold text-xl">{item.name} 🏴󠁧󠁢󠁥󠁮󠁧󠁿</h3>
                  <div className="flex flex-col items-center">
                    <p className="font-bold">{item.cost} €</p>
                    <p className="text-gray-400 text-xs">{item.session} </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start text-gray-400">
                <p>🎓 {item.language}</p>
                <p>
                 👤  {item.students} {item.lessons}
                </p>
                <p> ✍︎  {item.benefit}</p>
                <p className="text-left text-black">{item.speakLang}</p>
                </div>
              </div>

              <div className="col-start-2 col-span-3 flex flex-col items-start"></div>
              <div className=" col-start-5 col-span-2 flex flex-col items-start row-start-1 row-span-1 gap-4 justify-center">
                <Button className="w-full bg-pink-400 border-1 border-black">
                  Book a lesson
                </Button>
                <Button className="w-full border-1 bg-white ">
                  Send a Message
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
