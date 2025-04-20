// components/ui/RedLoader.tsx
"use client";
import { motion } from "framer-motion";

export const RedLoader = () => {
  return (
    <div className="flex justify-center items-center space-x-2">
      {[0, 0.2, 0.4].map((delay, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            delay,
          }}
          className="w-[10px] h-[5px] bg-red-500 rounded-full"
        />
      ))}
    </div>
  );
};
