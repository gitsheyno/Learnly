"use client";

import React from "react";
import { Slider } from "@nextui-org/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function PriceSelect() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handlePriceSelect = (values: number[]) => {
    const [min, max] = values;

    const params = new URLSearchParams(searchParams);

    if (values) {
      params.set("min", min as unknown as string);
      params.set("max", max as unknown as string);
    } else {
      params.delete("min");
      params.delete("max");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };
  return (
    <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
        <Button className="text-gray-500 w-[400px] md:w-[300px] py-7 bg-transparent border-1 border-black">
          {/* {`min : ${searchParams.get("min")?.toString()} - max : ${searchParams.get("max")?.toString()}` ||
            "Price per lesson"} */}
          Price per lesson
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <Slider
            label="Price Range"
            step={1}
            minValue={0}
            maxValue={50}
            defaultValue={[0, 50]}
            formatOptions={{ style: "currency", currency: "EUR" }}
            onChange={(e) => handlePriceSelect(e as number[])}
            className="max-w-md"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
