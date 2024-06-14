"use client"
import Image from "next/image"
import React, { useState } from 'react';

const Navbar = () => {

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className=" bg-cyan-900 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-white">Music Recommendation System</h1>
      <div className="flex items-center flex-grow justify-center">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 rounded-md mr-2 bg-white text-gray-900"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 hover:shadow-md transition duration-700">
          Search
        </button>
      </div>
      <div className="flex items-center ml-auto relative">
        <Image
          src="/user.png"
          className="w-16 cursor-pointer"
          width={256}
          height={256}
          alt="User Icon"
          onClick={toggleDropdown}
        />
        {dropdownVisible && (
          <div className="absolute top-14 right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
            <ul className="py-1">
              <li className="px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">1</li>
              <li className="px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">2</li>
              <li className="px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">3</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;