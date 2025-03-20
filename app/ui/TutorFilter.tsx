"use client";

import React, { useEffect, useState } from "react";
import { Button, Select, SelectItem, Chip, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { FaSort, FaSearch, FaFilter, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import PriceSelect from "component/filters/PriceSelect";
import Search from "component/filters/Search";

const languages = [
  "English",
  "German",
  "French",
  "Italian",
  "Korean",
  "Japanese",
  "Spanish",
];

const sortOptions = [
  { key: "popularity", label: "Most Popular" },
  { key: "highest", label: "Highest Price" },
  { key: "lowest", label: "Lowest Price" },
  { key: "native", label: "Native Speakers" },
];

export default function TutorFilter() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState("English");

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const currentQuery = params.get("query");

    if (!currentQuery) {
      params.set("query", "English");
      replace(`${pathname}?${params.toString()}`);
      setActiveLanguage("English");
    } else {
      setActiveLanguage(currentQuery);
    }
  }, [pathname, searchParams]);

  const handleSearch = (language: string) => {
    const params = new URLSearchParams(searchParams);

    if (language) {
      params.set("query", language);
      setActiveLanguage(language);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleSort = (item: string) => {
    const params = new URLSearchParams(searchParams);

    if (item) {
      params.set("sortBy", item);
    } else {
      params.delete("sortBy");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleResetFilter = () => {
    const params = new URLSearchParams(searchParams);

    params.delete("sortBy");
    params.delete("name");
    params.delete("min");
    params.delete("max");

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const getSortLabel = () => {
    const sortKey = searchParams.get("sortBy");
    return (
      sortOptions.find((option) => option.key === sortKey)?.label || "Sort By"
    );
  };

  const hasActiveFilters = () => {
    return (
      searchParams.get("sortBy") ||
      searchParams.get("min") ||
      searchParams.get("max") ||
      searchParams.get("name")
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Find Your Perfect{" "}
                <span className="text-pink-500">{activeLanguage}</span> Tutor
                Online
              </h1>
              <p className="text-gray-600 text-lg mt-4 max-w-lg">
                Learnly connects you with expert tutors worldwide for
                personalized lessons tailored to your learning style and goals.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-semibold text-gray-700">I want to learn:</h2>
              <div className="flex flex-wrap gap-2">
                {languages.map((language) => (
                  <Chip
                    key={language}
                    onClick={() => handleSearch(language)}
                    className={`cursor-pointer transition-all duration-200 text-sm md:text-base ${
                      activeLanguage === language
                        ? "bg-pink-500 text-white hover:bg-pink-600"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                    variant={activeLanguage === language ? "solid" : "flat"}
                    radius="sm"
                  >
                    {language}
                  </Chip>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button
                as={Link}
                href="#"
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium text-lg px-8 py-6 rounded-xl hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
              >
                Get Started Now
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mt-10 md:mt-0"
          >
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={500}
                height={600}
                alt="Online tutor teaching a student"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-pink-100 rounded-lg p-3 shadow-lg">
              <div className="flex items-center gap-2 text-sm font-medium text-pink-700">
                <span className="text-lg">✓</span>
                <span>Native {activeLanguage} Speakers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-1 w-full md:w-auto mb-4 md:mb-0">
              <Search />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <Button
                className={`flex items-center gap-2 ${isFilterOpen ? "bg-gray-200" : "bg-gray-100"} text-gray-700 border-none`}
                onClick={toggleFilters}
                startContent={<FaFilter />}
                size="md"
              >
                Filters{" "}
                {hasActiveFilters() && (
                  <span className="bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    •
                  </span>
                )}
              </Button>

              <Select
                defaultSelectedKeys={[
                  searchParams.get("sortBy")?.toString() || "",
                ]}
                selectionMode="single"
                items={sortOptions}
                onSelectionChange={(key) =>
                  handleSort(key.currentKey as string)
                }
                classNames={{
                  trigger: "bg-gray-100 min-h-0 h-auto py-2 border-none",
                  value: "text-gray-700 text-sm",
                }}
                size="sm"
                className="w-full sm:w-48"
                placeholder={getSortLabel()}
                startContent={<FaSort className="text-gray-500" />}
              >
                {(option) => (
                  <SelectItem key={option.key} textValue={option.label}>
                    {option.label}
                  </SelectItem>
                )}
              </Select>
            </div>
          </div>

          {/* Expandable filter area */}
          {isFilterOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 pt-4 border-t border-gray-100"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="w-full md:w-auto">
                  <PriceSelect />
                </div>

                <div className="flex items-center gap-2 self-end">
                  {hasActiveFilters() && (
                    <Tooltip content="Clear all filters">
                      <Button
                        onClick={handleResetFilter}
                        size="sm"
                        className="bg-gray-200 text-gray-700 hover:bg-gray-300"
                        startContent={<FaTimes />}
                      >
                        Clear Filters
                      </Button>
                    </Tooltip>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
