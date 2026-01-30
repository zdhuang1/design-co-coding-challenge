import React from "react";
import { heroContent } from "../content";

// breakpoints:
// xs: 480px;
// md: 768px;
// lg: 1024px;
const Hero: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-[10vh] md:h-[12.5vh] lg:h-[15vh] max-w-[calc(100vw-1rem)] mx-auto p-4 bg-blue-400">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">{heroContent.title}</p>
{/* 
        <button className="bg-yellow-500 md:bg-green-500 lg:bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
          Click Me!
        </button>
*/}
    </div>
  );
};

export default Hero;
