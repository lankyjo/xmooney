import "./globals.css";
import VideoBackground from "@/components/VideoBackground";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "XMooney",
  description:
    "Welcome to XMooney. A new era of digital finance is unfolding, rewarding those who embrace it. Hold XMooney and earn Sol.",
  openGraph: {
    title: "XMooney",
    description:
      "Welcome to XMooney. A new era of digital finance is unfolding, rewarding those who embrace it. Hold XMooney and earn Sol.",
    images: "/image.webp",
  },
  twitter: {
    card: "summary_large_image",
    title: "XMooney",
    description:
      "Welcome to XMooney. A new era of digital finance is unfolding, rewarding those who embrace it. Hold XMooney and earn Sol.",
    images: "/image.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-neuro">
        <div className="relative bg-black w-full h-full min-h-svh overflow-hidden">
          <VideoBackground className="pointer-events-none" />
          <main className="relative z-10">{children}</main>
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
