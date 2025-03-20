"use client";
import { useState } from "react";

const Uniswap = () => {
  const [loading, setLoading] = useState(true); // Track loading state

  return (
    <div className="flex flex-col w-[600px] max-sm:w-full h-[700px] max-sm:h-[600px] justify-center gap-3 items-center p-5">
      <h5 className="font-plat text-5xl">SWAP</h5>

      {/* Loader: Visible when loading is true */}
      {loading && (
        <div className="flex items-center justify-center w-full h-full border-2 rounded-lg bg-gray-100">
          <p className="animate-pulse text-gray-500">Loading swap interface...</p>
        </div>
      )}

      {/* iFrame: Hidden until it fully loads */}
      <iframe
        src="https://jup.ag/swap/SOL-BASE?inputCurrency=SOL&outputCurrency=BASE"
        className="w-full h-full border-2 max-sm:w-full rounded-lg"
        onLoad={() => setLoading(false)} // Hide loader once iframe loads
        style={{ display: loading ? "none" : "block" }} // Hide iframe when loading
      />
    </div>
  );
};

export default Uniswap;
