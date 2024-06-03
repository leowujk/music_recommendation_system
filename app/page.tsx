"use client"

// grab specific objects through the url
// import Card, { CardGroup } from "@/components/card";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";

// default page
export default function Home() {

  return (
    <div>
      <Sidebar/>
      <main className="p-6">
        <h1 className="text-2xl font-bold">Welcome to my website</h1>
        {/* Your page content */}
      </main>
    </div>
  );
}