"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    
      
    {
      text: "performance",
      className: "text-blue-500 dark:text-blue-500 max-sm:text-4xl -mt-6",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[6rem] sm:hidden ">

      <TypewriterEffectSmooth words={words} />
      
    </div>
  );
}
