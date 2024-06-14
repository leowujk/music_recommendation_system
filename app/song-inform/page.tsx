"use client"
import React from "react";
import Card, { CardGroup } from "@/components/Card";

export default function Home() {
  const [msg, setMsg] = React.useState("");

  return (
    <div className="flex flex-col h-screen">
      <div className="text-4xl p-8 font-bold text-pink-500">
        card information
      </div>
    </div>
  );
}
