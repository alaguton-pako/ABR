"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CardCarouselProps<T> {
  items: T[];
  renderCard: (item: T) => React.ReactNode;
}

export const CardCarousel = <T,>({
  items,
  renderCard,
}: CardCarouselProps<T>) => {
  return (
    <div className="w-full max-w-9xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          dragFree: false, // enables smooth scrolling
          containScroll: "trimSnaps", // prevents excessive scrolling
        }}
        className="w-full relative"
      >
        <CarouselContent className="-ml-4">
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-[100%] sm:basis-[45%] md:basis-[40%] lg:basis-[30%] xl:basis-[22%]"
            >
              {renderCard(item)}
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Updated button container with white background */}
        <div className="absolute  left-[85%] top-1/2 -translate-y-1/2 xl:flex justify-center gap-2 bg-white rounded-lg p-2 shadow-sm lg:left-[94%] xl:left-[97%]">
          <CarouselPrevious className="static transform-none bg-white rounded-lg text-black hover:bg-gray-100" />
          <CarouselNext className="static transform-none  rounded-lg text-black hover:bg-gray-100" />
        </div>
      </Carousel>
    </div>
  );
};
