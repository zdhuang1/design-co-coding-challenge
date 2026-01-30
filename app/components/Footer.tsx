import React from "react";

// breakpoints:
// xs: 480px;
// md: 768px;
// lg: 1024px;
const Footer: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="items-center justify-center w-full h-[10vh] md:h-[12.5vh] lg:h-[15vh] w-[10vh] mx-auto p-4 bg-blue-400">
    </div>
{/* 
        <button className="bg-yellow-500 md:bg-green-500 lg:bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
          Click Me!
        </button>
*/}
    </div>
  );
};

export default Footer;
