import React from "react";
//TODO it should be slot

import { Card, CardBody } from "@nextui-org/react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
const data = [
  {
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    title: "English tutor",
    quantity: "23,578 teachers",
  },
  {
    flag: "🇪🇸",
    title: "Spanish tutor",
    quantity: "23,578 teachers",
  },
  {
    flag: "🇫🇷",
    title: "French tutor",
    quantity: "23,578 teachers",
  },
  {
    flag: "🇩🇪",
    title: "German tutor",
    quantity: "23,578 teachers",
  },
  {
    flag: "🇮🇹",
    title: "Italian tutor",
    quantity: "23,578 teachers",
  },
  {
    flag: "󠁧🇨🇳",
    title: "Chinese tutor",
    quantity: "23,578 teachers",
  },
  {
    flag: "🇸🇦",
    title: "Arabic tutor",
    quantity: "23,578 teachers",
  },
  {
    flag: "🇯🇵",
    title: "Japanese tutor",
    quantity: "23,578 teachers",
  },
  {
    flag: "🇹🇷",
    title: "Turkish tutor",
    quantity: "23,578 teachers",
  },
];

export default function Categories() {
  return (
    <section className="max-w-4xl px-6  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-4  justify-between mt-16">
      {data.map((item, index) => (
        <Card key={index} className="shadow-none border-1 rounded-md">
          <CardBody className="flex flex-row items-center">
            <p className="text-4xl">{item.flag}</p>
            <CardBody>
              <p className="font-extrabold text-lg md:text-xl">{item.title}</p>
              <p className="text-sm md:text-md text-gray-800">
                {item.quantity}
              </p>
            </CardBody>
            <Link href={"#"}>
              <IoIosArrowForward className="text-3xl" />
            </Link>
          </CardBody>
        </Card>
      ))}
    </section>
  );
}
