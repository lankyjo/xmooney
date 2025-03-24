import "./globals.css";
import VideoBackground from "@/components/VideoBackground";

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
      <head>
        <meta property="og:title" content="XMooney" />
        <meta
          property="og:description"
          content="Welcome to XMooney. A new era of digital finance is unfolding, rewarding those who embrace it. Hold XMooney and earn Sol."
        />
        <meta property="og:image" content="/image.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="XMooney" />
        <meta
          name="twitter:description"
          content="Welcome to XMooney. A new era of digital finance is unfolding, rewarding those who embrace it. Hold XMooney and earn Sol."
        />
        <meta name="twitter:image" content="/image.webp" />
      </head>
      <body className="font-neuro">
        <div className="relative bg-black w-full h-full min-h-svh overflow-hidden">
          <VideoBackground />
          <main className="relative z-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
