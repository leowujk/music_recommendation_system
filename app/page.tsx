"use client"
import Card, { CardGroup } from "@/components/Card";
import Button, { ButtonGroups } from "@/components/Button";
import Link from "next/link";
import React from "react";
//search
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const items = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const buttons = ["Button01", "Button02", "Button03", "Button04"]
  const [msg, setMsg] = React.useState("");
  //search
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  const filteredItems = items.filter(item => item.includes(searchQuery));


  return (
    <div className="flex flex-col h-screen">
      <div className="text-4xl p-8 font-bold text-pink-500">
        為你推薦
      </div>
      <div className="flex-grow text-blue-500">
        <CardGroup arr={items} />
      </div>
      <div className="text-4xl p-8 font-bold text-pink-500">
        情境與類型
      </div>
      <div className=" text-orange-700">
        <ButtonGroups arr={buttons}></ButtonGroups>
      </div>
    </div>
  );
}
