import Image from "next/image";
import React from "react";

const Advert = () => {
  return (
    <section className="w-full h-[22rem] bg-white">
      <div className="relative w-[80%] h-full mx-auto">
        <Image src="/advert1.png" alt="Advert" fill className="object-contain" />
      </div>
    </section>
  );
};

export default Advert;
