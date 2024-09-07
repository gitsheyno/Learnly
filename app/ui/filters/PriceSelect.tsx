import React from "react";
import { Slider } from "@nextui-org/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
export const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
  { key: "lion", label: "Lion" },
  { key: "tiger", label: "Tiger" },
  { key: "giraffe", label: "Giraffe" },
  { key: "dolphin", label: "Dolphin" },
  { key: "penguin", label: "Penguin" },
  { key: "zebra", label: "Zebra" },
  { key: "shark", label: "Shark" },
  { key: "whale", label: "Whale" },
  { key: "otter", label: "Otter" },
  { key: "crocodile", label: "Crocodile" },
];
export default function PriceSelect() {
  return (
    <Popover
      placement="bottom"
      showArrow={true}
      classNames={{ base: ["w-[200px]"] }}
    >
      <PopoverTrigger>
        <Button className="w-[200px]">Price per lesson</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <Slider
            label="Price Range"
            step={50}
            minValue={0}
            maxValue={1000}
            defaultValue={[100, 500]}
            formatOptions={{ style: "currency", currency: "USD" }}
            className="max-w-md"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
