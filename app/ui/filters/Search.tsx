import React from "react";
import { Input } from "@nextui-org/react";
export default function Search() {
  return (
    <Input
      type="text"
      label="Search"
      name=""
      className=" w-[400px] md:w-[600px]"
      classNames={{ inputWrapper: ["bg-transparent border-1 border-black"] }}
    />
  );
}
