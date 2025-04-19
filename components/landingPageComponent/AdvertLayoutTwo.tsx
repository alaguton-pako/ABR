import React from "react";
import Image from "next/image";

const AdvertLayoutTwo = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-14 my-20">
      {/* Card 1 */}
      <div className="w-[300px] h-[300px] overflow-hidden text-card-foreground relative">
        <Image
          src="/advert2.png"
          alt="Advert 1"
          fill
          className="object-cover"
        />
      </div>

      {/* Card 2 */}
      <div className="w-[300px] h-[300px] overflow-hidden text-card-foreground relative">
        <Image
          src="/advert3.png"
          alt="Advert 2"
          fill
          className="object-cover"
        />
      </div>

      {/* Card 3 */}
      <div className="w-[300px] h-[300px] overflow-hidden text-card-foreground relative">
        <Image
          src="/advert4.png"
          alt="Advert 3"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default AdvertLayoutTwo;
