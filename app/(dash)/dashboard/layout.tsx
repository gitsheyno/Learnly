import React from "react";
const UseDashboardLayout = ({
  children,
  userDash,
}: {
  children: React.ReactNode;
  userDash: React.ReactNode;
}) => {
  return (
    <div className="border-2">
      {userDash}
      {children}
    </div>
  );
};

export default UseDashboardLayout;
