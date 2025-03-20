import React from "react";
import { Card, CardBody } from "@nextui-org/react";

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
    flag: "🇨🇳",
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
    <section className="max-w-4xl px-6 mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Available Language Tutors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-between">
        {data.map((item, index) => (
          <Card
            key={index}
            className="shadow-sm border-1 rounded-lg bg-gradient-to-br from-white to-gray-50"
          >
            <CardBody className="flex flex-row items-center p-4">
              <div className="text-4xl mr-4">{item.flag}</div>
              <div>
                <p className="font-bold text-lg text-gray-800">{item.title}</p>
                <p className="text-sm text-gray-500">{item.quantity}</p>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
