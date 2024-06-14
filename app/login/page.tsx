"use client"
import React from "react";

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [msg, setMsg] = React.useState("");

  const handleLogin = async () => {
    // 處理登入邏輯
    console.log(`Username: ${username}, Password: ${password}`);
    setMsg("Login attempt made!");
    const post = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    };

  // this is important
    try {
      const res = await fetch("/api/login", post);
      const json = await res.json();
      console.log(json);
      // Handle the response from the server
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="text-4xl p-8 font-bold text-pink-500">
        登入頁面
      </div>
      <div className=" bg-cyan-800 p-8 rounded-lg shadow-md w-full max-w-sm">
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
        <div className="mb-6">
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
        <div className="flex items-center justify-between">
          <button
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            登入
          </button>
        </div>
        {msg && <p className="text-red-500 text-xs italic mt-4">{msg}</p>}
      </div>
    </div>
  );
}
