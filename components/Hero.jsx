"use client";
import { useEffect } from "react";

const Hero = () => {
  const links = [
    { name: "coinMarketcap", link: "/" },
    { name: "coinGecko", link: "/" },
    { name: "solscan", link: "https://solscan.io/token/2fFFByKLegddq9mzT21H5nh5d6L17g4x3D6Vdr3LJoaE" },
    { name: "dexscreener", link: "/" },
    { name: "phantom", link: "/" },
    { name: "dextools", link: "/" },
  ];

  useEffect(() => {
    // Ensure ScrollReveal runs only on client-side
    if (typeof window !== "undefined") {
      import("scrollreveal").then((ScrollReveal) => {
        ScrollReveal.default().reveal(".reveal", {
          duration: 800,
          distance: "50px",
          easing: "ease-in-out",
          origin: "bottom",
          interval: 100, // Stagger effect
          reset: false, // Set to true if you want re-trigger on every scroll
        });
      });
    }
  }, []);

  return (
    <section className="flex max-md:flex-col max-md:gap-16 items-center justify-center py-5 px-5 pt-9">
      <div className="space-y-5">
        <div
          id="title"
          className="font-bold text-center confirm_selection reveal"
        >
          <h1 className="text-7xl max-sm:text-5xl">XMOONEY</h1>
          <p>Earn Solana rewards by holding XMooney</p>
        </div>

        <div id="image" className="w-fit max-md:w-96 mx-auto reveal">
          <img className="w-full h-full object-center" src="/CEO.png" />
        </div>

        <div id="ctas" className="w-fit max-md:mx-auto space-x-3 reveal">
          <a
            className="border-2 border-white uppercase bg-[#1a1a2e] py-3 px-5"
            href="#swap"
          >
            <span className="bg-gradient-to-r from-[#9945FF] via-[#8752F3] to-[#19FB9B] bg-clip-text text-transparent">
            BUY NOW
            </span>
          </a>
          <a
            className="border-2 border-white uppercase bg-[#1a1a2e] py-3 px-5"
            href="#chart"
          >
            <span className="bg-gradient-to-r from-[#9945FF] via-[#8752F3] to-[#19FB9B] bg-clip-text text-transparent">
            CHART
            </span>
          </a>
        </div>
      </div>

      <div className="space-y-6">
        <div id="ceo" className="text-5xl text-center reveal">
          𝕏 CEO STATEMENT
        </div>

        <div
          className="w-fit mx-auto overflow-hidden rounded-lg reveal"
          id="image"
        >
          <img className="w-full h-full" src="/ceostate.avif" />
        </div>

        <div id="ctas" className="grid gap-3 grid-cols-2 w-fit mx-auto">
          {links.map((link) => (
            <a
              className="border-2 border-white max-sm:text-[10px] bg-[#1a1a2e] text-center py-3 px-5 uppercase rounded-lg reveal"
              key={link.name}
              href={link.link}
            >
              <span className="bg-gradient-to-r from-[#9945FF] via-[#8752F3] to-[#19FB9B] bg-clip-text text-transparent">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
