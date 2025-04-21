import React, { ReactNode } from "react";

type CustomCardLayoutProps = {
  children: ReactNode;
};

const CustomCardLayout = ({ children }: CustomCardLayoutProps) => {
  return (
    <div className="w-full xl:w-[90%] mx-auto flex flex-col gap-6 p-4">
      {children}
    </div>
  );
};

export default CustomCardLayout;
