import React from "react";
import Image from "next/image";
import sample from "../../public/sample.png";
import { Button } from "@nextui-org/react";
export default function Banner() {
  return (
    <div className="mx-auto bg-pink-400">
      <div className="container mx-auto max-w-4xl gap-4 px-6 flex flex-col items-center justify-center  py-12  md:flex-row">
        <div className="flex flex-col  items-center gap-4 md:items-start ">
          <h1 className="text-l font-bold md:text-5xl">
            Learn faster with your best language tutor.
          </h1>
          <Button variant="shadow" className="w-60 bg-black text-white">
            Get Started
          </Button>
        </div>
        <Image
          className="rounded-md aspect-[3/2]"
          src={sample}
          width={400}
          height={600}
          alt="image"
        />
      </div>
    </div>
  );
}
