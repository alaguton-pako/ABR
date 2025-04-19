import Image from "next/image";

interface PlayButtonProps {
  width?: number;
  height?: number;
  className?: string;
}

const PlayButton = ({
  width = 18,
  height = 18,
  className = "",
}: PlayButtonProps) => {
  return (
    <div
      className={`bg-red-600 hover:bg-red-700 transition-colors duration-300 rounded-full p-3 cursor-pointer ${className}`}
    >
      <Image
        src="/play.png"
        alt="Play"
        width={width}
        height={height}
        className="ml-1"
      />
    </div>
  );
};

export default PlayButton;
