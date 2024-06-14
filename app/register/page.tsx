"use client";
import React, { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [msg, setMsg] = useState("");

  const handleRegister = async () => {
    console.log(`Username: ${username}, Password: ${password}, Confirm Password: ${confirmPassword}, Age: ${age}, Gender: ${gender}, City: ${city}`);
    setMsg("Register attempt made!");

    const post = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, confirmPassword, age, gender, city }),
    };

    try {
      const res = await fetch("/api/register", post);
      if (res.ok) {
        const json = await res.json();
        console.log(json);
        setMsg(`User ${json.username} registered successfully!`);
      } else {
        setMsg("Registration failed!");
      }
    } catch (error) {
      console.error('Error during register:', error);
      setMsg("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center mt-14">
      <div className="text-4xl p-8 font-bold text-pink-500">
        註冊頁面
      </div>
      <div className="bg-cyan-800 p-8 rounded-lg shadow-md w-full max-w-sm grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-slate-950 text-sm font-bold mb-2" htmlFor="username">
            帳號
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="請輸入帳號"
          />
        </div>
        <div className="mb-4">
          <label className="block text-slate-950 text-sm font-bold mb-2" htmlFor="password">
            密碼
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="請輸入密碼"
          />
        </div>
        <div className="mb-4">
          <label className="block text-slate-950 text-sm font-bold mb-2" htmlFor="confirmPassword">
            確認密碼
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="請確認密碼"
          />
        </div>
        <div className="mb-4">
          <label className="block text-slate-950 text-sm font-bold mb-2" htmlFor="age">
            年齡
          </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="請輸入年齡"
          />
        </div>
        <div className="mb-4">
          <label className="block text-slate-950 text-sm font-bold mb-2" htmlFor="gender">
            性別
          </label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">請選擇性別</option>
            <option value="male">男</option>
            <option value="female">女</option>
            <option value="other">其他</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-slate-950 text-sm font-bold mb-2" htmlFor="city">
            城市
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="請輸入城市"
          />
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <button
            onClick={handleRegister}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            註冊
          </button>
        </div>
        {msg && <p className="text-red-500 text-xs italic mt-4 col-span-2 text-center">{msg}</p>}
      </div>
    </div>
  );
}
