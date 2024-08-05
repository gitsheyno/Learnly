import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import { IoIosArrowForward } from "react-icons/io";

export default function BecomeTutor() {
  return (
    <section className="max-w-6xl px-6 mx-auto  ">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Image
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
          width={400}
          height={400}
          className="object-cover w-full rounded-xl"
        />
        <Card className="gap-4 py-8 px-2 bg-green-200">
          <CardHeader>
            <h4 className="text-8xl font-bold ">Become a tutor</h4>
          </CardHeader>
          <CardBody className="gap-6 ">
            <p>
              Earn money sharing your expert knowledge with students. Sign up to
              start tutoring online with Preply.
            </p>
          <ul className="font-bold list-disc text-xl">
            <li className="ml-4">Find new students</li>
            <li className="ml-4">Grow your business</li>
            <li className="ml-4">Get paid securely</li>
          </ul>
            <Button className="bg-black text-white" variant="solid">
              <Link className="text-lg" href={"https://google.com"}>Become a tutor</Link>
              <IoIosArrowForward className="text-xl"/>
            </Button>
            <Link className="underline mx-auto hover:text-blue-400" href="#">How our platform works</Link>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
