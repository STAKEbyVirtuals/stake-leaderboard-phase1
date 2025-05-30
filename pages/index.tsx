import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          🥩 STAKE Leaderboard
        </h1>
        <div className="flex justify-between font-semibold border-b pb-2 mb-2">
          <span>Rank</span>
          <span>Wallet</span>
          <span>Total STAKE</span>
          <span>Status</span>
        </div>
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="flex justify-between py-2 border-b text-sm"
          >
            <span>#{i + 1}</span>
            <span>0x...{Math.floor(Math.random() * 9999)}</span>
            <span>{(Math.random() * 10000).toFixed(2)}</span>
            <span>{i < 3 ? "VIRGEN" : i === 9 ? "JEET" : "HOLDER"}</span>
          </div>
        ))}
        <p className="text-xs text-center text-gray-500 mt-4">
          Auto-updated every 6 hours. Powered by STAKE.
        </p>
      </div>
    </main>
  );
}
