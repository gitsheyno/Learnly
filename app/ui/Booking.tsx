"use client";

import React from "react";
import { Button, DatePicker, DateValue } from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";
import { bookTutor } from "@/actions/bookinAction";
import Image from "next/image";
type TutorCard = {
  category?: string;
  image: string;
  name: string;
  language: string;
  students: string;
  lessons: string;
  speakLang: string;
  benefit: string;
  cost: string;
  session: string;
};

type User = {
  id: string;
  createdAt: string;
  email: string;
};
export default function Booking({
  data,
  id,
  user,
}: {
  data: TutorCard | undefined;
  id: string;
  user: User;
}) {
  const updateUserWithId = bookTutor.bind(null, user, id);

  return (
    <div className="p-16">
      {data ? (
        <form action={updateUserWithId}>
          <Card className=" max-w-md  mx-auto  items-center  p-8">
            <div className=" w-full flex items-center flex-col">
              <CardHeader className="flex gap-4 items-start">
                <div>
                  <Image
                    src={data.image}
                    width={40}
                    height={30}
                    alt="image"
                    className="rounded-xl"
                  />
                </div>
                <div className=" flex flex-col gap-2">
                  <p className="text-xs text-gray-600">{data.category}</p>
                  <h2 className="font-bold">{data.name}</h2>
                  <div className="flex gap-4">
                    <p className="text-gray-600 text-xs"> ☑️ Verified</p>
                    <p className="text-gray-600 text-xs">⭐️ Professional</p>
                  </div>
                </div>
              </CardHeader>
              <Divider className="my-4" />
              <CardBody className="gap-6">
                <DatePicker
                  name="date"
                  isRequired
                  onChange={(e) => console.log(e)}
                  label="Pick a date"
                  className="max-w-full "
                />
                <div>
                  <p className="font-bold text-lg mb-4">Your order</p>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between text-xs">
                      <p>{data.session}</p>
                      <p>{data.cost} €</p>
                    </div>
                    <div className="flex justify-between text-xs">
                      <p className="font-bold">Total</p>
                      <p>{data.cost} €</p>
                    </div>
                  </div>
                </div>
              </CardBody>
              <Divider className="my-4" />
              <CardFooter>
                <Button className="w-full bg-pink-400" type="submit">
                  Submit
                </Button>
              </CardFooter>
            </div>
          </Card>
        </form>
      ) : (
        <>no tutor found</>
      )}
    </div>
  );
}
