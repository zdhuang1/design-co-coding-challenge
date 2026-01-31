import React from "react";
import { footerContent } from "../content";

// breakpoints:
// xs: 480px;
// md: 768px;
// lg: 1024px;
const Footer: React.FC = () => {
  return (
    <div className="flex flex-col justify-center w-full h-[10vh] md:h-[12.5vh] lg:h-[15vh] w-[10vh] bg-[var(--coffee-dark)] py-4 px-6">
        <p className="text-center tracking-wide font-allura text-[var(--coffee-light)] text-4xl md:text-5xl lg:text-6xl">{footerContent.quote}</p>
    </div>
  );
};

export default Footer;
