import { sendMessage } from "@/actions/sendMessage";
import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Input,
} from "@nextui-org/react";
export default function SendMessageModal({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <>
          <form action={sendMessage}>
            <ModalBody>
              <div className="flex flex-col gap-4 py-4">
                <label htmlFor="msg">Message</label>
                <input
                  className="border-1 py-3 px-4 rounded-lg"
                  type="text"
                  id="msg"
                  name="message"
                  placeholder="Send your Message ... "
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" type="submit">
                Send message
              </Button>
            </ModalFooter>
          </form>
        </>
      </ModalContent>
    </Modal>
  );
}
