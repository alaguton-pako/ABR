"use client";
import React from "react";
import Providers from "./provider";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <Providers>{children}</Providers>;
};

export default Wrapper;
