import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
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
export default function LanguageSelect() {
  return (
    <Select
      items={animals}
      label="I want to learn"
      placeholder="Select a language"
      classNames={{
        trigger: "bg-transparent py-7 border-1 border-black",
      }}
      className="w-[400px] md:max-w-[300px]"
    >
      {(animal) => <SelectItem key={animal.label}>{animal.label}</SelectItem>}
    </Select>
  );
}
