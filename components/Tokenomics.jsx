"use client";
import { useEffect } from "react";
import TokenItems from "./TokenItems";

const Tokenomics = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            import("scrollreveal").then((ScrollReveal) => {
                ScrollReveal.default().reveal(".reveal", {
                    duration: 800,
                    distance: "50px",
                    easing: "ease-in-out",
                    origin: "bottom",
                    interval: 100, // Stagger effect
                    reset: true,
                });
            });
        }
    }, []);

    return (
        <section className="bg-white px-5 py-5 pt-20 flex flex-col gap-y-10 items-center">
            <div className="reveal">
                <h4 className="text-black text-center text-5xl max-sm:text-4xl font-bold font-plat">TOKENOMICS</h4>
                <p className="text-center text-black max-sm:text-[10px]">0x21cD589a989615A9e901328D3c089bbca16d00b2</p>
            </div>

            <div className="grid grid-cols-2 gap-5">
                <div className="reveal">
                    <TokenItems image={'/supply-img.avif'} text={'Supply - 1B $XMOONEY'} />
                </div>
                <div className="reveal">
                    <TokenItems image={'/tax-img.avif'} text={'10% TAX'} />
                </div>
                <div className="reveal">
                    <TokenItems image={'/renounced-img.avif'} text={'RENOUNCED OWNERSHIP'} />
                </div>
                <div className="reveal">
                    <TokenItems image={'/burned-img.avif'} text={'LIQUIDITY LOCKED'} />
                </div>
            </div>
        </section>
    );
};

export default Tokenomics;
