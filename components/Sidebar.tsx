"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [collectionName, setCollectionName] = useState("預設收藏面板"); // Initial collection name
  const [collections, setCollections] = useState<string[]>([]); // 管理收藏項的狀態

  useEffect(() => {
    const storedName = localStorage.getItem('collectionName');
    if (storedName) {
      setCollectionName(storedName);
    }
    const storedCollections = localStorage.getItem('collections');
    if (storedCollections) {
      setCollections(JSON.parse(storedCollections));
    }
  }, []);

  const handleMouseEnter = () => {
    setShowButtons(true);
  };

  const handleMouseLeave = () => {
    setShowButtons(false);
  };

  const handleRename = async (oldName: string) => {
    const newName = prompt("Enter new name:");
    if (newName) {
      try {
        const res = await fetch('/api/renameCollection', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ oldName, newName }),
        });
        const data = await res.json();
        console.log('Renamed:', data);


        // 更新本地狀態和 localStorage
        const updatedCollections = collections.map(collection => 
          collection === oldName ? newName : collection
        );
        setCollections(updatedCollections);
        localStorage.setItem('collections', JSON.stringify(updatedCollections));

        // 刷新頁面
        window.location.href = `/${newName}`;
  
      } catch (error) {
        console.error('Error renaming collection:', error);
      }
    }
  };

  const handleAddCollection = async () => {
    const newCollectionName = prompt("Enter new collection name:");
    if (newCollectionName) {
      try {
        const res = await fetch('/api/createCollection', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: newCollectionName }),
        });
        const data = await res.json();
        console.log('Created:', data);
        setCollections([...collections, newCollectionName]);
        localStorage.setItem('collections', JSON.stringify([...collections, newCollectionName]));
      } catch (error) {
        console.error('Error creating collection:', error);
      }
    }
  };

  const handleDeleteCollection = async (name: string) => {
    try {
      const res = await fetch('/api/deleteCollection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
      const data = await res.json();
      console.log('Deleted:', data);
      const updatedCollections = collections.filter(collection => collection !== name);
      setCollections(updatedCollections);
      localStorage.setItem('collections', JSON.stringify(updatedCollections));
    } catch (error) {
      console.error('Error deleting collection:', error);
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
          className="p-2 mb-4 bg-blue-600 hover:bg-blue-700 rounded text-white"
          onClick={handleAddCollection}
        >
          新增收藏
        </button>
        {collections.map((collection, index) => (
          <div className="p-2 hover:bg-gray-700 rounded" style={{ position: 'relative' }}>
            {collection}
            {showButtons && (
              <div className="absolute right-0 top-0 mt-1 mr-1 flex space-x-1">
                <button className="text-xs text-gray-400 hover:text-white"
                onClick={() => handleRename(collection)}>
                  重新命名
                </button>
                <button className="text-xs text-gray-400 hover:text-white" 
                onClick={() => handleDeleteCollection(collection)}>
                  刪除
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
