import Image from "next/image";
import React from "react";

const Advert = () => {
  return (
    <section className="bg-white pt-[50px] md:pt-0 h-[22rem]">
      <div className="relative w-full h-full mx-auto md:w-[80%] ">
        <Image src="/advert1.png" alt="Advert" fill className="object-contain" />
      </div>
    </section>
  );
};

export default Advert;
