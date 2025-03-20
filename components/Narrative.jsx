"use client";
import { useEffect } from "react";

const Narrative = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            import("scrollreveal").then((ScrollReveal) => {
                ScrollReveal.default().reveal(".reveal", {
                    duration: 800,
                    distance: "50px",
                    easing: "ease-in-out",
                    origin: "bottom",
                    interval: 100, // Stagger effect
                    reset: false,
                });
            });
        }
    }, []);

    return (
        <section className="bg-white max-md:flex-col-reverse max-md:px-3 max-md:gap-10 max-md:text-center py-10 px-52 flex text-black justify-between items-center">
            <div className="max-w-80 reveal">
                <img src="/nara.avif" />
            </div>

            <div className="space-y-5">
                <h3 className="text-2xl font-bold font-plat reveal">THE NARRATIVE</h3>
                <p className="max-w-[400px] reveal">
                    X Payments has rebranded to X Money. Elon previously mentioned that X
                    aims to expand beyond payments into a full financial ecosystem,
                    including loans and other financial services. The new name reflects
                    this broader vision. Hold XMooney and earn SOL. A new era of digital
                    finance is unfolding, rewarding those who embrace it.
                </p>
                <button className="text-center py-3 px-6 text-white bg-gray-900 reveal">
                    <a href="/">Learn more</a>
                </button>
            </div>
        </section>
    );
};

export default Narrative;
