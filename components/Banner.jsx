"use client";
import { useEffect } from "react";
import Uniswap from "./Uniswap";

const Banner = () => {
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
        <section className="py-16 px-5 flex flex-col justify-center items-center">
            <div className="max-w-xl w-full flex flex-col gap-y-10 text-center p-16 bg-gray-400/20 backdrop-blur-lg rounded-lg">
                <h2 className="confirm_selection text-4xl max-sm:text-2xl uppercase font-bold reveal">
                    Elon's stable coin
                </h2>
                <div className="flex gap-8 justify-center text-base max-sm:text-xs text-nowrap uppercase reveal">
                    <div>Hodl XMooney</div>
                    <div>Receive Free SOL</div>
                </div>
            </div>
            <div id="charts" className="flex justify-center items-center gap-4 max-sm:flex-col">
            <Uniswap link={"https://jup.ag/swap/SOL-BASE?inputCurrency=SOL&outputCurrency=BASE"} text={'swap'} id={'swap'}/>
            <Uniswap link={"https://www.tradingview.com/widgetembed/?symbol=BINANCE:SOLUSDT&theme=dark&style=1"} text={'chart'} id={'chart'}/>
            </div>    
        </section>
    );
};

export default Banner;
