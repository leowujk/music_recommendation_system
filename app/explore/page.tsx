"use client"
import React from "react";

export default function Home() {
  const [msg, setMsg] = React.useState("");

  return (
    <div className="flex flex-col h-screen">
      <div className="text-4xl p-8 font-bold text-pink-500">
        explore
      </div>

    </div>
  );
}
