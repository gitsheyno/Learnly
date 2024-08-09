'use client'

import { Button } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import React, { useTransition } from "react";
import { usePathname, useSearchParams ,useRouter} from "next/navigation";
import clsx from 'clsx';
import { useDebouncedCallback } from 'use-debounce';
const data = [
  "English",
  "German",
  "French",
  "Italian",
  "Korean",
  "Japanese",
  "Spanish",

];


export default function TutorFilter() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
  
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
  
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  justify-center items-center">
      <div className="flex flex-col items-start gap-4 py-8">
        <h1 className="text-4xl font-bold text-left">
          Online German tutors & teachers for private lessons
        </h1>
        <p className="text-left">
          Looking for an online tutor? Learnly is the leading online learning
          platform worldwide.
        </p>
        <input type="text" />
        <p className="font-bold">I want to learn</p>
        <input
  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"

  onChange={(e) => {
    handleSearch(e.target.value);
  }}
  defaultValue={searchParams.get('query')?.toString()}
/>
        <ul className="flex gap-2 flex-wrap">
          {data.map((item, index) => (
            
       
            <li
              className="border-1 text-xs cursor-pointer md:text-lg rounded-md px-4 py-1  hover:bg-gray-200"
              onClick={()=>handleSearch(item)}
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
  );
}
