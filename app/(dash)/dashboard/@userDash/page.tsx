import React from "react";
import { BsCashStack } from "react-icons/bs";
import { getCurrentUser } from "@/utils";
export default async function page() {
  const user = await getCurrentUser();
  return (
    <>
      {user ? (
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <BsCashStack className="text-2xl cursor-pointer hover:text-red-400" />{" "}
            Balance:
          </div>
          <p className="font-bold">0 lessons</p>
        </div>
      ) : null}
    </>
  );
}
