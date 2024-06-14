"use client"
import React from "react";

export default function AccountSettings() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmNewPassword, setConfirmNewPassword] = React.useState("");
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [city, setCity] = React.useState("");
  const [msg, setMsg] = React.useState("");

  const handleUpdateAccount = () => {
    // 處理更新帳號資訊的邏輯
    console.log(`Username: ${username}, Password: ${password}, New Password: ${newPassword}, Confirm New Password: ${confirmNewPassword}, Age: ${age}, Gender: ${gender}, City: ${city}`);
    setMsg("Account update attempt made!");
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center mt-16">
      <div className="text-4xl p-8 font-bold text-pink-500">
        修改帳號資訊
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
            placeholder="請輸入新的帳號"
          />
        </div>
        <div className="mb-4">
          <label className="block text-slate-950 text-sm font-bold mb-2" htmlFor="password">
            原始密碼
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="請輸入原始密碼"
          />
        </div>
        <div className="mb-4">
          <label className="block text-slate-950 text-sm font-bold mb-2" htmlFor="newPassword">
            新密碼
          </label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="請輸入新密碼"
          />
        </div>
        <div className="mb-4">
          <label className="block text-slate-950 text-sm font-bold mb-2" htmlFor="confirmNewPassword">
            確認新密碼
          </label>
          <input
            type="password"
            id="confirmNewPassword"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="請確認新密碼"
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
            onClick={handleUpdateAccount}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            更新帳號資訊
          </button>
        </div>
        {msg && <p className="text-red-500 text-xs italic mt-4 col-span-2 text-center">{msg}</p>}
      </div>
    </div>
  );
}
