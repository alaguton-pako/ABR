import React from "react";
import Image from "next/image";

interface CustomIconProps {
  height?: number;
  width?: number;
  alt?: string;
  src: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({
  height = 18,
  width = 18,
  alt = "icon",
  src,
}) => {
  return <Image src={src} height={height} width={width} alt={alt} className="hover:cursor-pointer"/>;
};

export default CustomIcon;
