import React from "react";
import {
  Card,
  CardFooter,
  Image,
  Button,
  CardHeader,
  CardBody,
} from "@nextui-org/react";


interface Card {
  img: string;
  name: string;
  title: string;
  info: string;
}

interface Guide {
  color: string;
  title: string;
  description: String;
  information: string | Card[];
}

const cards: Card[] = [
  {
    img: "https://preply.com/cdn-cgi/image/format=auto,fit=contain,width=140/https://static.preply.com/static/ssr/_next/static/images/Milena-6565f848c6ee914e0d7c853e6aab5b3b.jpg",
    name: "Milena",
    title: "French tutor",
    info: "Speaks French (Native), English (Advanced) +2",
  },
  {
    img: "https://preply.com/cdn-cgi/image/format=auto,fit=contain,width=140/https://static.preply.com/static/ssr/_next/static/images/Bassel-61d8f18fa66d8bb94d172bede9abfdc7.jpg",
    name: "Milena",
    title: "French tutor",
    info: "Speaks French (Native), English (Advanced) +2",
  },
  {
    img: "https://preply.com/cdn-cgi/image/format=auto,fit=contain,width=140/https://static.preply.com/static/ssr/_next/static/images/Sophia-b96057aa0eb60c3dd1995d0212f1f514.jpg",
    name: "Sofia",
    title: "French tutor",
    info: "Speaks French (Native), English (Advanced) +2",
  },
];

const guideData: Guide[] = [
  {
    color: "bg-blue-500",
    title: "Find your tutor",
    description:
      "We’ll connect you with a tutor who will motivate, challenge, and inspire you.",
    information: cards,
  },
  {
    color: "bg-yellow-500",
    title: "Start learning.",
    description:
      "Your tutor will guide the way through your first lesson and help you plan your next steps.",
    information:
      "https://preply.com/cdn-cgi/image/format=auto,fit=contain,width=390/https://static.preply.com/static/ssr/_next/static/images/card-2-da929e1032468274fff3c7a827157232.jpg",
  },
  {
    color: "bg-green-500",
    title: "Speak. Read. Write. Repeat.",
    description:
      "Choose how many lessons you want to take each week and get ready to reach your goals!",
    information:
      "https://preply.com/cdn-cgi/image/format=auto,fit=contain,width=390/https://static.preply.com/static/ssr/_next/static/images/card-3-0bab46dd6b35951f6fc2e87968b6e3ea.jpg",
  },
];

export default function Guides() {
  return (
    <section className="max-w-6xl px-6 text-center  mx-auto flex flex-col justify-between items-center mt-60">
      <h2 className="text-5xl font-bold mb-16">How Learnly works:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
        {guideData.map((item, index) => (
          <Card
            key={index}
            isFooterBlurred
            radius="lg"
            className="border-1 py-6 px-2"
          >
            <CardHeader className="flex flex-col items-start gap-3">
              <p
                className={`${item.color} px-4 py-2  text-2xl text-bold rounded-md font-semibold`}
              >
                {index + 1}
              </p>
              <h4 className="text-3xl font-bold">{item.title}</h4>
            </CardHeader>
            <CardBody>{item.description}</CardBody>
            <CardFooter>
              {typeof item.information === "object" ? (
                <div className="flex flex-col items-start gap-4">
                  {item.information.map((card, index) => (
                    <Card className="flex flex-row items-center" key={index}>
                      <Image src={card.img} />
                      <CardBody>
                        <p>{card.name}</p>
                        <p className="text-xs text-gray-600">{card.title}</p>
                        <p className="text-xs text-gray-600">{card.info}</p>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="mx-auto">
                  <Image
                    className="w-[400px]  object-contain"
                    src={item.information}
                  />
                </div>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="bg-pink-400 my-8 w-full py-6 rounded-lg flex flex-col items-center justify-center gap-4">
        <h4 className="text-3xl font-bold">Lessons you’ll love. Guaranteed.</h4>
        <p className="text-lg">
          Try another tutor for free if you’re not satisfied.
        </p>
      </div>
    </section>
  );
}
