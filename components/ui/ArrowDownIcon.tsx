import React from "react";

interface ArrowDownIconProps {
  height?: string | number;
  width?: string | number;
  color?: string;
}

const ArrowDownIcon: React.FC<ArrowDownIconProps> = ({
  height = 24, 
  width = 24,  
  color = "currentColor", // default color
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke={color}
      height={height}  // directly apply height prop
      width={width}    // directly apply width prop
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

export default ArrowDownIcon;
