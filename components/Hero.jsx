"use client";
import { useEffect } from "react";

const Hero = () => {
    const links = [
        { name: "coinMarketcap", link: "/" },
        { name: "coinGecko", link: "/" },
        { name: "solscan", link: "/" },
        { name: "linktree", link: "/" },
        { name: "phantom", link: "/" },
        { name: "Binance wallet", link: "/" },
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
                <div id="title" className="font-bold text-7xl max-sm:text-5xl text-center confirm_selection reveal">
                    <h1>XMOONEY</h1>
                </div>

                <div id="image" className="w-fit max-md:w-96 mx-auto reveal">
                    <img className="w-full h-full object-center" src="/CEO.png" />
                </div>

                <div id="ctas" className="w-fit max-md:mx-auto space-x-3 reveal">
                    <a className="border-2 border-white uppercase bg-gray-900 py-3 px-5" href="#swap">
                        BUY NOW
                    </a>
                    <a className="border-2 border-white uppercase bg-gray-900 py-3 px-5" href="#chart">
                        CHART
                    </a>
                </div>
            </div>

            <div className="space-y-6">
                <div id="ceo" className="text-5xl text-center reveal">𝕏 CEO STATEMENT</div>

                <div className="w-fit mx-auto overflow-hidden rounded-lg reveal" id="image">
                    <img className="w-full h-full" src="/ceostate.avif" />
                </div>

                <div id="ctas" className="grid gap-3 grid-cols-2 w-fit mx-auto">
                    {links.map((link) => (
                        <a
                            className="border-2 border-white max-sm:text-[10px] bg-gray-900 text-center py-3 px-5 uppercase rounded-lg reveal"
                            key={link.name}
                            href={link.link}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
