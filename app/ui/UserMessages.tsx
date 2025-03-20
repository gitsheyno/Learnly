"use client";

import React, { useState } from "react";
import { Badge } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Avatar,
  Tooltip,
  Spinner,
} from "@nextui-org/react";
import { MdOutlineMessage } from "react-icons/md";
import { changeMessageStatus } from "@/actions/bookingRecipt";
import { motion } from "framer-motion";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { format } from "date-fns";

type DBMessage = {
  description: string | null;
  status: string;
};

interface Message extends DBMessage {
  id?: string;
  createdAt?: Date;
  sender?: {
    name: string;
    avatar?: string;
  };
}

function isValidStatus(status: string): status is "read" | "unread" {
  return status === "read" || status === "unread";
}

interface UserMessagesProps {
  data: Message[];
  onMarkAllRead?: () => Promise<void>;
  isLoading?: boolean;
}

export default function UserMessages({
  data,
  onMarkAllRead,
  isLoading = false,
}: UserMessagesProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isProcessing, setIsProcessing] = useState(false);
  const [localMessages, setLocalMessages] = useState<Message[]>(data);

  const unreadCount = localMessages.filter(
    (msg) => msg.status === "unread",
  ).length;

  const handleOpenMessages = async () => {
    onOpen();

    if (unreadCount > 0) {
      try {
        setIsProcessing(true);
        await changeMessageStatus();

        setLocalMessages((prev) =>
          prev.map((msg) => ({ ...msg, status: "read" })),
        );

        if (onMarkAllRead) await onMarkAllRead();
      } catch (error) {
        console.error("Failed to update message status:", error);
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const formatMessageDate = (date?: Date) => {
    if (!date) return "";
    return format(date, "MMM d, h:mm a");
  };

  return (
    <>
      <Tooltip
        content={`${unreadCount} unread message${unreadCount !== 1 ? "s" : ""}`}
      >
        <div className="relative flex items-center">
          <Badge
            content={unreadCount || undefined}
            color="danger"
            size="sm"
            isInvisible={unreadCount === 0}
            classNames={{
              badge: "font-semibold",
            }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={handleOpenMessages}
                disabled={isLoading}
                aria-label="Open messages"
                className="relative flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <MdOutlineMessage
                  className={`text-2xl transition-colors ${
                    unreadCount > 0
                      ? "text-red-500"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                />
                {isLoading && (
                  <span className="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-black/50 rounded-full">
                    <Spinner size="sm" color="danger" />
                  </span>
                )}
              </button>
            </motion.div>
          </Badge>
        </div>
      </Tooltip>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          base: "max-w-md rounded-lg",
          header: "border-b border-gray-100 dark:border-gray-800",
          body: "p-0",
        }}
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="p-0">
                <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Messages</h3>
                  {isProcessing && <Spinner size="sm" color="danger" />}
                </div>

                <div className="py-2">
                  {localMessages.length > 0 ? (
                    <div className="divide-y divide-gray-100 dark:divide-gray-800">
                      {localMessages.map((message, index) => (
                        <div
                          key={message.id || index}
                          className={`p-4 flex gap-3 ${
                            message.status === "unread"
                              ? "bg-red-50 dark:bg-red-900/10"
                              : ""
                          }`}
                        >
                          <Avatar
                            src={
                              message.sender?.avatar ||
                              "https://i.pravatar.cc/150?img=" + (index + 1)
                            }
                            size="sm"
                            classNames={{
                              base: "flex-shrink-0",
                            }}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <p className="font-medium text-sm">
                                {message.sender?.name || "System"}
                              </p>
                              <span className="text-xs text-gray-400">
                                {formatMessageDate(message.createdAt)}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 break-words">
                              {message.description}
                            </p>
                            {message.status === "read" && (
                              <div className="flex items-center mt-1">
                                <IoCheckmarkDoneOutline className="text-xs text-blue-500" />
                                <span className="text-xs text-gray-400 ml-1">
                                  Read
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 px-4">
                      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full mb-4">
                        <MdOutlineMessage className="text-3xl text-gray-400" />
                      </div>
                      <p className="font-medium text-lg text-center mb-1">
                        No messages
                      </p>
                      <p className="text-sm text-gray-500 text-center">
                        You don&#39;t have any messages at the moment
                      </p>
                    </div>
                  )}
                </div>
              </ModalBody>

              <ModalFooter className="border-t border-gray-100 dark:border-gray-800">
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                  className="font-medium"
                >
                  Close
                </Button>
                {localMessages.length > 0 && unreadCount > 0 && (
                  <Button
                    color="primary"
                    onPress={async () => {
                      try {
                        setIsProcessing(true);
                        await changeMessageStatus();
                        setLocalMessages((prev) =>
                          prev.map((msg) => ({ ...msg, status: "read" })),
                        );
                        if (onMarkAllRead) await onMarkAllRead();
                      } catch (error) {
                        console.error("Failed to mark all as read:", error);
                      } finally {
                        setIsProcessing(false);
                      }
                    }}
                    isLoading={isProcessing}
                    className="font-medium"
                  >
                    Mark all as read
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
