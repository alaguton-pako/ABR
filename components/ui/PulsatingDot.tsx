// components/ui/RedLoader.tsx
'use client';
import { motion } from 'framer-motion';

interface RedLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  intensity?: 'soft' | 'medium' | 'strong';
  className?: string;
}

export const PulsatingDot = ({
  size = 'md',
  intensity = 'medium',
  className = ''
}: RedLoaderProps) => {
  // Size configuration
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };

  // Animation intensity
  const animationProps = {
    soft: { scale: [1, 1.2, 1], opacity: [0.7, 0.9, 0.7] },
    medium: { scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] },
    strong: { scale: [1, 2, 1], opacity: [0.4, 1, 0.4] }
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <motion.div
        animate={animationProps[intensity]}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
        className={`${sizeClasses[size]} bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.7)]`}
      />
    </div>
  );
};