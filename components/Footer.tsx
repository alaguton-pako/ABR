// components/Footer.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socialIcons = [
    { src: "/insta.png", alt: "Instagram" },
    { src: "/facebook.png", alt: "Facebook" },
    { src: "/twitter.png", alt: "Twitter" },
    { src: "/other.png", alt: "Other" },
    { src: "/linkedIn.png", alt: "linkedIn" },
  ];

  const quickLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "CONTACT US", href: "/contact" },
    { name: "ALL PODCAST", href: "/podcasts" },
    { name: "ADVERTISE", href: "/advertise" },
    { name: "RESOURCES", href: "/resources" },
  ];

  return (
    <footer className="bg-[#282828] text-white py-4 px-12">
      {/* Row 1 - Logo */}
      <div className="">
        <div className="relative w-15 h-15 md:w-26 md:h-24">
          <Image
            src="/compLodoDark.png"
            alt="Company Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Row 2 - Quick Links + Social */}
      <div className="py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Quick Links */}
            <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-wide font-semibold text-[#C9C9C9] hover:text-gray-300 transition-colors ${
                    index !== 0 ? "border-l border-white pl-4" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-4 ">
                <span className="text-xs font-semibold text-[#C9C9C9] uppercase tracking-wide border-l border-white pl-4">
                  CONNECT WITH ABR
                </span>
                <div className="flex gap-3">
                  {socialIcons.map((icon) => (
                    <div
                      key={icon.alt}
                      className="relative w-5 h-5 hover:opacity-80"
                    >
                      <Image
                        src={icon.src}
                        alt={icon.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3 - Copyright */}
      <div className="pt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-9 text-sm text-gray-400">
            <div>
              © Copyright {new Date().getFullYear()}. All Rights Reserved.
            </div>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
