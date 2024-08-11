"use client";
import { usePathname } from "next/navigation";
import React from "react";
const UseDashboardLayout = ({
  children,
  userDash,
}: {
  children: React.ReactNode;
  userDash: React.ReactNode;
}) => {
  const path = usePathname();
  return (
    <div className="border-2">
      {path === "/dashboard" ? (
        <>
          {userDash}
          {children}
        </>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default UseDashboardLayout;
