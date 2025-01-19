import React, { useState } from 'react';
import * as Icons from 'react-icons/fa'; // 动态加载图标
import { appsConfig, AppConfig } from '../config/appsConfig';

const availableIcons = Object.keys(Icons).filter((key) => key.startsWith("Fa")); // 获取所有可用的图标

const categories = Array.from(new Set(appsConfig.map((app) => app.category))); // 获取所有类别

const Table: React.FC = () => {
  const [apps, setApps] = useState<AppConfig[]>(
    appsConfig.map((app) => ({ ...app, isFavorite: false })) // 初始化时增加 isFavorite 状态
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // 当前选中的类别

  const handleFavoriteToggle = (id: number) => {
    setApps((prev) =>
      prev.map((app) =>
        app.id === id ? { ...app, isFavorite: !app.isFavorite } : app
      )
    );
  };

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
  };

  const filteredApps = selectedCategory
    ? apps.filter((app) => app.category === selectedCategory)
    : apps;

  const sortedApps = [...filteredApps].sort(
    (a, b) => (b.isFavorite ? 1 : 0) - (a.isFavorite ? 1 : 0)
  );

  return (
    <div className="flex">
      {/* 侧边栏 */}
      <div className="w-48 bg-gray-100 p-4">
        <h3 className="font-bold text-lg mb-4">Categories</h3>
        <ul className="space-y-2">
          <li
            className={`cursor-pointer ${
              selectedCategory === null ? "text-blue-500" : "text-gray-700"
            } hover:text-blue-600`}
            onClick={() => handleCategorySelect(null)}
          >
            All
          </li>
          {categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer ${
                selectedCategory === category ? "text-blue-500" : "text-gray-700"
              } hover:text-blue-600`}
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* 主内容区 */}
      <div className="p-4 flex-1">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {sortedApps.map((app) => {
            const Icon = Icons[app.icon as keyof typeof Icons] || Icons.FaQuestionCircle; // 动态加载图标
            return (
              <div key={app.id} className="flex flex-col items-center text-center w-20 h-24 sm:w-24 sm:h-28">
                <a
                  href={app.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center"
                >
                  <span className="text-5xl text-blue-500 hover:text-blue-700">
                    <Icon />
                  </span>
                  <span className="mt-1 text-sm text-gray-700">{app.name}</span>
                </a>
                {/* 收藏按钮 */}
                <button
                  onClick={() => handleFavoriteToggle(app.id)}
                  className={`mt-2 text-sm ${
                    app.isFavorite ? "text-yellow-500" : "text-gray-400"
                  } hover:text-yellow-600`}
                >
                  {app.isFavorite ? "★ 收藏" : "☆ 收藏"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Table;