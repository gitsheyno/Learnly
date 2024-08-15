"use client";
import { Badge, Avatar } from "@nextui-org/react";
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
import clsx from "clsx";
import { changeMessageStatus } from "@/actions/bookingRecipt";

type Message = {
  description: string | null;
  status: string;
};
import { MdOutlineMessage } from "react-icons/md";
export default function UserMessages({ data }: { data: Message[] }) {
  console.log("fata", data);

  const handleClick = async () => {
    onOpen();
    await changeMessageStatus();
  };

  const unReadMessages = data.reduce((item, acc) => {
    if (acc.status === "unread") {
      item++;
    }
    return item;
  }, 0);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className=" flex items-center relative gap-2">
        <Badge content={unReadMessages | 0}>
          <MdOutlineMessage
            onClick={handleClick}
            className={clsx("text-2xl cursor-pointer hover:text-red-500", {
              "text-red-500": unReadMessages,
            })}
          />
        </Badge>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="px-4 py-8">
                {data.length ? (
                  <>
                    {data.map((item) => (
                      <div className="flex  gap-6 mb-4 items-center">
                        <Avatar
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          size="sm"
                        />
                        <p className="text-xs text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </>
                ) : (
                  <div className="flex flex-col gap-4 justify-center items-center py-6">
                    <p className="font-bold text-2xl">No messages found</p>
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
