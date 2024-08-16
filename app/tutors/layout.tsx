"use client";

import React from "react";
import { usePathname } from "next/navigation";
export default function Layout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return <>{children}</>;
}
