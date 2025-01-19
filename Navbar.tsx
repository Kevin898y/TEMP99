import React, { useState } from 'react';
import { FaUserCircle , FaSignOutAlt, FaSearch,FaReact  } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 默认模拟已登录状态
  const [userName, setUserName] = useState("John Doe"); // 模拟用户名
  const [searchTerm, setSearchTerm] = useState(""); // 搜索框输入的内容
  const [selectedRegion, setSelectedRegion] = useState("Global"); // 当前选择的地区

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName(""); // 注销后清空用户名
  };
  const handleLogin = () => {
    setIsLoggedIn(true);
    setUserName("John Doe");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm); // 模拟搜索功能
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(e.target.value);
    console.log("Region selected:", e.target.value); // 模拟地区选择逻辑
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* 左侧 App 名称 */}
      <div className="flex items-center gap-2">
        <FaReact className="text-2xl text-blue-400" /> {/* 图标 */}
        <span className="text-lg font-bold">App Name</span>
      </div>

      {/* 中间的搜索框 */}
      <form onSubmit={handleSearch} className="flex-grow mx-4">
        <div className="flex items-center max-w-lg mx-auto bg-white text-black rounded overflow-hidden">
          <div className="px-3 text-gray-500">
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-2 py-2 text-black placeholder-gray-500 focus:outline-none"
          />
        </div>
      </form>

      {/* 右侧用户信息和下拉选单 */}
      <div className="flex items-center gap-4">
        {/* 地区下拉选单 */}
        <select
        value={selectedRegion}
        onChange={handleRegionChange}
        className="bg-gray-700 text-white px-3 py-2 rounded focus:outline-none"
        >
        <option value="Global">Global</option>
        <option value="USA">USA</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
        </select>

        {/* 用户信息 */}
        {isLoggedIn ? (
          <div className="flex items-center gap-2">
            <span>Welcome, {userName}</span>
            {/* Logout 图标 */}
            <button
              onClick={handleLogout}
              className="text-2xl sm:text-3xl lg:text-4xl text-red-500 hover:text-red-600 focus:outline-none"
              title="Logout"
            >
              <FaSignOutAlt />
            </button>
          </div>
        ) : (
          /* Login 图标 */
          <button
            onClick={handleLogin}
            className="text-2xl sm:text-3xl lg:text-4xl text-white hover:text-blue-600 focus:outline-none"
            title="Login"
          >
            <FaUserCircle />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;