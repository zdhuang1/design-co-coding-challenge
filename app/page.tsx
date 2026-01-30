"use client";
import { useState } from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { navBarContent } from "./content";
import NavButton from "./components/NavButton";

export default function Home() {
  type NavKey = "nav1" | "nav2" | "nav3" | "nav4";
  const [selected, setSelected] = useState<NavKey>("nav1");
  const { heading, body } = navBarContent.descriptions[selected];

  return (
    <div>
      <Hero />

      {/* Responsive 3-column layout: stack on small, 2 columns on md, 3 columns on lg+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Nav Column */}
        <aside className="col-span-1 p-2">
          <div className="text-large md:text-xl lg:text-2xl px-2 flex flex-col">
            <NavButton className="w-full h-[5vh] md:h-[6vh] lg:h-[7vh] mt-2 bg-blue-400 hover:bg-blue-700" onClick={() => setSelected("nav1")}>{navBarContent.descriptions.nav1.heading}</NavButton>
            <NavButton className="w-full h-[5vh] md:h-[6vh] lg:h-[7vh] mt-2 bg-blue-400 hover:bg-blue-700" onClick={() => setSelected("nav2")}>{navBarContent.descriptions.nav2.heading}</NavButton>
            <NavButton className="w-full h-[5vh] md:h-[6vh] lg:h-[7vh] mt-2 bg-blue-400 hover:bg-blue-700" onClick={() => setSelected("nav3")}>{navBarContent.descriptions.nav3.heading}</NavButton>
            <NavButton className="w-full h-[5vh] md:h-[6vh] lg:h-[7vh] my-2 bg-blue-400 hover:bg-blue-700" onClick={() => setSelected("nav4")}>{navBarContent.descriptions.nav4.heading}</NavButton>
          </div>
        </aside>

        {/* Text Description */}
        <main className="col-span-1 flex flex-col items-start p-4 bg-white">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">{heading}</h2>
          <p className="text-sm md:text-base leading-relaxed">{body}</p>
        </main>

        {/* Feature */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-row lg:flex-col items-center justify-center p-2 gap-2 bg-yellow-500 m-4 min-h-[40vh] lg:min-h-[60vh]">
          <div className="flex-1 w-1/2 lg:w-full h-full bg-gray-100 border border-gray-300 flex items-center justify-center">
            <span className="text-gray-500">Image 1</span>
          </div>
          <div className="flex-1 w-1/2 lg:w-full h-full bg-gray-100 border border-gray-300 flex items-center justify-center">
            <span className="text-gray-500">Image 2</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
