import React from "react";

// breakpoints:
// xs: 480px;
// md: 768px;
// lg: 1024px;
const Footer: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="items-center justify-center w-full h-[10vh] md:h-[12.5vh] lg:h-[15vh] w-[10vh] mx-auto p-4 bg-[#0F0B08]"></div>
    </div>
  );
};

export default Footer;
