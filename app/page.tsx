"use client"

// grab specific objects through the url
// import Card, { CardGroup } from "@/components/card";

import Link from "next/link";
import React from "react";
import Image from "next/image";


// default page
export default function Home() {
  const items = ['a','b','c','d'];


  return (
    <div className="flex flex-wrap justify-center space-x-4 space-y-4 p-2">
      {/* 彈性，允許換行，居中對齊，水平、垂直間距 */}
      <div className="text-blue-500">
        {/* <CardGroup arr={items}/> */}
      </div>
    </div>
  );
}