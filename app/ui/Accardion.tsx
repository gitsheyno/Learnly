"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function AccordionComponent() {
  return (
    <div className="my-6  w-full">
      <p className="mb-4 font-bold text-xl">How Learnly works</p>
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          data-testid="Accordion 1"
          title="Find the best english tutor"
        >
          <p className="text-left" data-testid="firstParagraph">
            Choose from over 23,872 english tutors. Use filters to narrow your
            search and find the perfect fit.
          </p>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="Book your first lesson"
        >
          <p className="text-left">
            Find the perfect time in your schedule and connect with your tutor
            in our virtual classroom.
          </p>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="Subscribe and learn regularly"
        >
          <p className="text-left">
            Get a subscription and build a learning habit! You can also try
            another tutor for free to be sure about your choice.
          </p>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
