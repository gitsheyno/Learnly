"use client";

import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Button } from "@nextui-org/react";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className="w-full bg-gradient-to-r from-pink-400 to-pink-500">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
        <motion.div
          className="flex flex-col items-center md:items-start gap-6 md:flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight text-center md:text-left">
            Learn faster with your{" "}
            <span className="relative">
              <span className="relative z-10">best language tutor</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-black/20 rounded-lg -z-0"></span>
            </span>
            .
          </h1>

          <p className="text-white/90 text-center md:text-left max-w-lg">
            Connect with expert language tutors who personalize lessons to your
            learning style, goals, and schedule.
          </p>

          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <Button
              as={NextLink}
              href="/signup"
              variant="shadow"
              size="lg"
              className="bg-black text-white font-medium px-8 py-6 text-lg"
              endContent={<IoIosArrowForward className="text-xl" />}
            >
              Get Started
            </Button>

            <Button
              as={NextLink}
              href="/tutors"
              variant="flat"
              size="lg"
              className="bg-white/20 backdrop-blur-sm text-white font-medium hover:bg-white/30"
            >
              Browse Tutors
            </Button>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full border-2 border-white bg-pink-${i * 100} flex items-center justify-center text-xs font-bold text-white`}
                >
                  {i}
                </div>
              ))}
            </div>
            <span className="text-white/80 text-sm">
              Join 10,000+ language learners
            </span>
          </div>
        </motion.div>

        <motion.div
          className="md:flex-1 w-full max-w-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-300 to-purple-300 rounded-2xl blur-xl opacity-50 -z-10"></div>
            <Image
              src="/sample.png"
              data-testid="banner"
              width={500}
              height={400}
              className="rounded-xl shadow-xl w-full aspect-[4/3] object-cover"
              alt="Student learning language with tutor"
              priority
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <div className="bg-green-500 h-3 w-3 rounded-full"></div>
                <span className="font-medium text-sm">
                  1,243 tutors online now
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
