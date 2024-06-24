"use client";
import { CardGroup } from "@/components/Card";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [collectionName, setCollectionName] = useState("收藏01");

  useEffect(() => {
    const storedName = localStorage.getItem('collectionName');
    if (storedName) {
      setCollectionName(storedName);
    }
  

  const handleStorageChange = () => {
    const updatedName = localStorage.getItem('collectionName');
    if(updatedName) {
        setCollectionName(updatedName);
    }
  };

  //listen for storage change events
  window.addEventListener('storage', handleStorageChange);

  //clean up listeners on component unmount
  return () => {
    window.removeEventListener('storage', handleStorageChange);
  };
}, []);

    return (
    <div className="flex flex-col h-screen">
      <div className="text-4xl p-8 font-bold text-pink-500">
        {collectionName}
      </div>
      <div className="flex-grow text-blue-500">
        <CardGroup arr={["1", "2", "3", "4", "5", "6", "7", "8"]} />
      </div>
    </div>
  );
}
