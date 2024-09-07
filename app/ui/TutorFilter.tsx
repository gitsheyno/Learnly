"use client";

import { useEffect } from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import clsx from "clsx";
import LanguageSelect from "component/filters/LanguageSelect";
import PriceSelect from "component/filters/PriceSelect";
const data = [
  "English",
  "German",
  "French",
  "Italian",
  "Korean",
  "Japanese",
  "Spanish",
];

const links = [
  { route: "/dashboard", name: "Home" },
  { route: "/dashboard/English", name: "English" },
  { route: "/dashboard/German", name: "German" },
  { route: "/dashboard/French", name: "French" },
  { route: "/dashboard/Italian", name: "Italian" },
  { route: "/dashboard/Korean", name: "Korean" },
  { route: "/dashboard/Japanese", name: "Japanese" },
  { route: "/dashboard/Spanish", name: "Spanish" },
];

export default function TutorFilter() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    console.log("clicked");
    params.set("query", "English");
    replace(`${pathname}?${params.toString()}`);
  }, [pathname]);

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const isActive = (route: string) => {
    const params = new URLSearchParams(searchParams);

    const val = params.get("query");
    return val ? `/dashboard/${params.get("query")}` : `/dashboard/English`;
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2  justify-center items-center">
        <div className="flex flex-col items-start gap-4 py-8">
          <h1 className="text-4xl font-bold text-left">
            Online German tutors & teachers for private lessons
          </h1>
          <p className="text-left">
            Looking for an online tutor? Learnly is the leading online learning
            platform worldwide.
          </p>
          <p className="font-bold">I want to learn</p>
          <ul className="flex gap-2 flex-wrap">
            {data.map((item, index) => (
              <li
                className={clsx(
                  "border-1 text-xs cursor-pointer md:text-lg rounded-md px-4 py-1  hover:bg-gray-200",
                  {
                    "border-black": isActive(item) === `/dashboard/${item}`,
                  },
                )}
                onClick={() => handleSearch(item)}
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
          <Button className="bg-pink-400 w-[100%] md:w-auto" variant="shadow">
            <Link href="#">Get started</Link>
          </Button>
        </div>
        <div className="flex justify-end">
          <Image
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={400}
            height={450}
            alt="image"
          />
        </div>
      </div>
                  <form action="">
      <div className="flex gap-2 items-center justify-center mt-8">
        
        <div className="flex-1   flex justify-end">
          <LanguageSelect />
        </div>
        <div className="flex-1">
          <input className="border-1 w-full" placeholder="search..."/>
        </div>
        <div className="flex-1   flex justify-start">
          <PriceSelect />
        </div>
      </div>
      </form>
    </div>
  );
}
