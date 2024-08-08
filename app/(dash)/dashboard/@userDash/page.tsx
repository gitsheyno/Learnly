import React from "react";
import { MdOutlineMessage } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { BsCashStack } from "react-icons/bs";
import { getCurrentUser } from "@/utils/users";
import { Button } from "@nextui-org/react";
export default async function page() {
  const user = await getCurrentUser();
  console.log(user)
  return (
    <>
      {user ? (
        <div className="flex max-w-6xl justify-end px-4 items-center gap-6 mx-auto py-8">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <BsCashStack className="text-2xl cursor-pointer hover:text-red-400" />{" "}
              Balance:
            </div>
            <p className="font-bold">0 lessons</p>
          </div>
          <Button className="bg-transparent text-black border-2 border-black">
            Subscribe
          </Button>
          <MdOutlineMessage className="text-2xl cursor-pointer hover:text-red-500" />
          <IoMdHelpCircleOutline className="text-2xl cursor-pointer hover:text-red-500" />
          <FaRegHeart className="text-2xl cursor-pointer hover:text-red-500" />
        </div>
      ) : null}
    </>
  );
}
