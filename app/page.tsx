"use client";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { navBarContent } from "./content";
import NavButton from "./components/NavButton";

export default function Home() {
  type NavKey = "nav1" | "nav2" | "nav3" | "nav4";
  const [selected, setSelected] = useState<NavKey>("nav1");
  const { heading, body } = navBarContent.descriptions[selected];

  return (
    <div>
      <Header />

      {/* Responsive 3-column layout: stack on small, 2 columns on md, 3 columns on lg+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Nav Column */}
        <aside className="col-span-1 p-2 font-oswald">
          <div className="text-large md:text-xl lg:text-2xl px-2 flex flex-col">
            <NavButton
              id="nav1"
              selected={selected}
              onClick={() => setSelected("nav1")}
              className="bubbly-button relative inline-block rounded border-4 border-[var(--accent-terra)] hover:border-[var(--accent-mocha)] cursor-pointer transition active:scale-90 w-full h-[5vh] md:h-[6vh] lg:h-[7vh] mt-2 bg-[var(--coffee-medium)] hover:bg-[var(--coffee-dark)] text-[var(--coffee-light)] hover:text-[var(--accent-green)] uppercase"
            >
              {navBarContent.descriptions.nav1.heading}
            </NavButton>
            <NavButton
              id="nav2"
              selected={selected}
              onClick={() => setSelected("nav2")}
              className="bubbly-button relative inline-block rounded border-4 border-[var(--accent-terra)] hover:border-[var(--accent-mocha)] cursor-pointer transition active:scale-90 w-full h-[5vh] md:h-[6vh] lg:h-[7vh] mt-2 bg-[var(--coffee-medium)] hover:bg-[var(--coffee-dark)] text-[var(--coffee-light)] hover:text-[var(--accent-green)] uppercase"
            >
              {navBarContent.descriptions.nav2.heading}
            </NavButton>
            <NavButton
              id="nav3"
              selected={selected}
              onClick={() => setSelected("nav3")}
              className="bubbly-button relative inline-block rounded border-4 border-[var(--accent-terra)] hover:border-[var(--accent-mocha)] cursor-pointer transition active:scale-90 w-full h-[5vh] md:h-[6vh] lg:h-[7vh] mt-2 bg-[var(--coffee-medium)] hover:bg-[var(--coffee-dark)] text-[var(--coffee-light)] hover:text-[var(--accent-green)] uppercase"
            >
              {navBarContent.descriptions.nav3.heading}
            </NavButton>
            <NavButton
              id="nav4"
              selected={selected}
              onClick={() => setSelected("nav4")}
              className="bubbly-button relative inline-block rounded border-4 border-[var(--accent-terra)] hover:border-[var(--accent-mocha)] cursor-pointer transition active:scale-90 w-full h-[5vh] md:h-[6vh] lg:h-[7vh] my-2 bg-[var(--coffee-medium)] hover:bg-[var(--coffee-dark)] text-[var(--coffee-light)] hover:text-[var(--accent-green)] uppercase"
            >
              {navBarContent.descriptions.nav4.heading}
            </NavButton>
          </div>
        </aside>

        {/* Text Description */}
        <main key={selected} className="col-span-1 flex flex-col items-start p-4">
          {/* Subheading */}
          <div className="w-full flex items-center py-2">
            <p className="text-3xl md:text-4xl font-semibold font-spectral">{heading}</p>
          </div>
          <div className="text-sm md:text-base font-sourceSerif leading-relaxed space-y-4">
            {body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </main>

        {/* Feature */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-row lg:flex-col items-center justify-center p-2 gap-2 bg-[var(--coffee-darker)] rounded m-4 min-h-[40vh] lg:min-h-[60vh]">
          <div className="flex-1 w-1/2 lg:w-full h-full flex items-center justify-center">
            <img
              src = "/images/lattes.jpg" 
              alt="Coffee 1"
              width={400}           // adjust width
              height={300}          // adjust height
              className="object-cover w-full h-full rounded"
            />
          </div>
          <div className="flex-1 w-1/2 lg:w-full h-full flex items-center justify-center">
            <img
              src = "/images/espresso.jpg" 
              alt="Coffee 2"
              width={400}           // adjust width
              height={300}          // adjust height
              className="object-cover w-full h-full rounded"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
