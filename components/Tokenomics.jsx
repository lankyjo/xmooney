"use client";
import { useState, useEffect } from "react";
import TokenItems from "./TokenItems";

const Tokenomics = () => {
    const [copied, setCopied] = useState(false);
    const contractAddress = "2fFFByKLegddq9mzT21H5nh5d6L17g4x3D6Vdr3LJoaE";

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

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(contractAddress);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Hide after 2 seconds
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <section className="bg-white px-5 py-5 pt-20 flex flex-col gap-y-10 items-center">
            <div className="reveal">
                <h4 className="text-black text-center text-5xl max-sm:text-4xl font-bold font-plat">TOKENOMICS</h4>
                <div className="relative flex justify-center items-center mt-2">
                    <p
                        className="text-center text-black max-sm:text-[10px] cursor-pointer hover:underline"
                        onClick={handleCopy}
                    >
                        {contractAddress}
                    </p>
                    {copied && (
                        <span className="absolute top-[-20px] bg-black text-white text-xs px-2 py-1 rounded">
                            Copied!
                        </span>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
                <div className="reveal">
                    <TokenItems image={'/supply-img.avif'} text={'Supply - 1B $XMOONEY'} />
                </div>
                <div className="reveal">
                    <TokenItems image={'/tax-img.avif'} text={'10% TAX (5% Rewards 5% Marketing)'} />
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
