import React from "react";
import Image from "next/image";

const Partners = () => {
  // Sample partner data - replace with your actual partner logos
  const partners = {
    row1: [
      { id: 1, src: "/part1.png", alt: "Partner 1" },
      { id: 2, src: "/part2.png", alt: "Partner 2" },
      { id: 3, src: "/part3.png", alt: "Partner 3" },
      { id: 4, src: "/part4.png", alt: "Partner 4" },
    ],
    row2: [
      { id: 5, src: "/part5.png", alt: "Partner 5" },
      { id: 6, src: "/part6.png", alt: "Partner 6" },
      { id: 7, src: "/part7.png", alt: "Partner 7" },
      { id: 8, src: "/part8.png", alt: "Partner 8" },
      { id: 9, src: "/part9.png", alt: "Partner 9" },
    ],
    row3: [
      { id: 10, src: "/part10.png", alt: "Partner 10" },
      { id: 11, src: "/part11.png", alt: "Partner 11" },
      { id: 12, src: "/part12.png", alt: "Partner 12" },
      { id: 13, src: "/part13.png", alt: "Partner 13" },
      { id: 14, src: "/part14.png", alt: "Partner 14" },
      { id: 15, src: "/part15.png", alt: "Partner 15" },
    ],
  };

  return (
    <div className="py-12">
      <div className="flex flex-col gap-8">
        <h1 className="text-[#282828] text-xl font-bold text-center">
          OUR GLOBAL PARTNERS
        </h1>

        {/* Row 1 - 4 partners */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-26">
          {partners.row1.map((partner) => (
            <div
              key={partner.id}
              className="w-[180px] h-[100px] relative grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Row 2 - 5 partners */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-18">
          {partners.row2.map((partner) => (
            <div
              key={partner.id}
              className="w-[180px] h-[100px] relative grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Row 3 - 6 partners */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-24">
          {partners.row3.map((partner) => (
            <div
              key={partner.id}
              className="w-[150px] h-[80px] relative grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
