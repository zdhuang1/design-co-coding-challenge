import React from "react";
import { heroContent } from "../content";

// breakpoints:
// xs: 480px;
// md: 768px;
// lg: 1024px;
const Hero: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-[10vh] md:h-[12.5vh] lg:h-[15vh] max-w-[calc(100vw-1rem)] mx-auto p-4 bg-[#3F2713]">
        <p className="font-diplomata text-[#F6F5F3] text-3xl md:text-4xl lg:text-5xl font-bold text-center scale-y-150">{heroContent.title}</p>
    </div>
  );
};

export default Hero;
