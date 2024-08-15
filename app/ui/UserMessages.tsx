"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import { changeMessageStatus } from "@/actions/bookingRecipt";

type Message = {
  description: string | null;
  status : string
};
import { MdOutlineMessage } from "react-icons/md";
export default function UserMessages({ data }: { data: Message[] }) {
  console.log("fata" , data)

  const handleClick = async ()=>{
    onOpen()
    await changeMessageStatus()
  }

  const unReadMessages = data.reduce((item, acc) => {
    if (acc.status === "unread") {
        item++;
    }
    return item; 
}, 0);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <MdOutlineMessage
        onClick={handleClick}
        className="text-2xl cursor-pointer hover:text-red-500"
      />
      {unReadMessages > 0 ? <>{unReadMessages}</> : null} : messages
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                {data.length ? (
                  <>
                    {data.map((item) => (
                      <p>{item.description}</p>
                    ))}
                  </>
                ) : (
                  <div className="flex flex-col gap-4 justify-center items-center py-6">
                    <p className="font-bold text-2xl">
                      No favorite tutors here yet
                    </p>
                    <p>
                      Browse and favorite tutors on the "Find tutors" page. View
                      and book your favorites here anytime.
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
