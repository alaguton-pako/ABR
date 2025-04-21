"use client";
import React from "react";
import Image from "next/image";
import ArrowDownIcon from "./ui/ArrowDownIcon";
import Link from "next/link";
import SearchBar from "./SearchBar";
import NavLayerTwo from "./NavLayerTwo";

const Navbar = () => {
  return (
    <>
      <div>
        {/* Top NavBar */}
        <div className="flex justify-between px-2 items-center lg:px-8 md:py-4 h-16 w-full bg-white gap-4 md:h-16">
          {/* Logo Section */}
          <div className="p-2">
            <Link href={"/"}>
              <div className="hidden md:block">
                <Image
                  src="/compLogo.png"
                  height={100}
                  width={100}
                  alt="Logo"
                />
              </div>
              <div className="block md:hidden">
                <Image
                  src="/compLogo.png"
                  height={300}
                  width={300}
                  alt="Logo"
                />
              </div>
            </Link>
          </div>
          {/* Navigation and Search Section */}
          <div className="flex items-center gap-16">
            {/* Navigation Links */}
            <ul className="hidden lg:flex items-center gap-10 text-xs font-bold ">
              <li>Home</li>
              <li className="flex items-center gap-1">
                Company
                <ArrowDownIcon height={16} width={16} color="#000" />
              </li>
              <li>Resources</li>
              <li>Contact Us</li>
              <li>Advertise</li>
            </ul>
            <SearchBar />
          </div>
        </div>
        {/* Layer 2 */}
        <NavLayerTwo />
      </div>
    </>
  );
};

export default Navbar;
