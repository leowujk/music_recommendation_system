"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Sidebar = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [collectionName, setCollectionName] = useState("收藏1"); // Initial collection name

  const handleMouseEnter = () => {
    setShowButtons(true);
  };

  const handleMouseLeave = () => {
    setShowButtons(false);
  };

  const handleRename = () => {
    const newName = prompt("Enter new name:");
    // Logic to update the name goes here
    if (newName) {
      // Update the link or perform the necessary action
      setCollectionName(newName); // Update the collection name
    }
  };

  const handleDelete = async () => {
    // Logic to delete the page.tsx file goes here
    try {
      const res = await fetch('/api/deletePage', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pageName: 'bookmarks-1' }),
      });
      const data = await res.json();
      console.log('Deleted:', data);
    } catch (error) {
      console.error('Error deleting page:', error);
    }
  };

  return (
    <div
      className="w-48 bg-gray-800 text-white flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col p-4">
        <Link href="/">
          <div className="p-2 hover:bg-gray-700 rounded flex items-center justify-between">
            <span>Home</span>
            <div className="ml-2">
              <Image src="/building.png" width={24} height={24} alt="Home Icon" />
            </div>
          </div>
        </Link>
        <hr className="mb-10 mt-5 border-yellow-400" />
        {/* link is to folder's name */}
        <div className="p-2 hover:bg-gray-700 rounded" style={{ position: 'relative' }}>
          <Link href="/bookmarks-1">
            {/* rename, just put variable in. */}
            <span>{collectionName}</span>
          </Link>
          {showButtons && (
            <div className="absolute right-0 top-0 mt-1 mr-1 flex space-x-1">
              <button onClick={handleRename} className="text-xs text-gray-400 hover:text-white">
                重新命名
              </button>
              <button onClick={handleDelete} className="text-xs text-gray-400 hover:text-white">
                刪除
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
