"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardBody, Button, Chip } from "@nextui-org/react";
import { IoIosArrowForward } from "react-icons/io";
import { FaUserPlus, FaChartLine, FaLock } from "react-icons/fa";

export default function BecomeTutor() {
  return (
    <section className="max-w-6xl px-6 py-16 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="relative rounded-xl overflow-hidden h-full min-h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
          <Image
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Successful tutor teaching online"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute bottom-6 left-6 z-20">
            <Chip color="primary" variant="solid" className="mb-2">
              Featured Tutor
            </Chip>
            <p className="text-white text-sm md:text-base max-w-xs">
              &quot;Joining as a tutor transformed my career and connected me
              with amazing students worldwide.&quot;
            </p>
          </div>
        </div>

        <Card className="bg-gradient-to-br from-green-50 to-green-200 border-none shadow-xl">
          <CardHeader className="flex-col items-start pb-0 pt-8 px-8">
            <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-800 to-green-500 bg-clip-text text-transparent">
              Become a tutor
            </h4>
            <div className="h-1 w-16 bg-green-600 mt-2 rounded-full" />
          </CardHeader>

          <CardBody className="gap-6 px-8 py-6">
            <p className="text-lg text-gray-700">
              Earn money sharing your expert knowledge with students. Sign up to
              start tutoring online with Preply.
            </p>

            <div className="space-y-4 my-2">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <FaUserPlus className="text-green-700 text-xl" />
                </div>
                <span className="font-semibold text-lg">Find new students</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <FaChartLine className="text-green-700 text-xl" />
                </div>
                <span className="font-semibold text-lg">
                  Grow your business
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <FaLock className="text-green-700 text-xl" />
                </div>
                <span className="font-semibold text-lg">Get paid securely</span>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              <Button
                color="success"
                variant="shadow"
                size="lg"
                radius="full"
                className="w-full font-medium text-white bg-green-600 hover:bg-green-700"
                endContent={<IoIosArrowForward className="text-xl" />}
                as={Link}
                href="https://google.com"
              >
                Become a tutor
              </Button>

              <div className="text-center">
                <Link
                  className="text-green-800 underline hover:text-green-600 inline-flex items-center gap-1 text-sm"
                  href="#"
                >
                  How our platform works
                </Link>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
