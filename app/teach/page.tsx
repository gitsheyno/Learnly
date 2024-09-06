import React from "react";
import BredCrumbs from "component/BredCrumbs";
import AccordionComponent from "component/Accardion";
import Image from "next/image";
import { Button, Link } from "@nextui-org/react";
import BecomeTutor from "../ui/BecomeTutor";
import { Card, CardBody } from "@nextui-org/react";
const breData = [
  {
    title: "Sign up",
    sub: "to create your tutor profile",
    status: true,
  },
  {
    title: "Get approved",
    sub: "by our team in 5 business days",
    status: true,
  },
  {
    title: "Start earning",
    sub: "by teaching students all over the world",
    status: false,
  },
];

const cardData = [
  {
    title: "Set your own rate",
    body: "Choose your hourly rate and change it anytime. On average, English tutors charge $15-25 per hour.",
  },
  {
    title: "Teach anytime, anywhere",
    body: "Decide when and how many hours you want to teach. No minimum time commitment or fixed schedule. Be your own boss!",
  },
  {
    title: "Grow professionally",
    body: "Attend professional development webinars and get tips to upgrade your skills. You’ll get all the help you need from our team to grow.",
  },
];
// const accordionData = [
//     {
//         question:"What kind of tutors does Learnly look for?",
//         answer:"No specific certification or teaching experience is required! We welcome tutors who:
//         Enjoy sharing knowledge and making a difference in students’ lives
//         Have outstanding communication skills
//         Are willing to provide a personalized learning experience to international students"

//     }
// ]

export default function page() {
  return (
    <section className="max-w-6xl container mx-auto px-6  py-10">
      <div className="w-full flex flex-col gap-12">
        <h1 className=" text-2xl md:text-5xl font-bold mb-8">
          Make a living by teaching the largest community of learners worldwide.
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full mb-12 ">
            <BredCrumbs data={breData} />

            <Button className="w-full mt-6 md:w-auto" as={Link} href="#">
              Finish registration
            </Button>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={250}
                height={200}
                alt="img"
              />
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          {cardData.map((item, index) => (
            <Card key={index}>
              <CardBody>
                <div className="flex flex-col gap-4">
                  <h4 className="font-bold text-2xl">{item.title}</h4>
                  <p className="text-gray-700 text-md">{item.body}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="w-full mx-auto ">
          <h2 className="text-3xl font-bold text-center">
            Frequently asked questions
          </h2>
          <AccordionComponent />
        </div>

        <div>
          <BecomeTutor />
        </div>
      </div>
    </section>
  );
}
