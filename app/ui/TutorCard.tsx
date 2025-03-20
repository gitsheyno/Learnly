"use client";

import React from "react";
import Image from "next/image";
import { Button, useDisclosure, Tooltip, Badge } from "@nextui-org/react";
import SendMessageModal from "./SendMessageModal";
import Link from "next/link";
import {
  FaRegHeart,
  FaHeart,
  FaGraduationCap,
  FaUsers,
  FaCheck,
  FaComments,
  FaClock,
} from "react-icons/fa";
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

export default function TutorCard({
  item,
  isAuthenticated,
  fav,
}: {
  item: TutorCard;
  isAuthenticated: undefined | string;
  fav: boolean;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleNavigation = (tutorId: string) => {
    return isAuthenticated ? `/dashboard/${tutorId}` : "/signin";
  };

  return (
    <div className="group hover:shadow-xl transition-all duration-300 bg-white rounded-2xl overflow-hidden">
      <div className="relative p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Tutor Image and Status */}
          <div className="relative">
            <div className="relative h-24 w-24 sm:h-32 sm:w-32 mx-auto sm:mx-0 overflow-hidden rounded-full border-4 border-gray-50 shadow-md group-hover:shadow-lg transition-all duration-300">
              <Image
                src={
                  item.image ||
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt={`${item.name}'s profile picture`}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 right-0">
                {/* <Badge
                  content=""
                  size="sm"
                  color="success"
                  placement="bottom-right"
                  shape="circle"
                  className="border-2 border-white"
                /> */}
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 sm:bottom-0 sm:right-0 bg-blue-500 text-white text-xs rounded-full px-2 py-1 shadow-md transform translate-y-1/2 sm:translate-y-0">
              {item.language}
            </div>
          </div>

          {/* Tutor Information */}
          <div className="flex-1 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-center sm:text-left">
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <h3 className="font-bold text-xl text-gray-800">{item.name}</h3>
                {isAuthenticated && (
                  <button
                    onClick={() => addFavoriteTutor(item.id)}
                    className="focus:outline-none transform transition hover:scale-110"
                    aria-label={
                      fav ? "Remove from favorites" : "Add to favorites"
                    }
                  >
                    {fav ? (
                      <FaHeart className="text-pink-500 text-xl" />
                    ) : (
                      <FaRegHeart className="text-gray-400 hover:text-pink-500 text-xl" />
                    )}
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 justify-center sm:justify-end">
                <div className="relative group cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 p-0.5 rounded-xl">
                  <div className="bg-white rounded-lg px-3 py-2 flex flex-col items-center">
                    <p className="font-bold text-gray-800 text-lg">
                      {item.cost} €
                    </p>
                    <div className="flex items-center text-gray-500 text-xs">
                      <FaClock className="mr-1" /> {item.session}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-25 rounded-xl transition-opacity"></div>
                </div>
              </div>
            </div>

            {/* Stats & Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <FaUsers className="text-blue-500" />
                <span>{item.students} students</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaGraduationCap className="text-blue-500" />
                <span>{item.lessons}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaCheck className="text-green-500" />
                <span>{item.benefit}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaComments className="text-purple-500" />
                <span>Also speaks: {item.speakLang}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 mt-2 border-t border-gray-100">
              {isAuthenticated && (
                <Button
                  onClick={onOpen}
                  className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 font-medium py-2"
                  radius="md"
                  startContent={<FaComments />}
                >
                  Send Message
                </Button>
              )}

              <Button
                as={Link}
                href={handleNavigation(item.id)}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium py-2 shadow-md hover:shadow-lg"
                radius="md"
                startContent={<FaGraduationCap />}
              >
                Book a Lesson
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Available Times Tag - Optional enhancement */}
      <div className="bg-gray-50 px-6 py-3 text-sm text-gray-500 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <span className="font-medium">Popular times:</span>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">
              Mon 4PM
            </span>
            <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">
              Wed 6PM
            </span>
            <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">
              Fri 5PM
            </span>
          </div>
        </div>
      </div>

      <SendMessageModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
