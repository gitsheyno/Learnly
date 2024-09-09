"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import React from "react";
import { Input } from "@nextui-org/react";
export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (query: string) => {
    const params = new URLSearchParams(searchParams);
    console.log(params.get("query"), query);

    if (query) {
      params.set("name", query);
    } else {
      params.delete("name");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };
  return (
    <Input
      type="text"
      label="Search"
      defaultValue={searchParams.get("name")?.toString()}
      onChange={(e) => handleSearch(e.target.value)}
      className=" w-[400px] md:w-[600px]"
      classNames={{ inputWrapper: ["bg-transparent border-1 border-black"] }}
    />
  );
}
