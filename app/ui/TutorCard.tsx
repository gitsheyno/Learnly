"use client";
import React from "react";
import Image from "next/image";
import { Button, useDisclosure } from "@nextui-org/react";
import SendMessageModal from "./SendMessageModal";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaRegHeart } from "react-icons/fa";
import { addFavoriteTutor } from "@/actions/addFavoriteTutor";

type TutorCard = {
  id: string;
  image: string;
  name: string;
  language: string;
  students: string;
  lessons: string;
  speakLang: string;
  benefit: string;
  cost: string;
  session: string;
};

export default function TutorCard({ item }: { item: TutorCard }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
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
            <div className="flex  items-center gap-4">
              <h3 className="font-bold text-xl">{item.name} 🏴󠁧󠁢󠁥󠁮󠁧󠁿</h3>
              <FaRegHeart
                onClick={() => addFavoriteTutor(item.id)}
                className="hover:text-red-500 cursor-pointer"
              />
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold">{item.cost} €</p>
              <p className="text-gray-400 text-xs">{item.session} </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start text-gray-400">
            <p>🎓 {item.language}</p>
            <p>
              👤 {item.students} {item.lessons}
            </p>
            <p> ✍︎ {item.benefit}</p>
            <p className="text-left text-black">{item.speakLang}</p>
          </div>
        </div>

        <div className="col-start-2 col-span-3 flex flex-col items-start"></div>
        <div className=" col-start-5 col-span-2 flex flex-col items-start row-start-1 row-span-1 gap-4 justify-center">
          <Button
            as={Link}
            href={`/dashboard/${1}`}
            className="w-full bg-pink-400 border-1 border-black"
          >
            Book a lesson
          </Button>
          <SendMessageModal isOpen={isOpen} onOpenChange={onOpenChange} />
          <Button onClick={onOpen} className="w-full border-1 bg-white ">
            Send a Message
          </Button>
        </div>
      </div>
    </div>
  );
}
