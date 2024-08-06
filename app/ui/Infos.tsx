import React, { ReactNode } from "react";
import { Card, CardBody } from "@nextui-org/react";

const data = [
  { number: "400,000", description: "Experienced tutors" },
  { number: "300,000", description: "5-star tutor reviews" },
  { number: 120, description: "Subjects taught" },
];
export default function Infos() {
  return (
    <section className="max-w-4xl px-6  mx-auto flex  justify-between mt-16">
      {data.map((item, index) => (
        <Card key={index} className="flex">
          <CardBody className="flex justify-center items-center px-3 py-3  md:px-12 md:py-6">
            <p className="font-extrabold text-lg md:text-2xl">{item.number}+</p>
            <p className="text-sm md:text-md text-gray-800">
              {item.description}
            </p>
          </CardBody>
        </Card>
      ))}
    </section>
  );
}

export const ListboxWrapper = ({ children }: { children: ReactNode }) => (
  <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
);
