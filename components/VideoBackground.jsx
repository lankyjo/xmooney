"use client"; // Ensure client-side rendering

export default function VideoBackground() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full min-h-screen object-cover select-none pointer-events-none"
    >
      <source src="/video-bg.mp4" type="video/mp4" />
    </video>
  );
}
