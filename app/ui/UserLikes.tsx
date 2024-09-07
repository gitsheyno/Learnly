"use client";
import React from "react";
import { Badge } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Avatar } from "@nextui-org/react";
import { addFavoriteTutor } from "@/actions/addFavoriteTutor";

type TutorCard = {
  tutorId: string;
  tutorName: string | null;
  tutorImage: string | null;
  tutorLanguage: string | null;
  tutorCategory: string | null;
  tutorStudents: string | null;
  tutorLessons: string | null;
  tutorSpeakLang: string | null;
  tutorBenefit: string | null;
  tutorCost: string | null;
  tutorSession: string | null;
};

export default function UserLikes({ data }: { data: TutorCard[] }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const unReadMessages = data.reduce((item, acc) => {
    if (acc) {
      item++;
    }
    return item;
  }, 0);
  return (
    <>
      <Badge content={unReadMessages}>
        <FaRegHeart
          onClick={onOpen}
          className="text-2xl cursor-pointer hover:text-red-500"
        />
      </Badge>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                {data.length ? (
                  <>
                    <div className="mt-6  py-2">
                      <div className=" flex flex-col gap-2">
                        {data.map((item, index) => (
                          <div
                            key={index}
                            className=" border-1  flex gap-2 justify-between pl-2 items-center"
                          >
                            <div
                              className="flex items-center gap-2"
                              key={item.tutorId}
                            >
                              <Avatar
                                alt={item.tutorName as string}
                                className="flex-shrink-0"
                                size="lg"
                                src={item.tutorImage as string}
                              />
                              <div className="flex flex-col">
                                <span className="text-small">
                                  {item.tutorName}
                                </span>
                                <span className="text-tiny text-default-400">
                                  {item.tutorCategory}
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-col">
                              <div className="border-l-1 border-b-1 flex-1  py-3 px-3 flex items-center justify-center hover:bg-gray-500 hover:text-white cursor-pointer">
                                <FaArrowCircleRight
                                  className="text-xl "
                                  tabIndex={0}
                                />
                              </div>
                              <div className="border-l-1 flex-1 py-3 px-3 hover:bg-gray-500 hover:text-white cursor-pointer">
                                <MdOutlineDeleteOutline
                                  tabIndex={0}
                                  onClick={() => addFavoriteTutor(item.tutorId)}
                                  className="text-xl"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col gap-4 justify-center items-center py-6">
                    <p className="font-bold text-2xl">
                      No favorite tutors here yet
                    </p>
                    <p>
                      Browse and favorite tutors on the &quot;Find tutors&quot;
                      page. View and book your favorites here anytime.
                    </p>
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>

                <Button className="bg-pink-400 text-black" onPress={onClose}>
                  Browse tutors
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
