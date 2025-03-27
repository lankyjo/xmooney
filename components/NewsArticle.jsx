"use client";
import { useEffect } from "react";

const NewsArticle = () => {
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
        <section className="flex flex-col gap-8 px-5 min-h-svh items-center max-md:justify-center py-7">
            <h5 className="text-center font-bold text-5xl reveal">NEWS ARTICLE</h5>
            <div className="flex gap-4 max-md:flex-col justify-center lg:items-baseline items-center">
                <article className="reveal">
                    <img loading="lazy" src="forbes.avif" />
                </article>
                <article className="reveal">
                    <img loading="lazy" src="yahoo.avif" />
                </article>
                <article className="reveal">
                    <img loading="lazy" src="cnbc.avif" />
                </article>
            </div>
        </section>
    );
};

export default NewsArticle;
