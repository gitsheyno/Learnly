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
              <ModalBody className="py-6">
                <h3 className="text-lg font-medium mb-4">Favorite Tutors</h3>
                {data.length ? (
                  <>
                    <div className="space-y-3">
                      {data.map((item, index) => (
                        <div
                          key={index}
                          className="border rounded-md flex justify-between items-center overflow-hidden"
                        >
                          <div className="flex items-center gap-3 p-3">
                            <Avatar
                              alt={item.tutorName as string}
                              className="flex-shrink-0"
                              size="md"
                              src={item.tutorImage as string}
                            />
                            <div>
                              <p className="font-medium">{item.tutorName}</p>
                              <p className="text-sm text-gray-500">
                                {item.tutorCategory}
                              </p>
                              {item.tutorCost && (
                                <p className="text-sm text-gray-600">
                                  {item.tutorCost}/{item.tutorSession}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="flex h-full">
                            <button
                              className="h-full border-l px-4 py-3 hover:bg-gray-50 transition-colors"
                              aria-label="View tutor profile"
                            >
                              <FaArrowCircleRight className="text-gray-600" />
                            </button>
                            <button
                              onClick={() => addFavoriteTutor(item.tutorId)}
                              className="h-full border-l px-4 py-3 hover:bg-gray-50 transition-colors"
                              aria-label="Remove from favorites"
                            >
                              <MdOutlineDeleteOutline className="text-gray-600" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <p className="font-medium text-xl mb-2">
                      No favorite tutors here yet
                    </p>
                    <p className="text-gray-600">
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

                <Button color="primary" onPress={onClose}>
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
