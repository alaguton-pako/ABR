// components/PodcastCard.tsx
import Image from "next/image";
import PlayButton from "./PlayButton";

interface PodcastCardProps {
  imageSrc: string;
  title: string;
  date: string;
}

const PodcastCard = ({ imageSrc, title, date }: PodcastCardProps) => {
  return (
    <div className="relative text-white shadow-md rounded-sm flex flex-col h-[300px] md:h-[400px]">
      {/* Image wrapper */}
      <div className="relative h-[250px]">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>

      {/* Text content */}
      <div className="bg-white text-[#000] h-[150px] py-4 px-6">
        <div className="h-full flex flex-col justify-between items-center">
          <h1 className="text-center">{title}</h1>
          <p>{date}</p>
        </div>
      </div>

      {/* Play button */}
      <div className="absolute left-1 top-5/7 -translate-y-1/2 -translate-x-1/2">
        <PlayButton />
      </div>
    </div>
  );
};

export default PodcastCard;
