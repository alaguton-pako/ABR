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
    { name: "ALL PODCAST", href: "/categories" },
    { name: "ADVERTISE", href: "/advertise" },
    { name: "RESOURCES", href: "/resources" },
  ];

  return (
    <footer className="bg-[#282828] text-white py-4 px-4 sm:px-12">
      {/* Row 1 - Logo - Made centered on mobile */}
      <div className="flex justify-center md:block">
        <div className="relative w-15 h-15 md:w-26 md:h-24">
          <Image
            src="/compLodoDark.png"
            alt="Company Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Row 2 - Quick Links + Social - Stacked vertically on mobile */}
      <div className="py-3">
        <div className="container mx-auto px-0 sm:px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            {/* Quick Links - Centered and wrapped on mobile */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 md:gap-x-16">
              {quickLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-wide font-semibold text-[#C9C9C9] hover:text-gray-300 transition-colors ${
                    index !== 0 ? "border-l border-white pl-4 md:pl-8" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social - Stacked below links on mobile */}
            <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:gap-4">
              <span className="text-xs font-semibold text-[#C9C9C9] uppercase tracking-wide border-l border-white pl-4 md:pl-4">
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

      {/* Row 3 - Copyright - Stacked vertically on mobile */}
      <div className="pt-6 md:pt-8">
        <div className="container mx-auto px-0 sm:px-4">
          <div className="flex flex-col items-center gap-3 md:flex-row md:gap-9 text-sm text-gray-400">
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
