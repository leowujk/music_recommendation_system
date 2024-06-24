"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [collectionName, setCollectionName] = useState("收藏1"); // Initial collection name

  useEffect(() => {
    const storedName = localStorage.getItem('collectionName');
    if (storedName) {
      setCollectionName(storedName);
    }
  }, []);

  const handleMouseEnter = () => {
    setShowButtons(true);
  };

  const handleMouseLeave = () => {
    setShowButtons(false);
  };

  const handleRename = async () => {
    const newName = prompt("Enter new name:");
    if (newName) {
      try {
        const res = await fetch('/api/renameCollection', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ oldName: collectionName, newName }),
        });
        const data = await res.json();
        console.log('Renamed:', data);
        setCollectionName(newName); // Update the collection name
        localStorage.setItem('collectionName', newName); // Save to local storage
  
        // Reload bookmarks-1 page after renaming
        window.location.href = 'http://localhost:3000/bookmarks-1';
  
      } catch (error) {
        console.error('Error renaming collection:', error);
      }
    }
  };
  

  const handleDelete = async () => {
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

  const handleAddCollection = async () => {
    const newCollectionName = prompt("Enter new collection name:");
    if (newCollectionName) {
      try {
        const res = await fetch('/api/duplicatePage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ newPageName: newCollectionName }),
        });
        const data = await res.json();
        console.log('New collection added:', data);
      } catch (error) {
        console.error('Error adding collection:', error);
      }
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
        <button
          onClick={handleAddCollection}
          className="p-2 mb-4 bg-blue-600 hover:bg-blue-700 rounded text-white"
        >
          新增收藏
        </button>
        <div className="p-2 hover:bg-gray-700 rounded" style={{ position: 'relative' }}>
          <Link href="/bookmarks-1">
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
