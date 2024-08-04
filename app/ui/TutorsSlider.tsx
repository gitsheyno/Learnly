"use client";

import React from "react";
// import Image from "next/image";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import sample from "../../public/sample.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const TutorsSlider = () => {
  return (
    <section className="max-w-4xl px-6 text-center  mx-auto flex flex-col justify-between items-center mt-16 gap-16 ">
      <h2 className="text-6xl font-bold">Find the right tutor for you.</h2>
      <div className="w-3/5 h-96  mx-auto">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          // showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <Card isFooterBlurred radius="lg" className="border-none">
            <Image
              alt="Woman listing to music"
              className="object-cover"
              src="https://nextui.org/images/hero-card.jpeg"
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Person 1</p>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                English tutor
              </Button>
            </CardFooter>
          </Card>
          <Card isFooterBlurred radius="lg" className="border-none">
            <Image
              alt="Woman listing to music"
              className="object-cover"
              src="https://nextui.org/images/hero-card.jpeg"
            />
            <CardFooter className="justify-center gap-4 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny p-2 rounded-lg text-white/80 bg-black/20">Person 2</p>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                German tutor
              </Button>
            </CardFooter>
          </Card>
          <Card isFooterBlurred radius="lg" className="border-none">
            <Image
              alt="Woman listing to music"
              className="object-cover"
              src="https://nextui.org/images/hero-card.jpeg"
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Person 3</p>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                French tutor
              </Button>
            </CardFooter>
          </Card>

        </Carousel>
      </div>
    </section>
  );
};

export default TutorsSlider;
