// components/shared/CardCarousel.tsx
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
      <Carousel opts={{ align: "start" }} className="w-full relative">
        <CarouselContent className="-ml-4">
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-[80%] sm:basis-[45%] md:basis-[30%] lg:basis-[23%]"
            >
              {renderCard(item)}
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute left-[97%] top-1/2 -translate-y-1/2 flex gap-2">
          <CarouselPrevious className="relative static transform-none" />
          <CarouselNext className="relative static transform-none" />
        </div>
      </Carousel>
    </div>
  );
};
