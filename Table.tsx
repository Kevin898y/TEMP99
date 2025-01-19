import React, { useState } from 'react';
import * as Icons from 'react-icons/fa'; // 动态加载图标
import { appsConfig, AppConfig } from '../config/appsConfig';

const availableIcons = Object.keys(Icons).filter((key) => key.startsWith("Fa")); // 获取所有可用的图标

const Table: React.FC = () => {
  const [apps, setApps] = useState<AppConfig[]>(appsConfig); // 初始化状态
  const [isEditing, setIsEditing] = useState(false); // 是否进入编辑模式
  const [userRole, setUserRole] = useState("user"); // 模拟用户角色，"admin" 或 "user"

  const handleEditChange = (id: number, field: keyof AppConfig, value: string) => {
    setApps((prev) =>
      prev.map((app) =>
        app.id === id ? { ...app, [field]: value } : app
      )
    );
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Saved Config:", apps); // 模拟保存
    // 可以通过 API 将 apps 发送到后端
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {apps.map((app) => {
          const Icon = Icons[app.icon as keyof typeof Icons] || Icons.FaQuestionCircle; // 动态加载图标
          return (
            <div key={app.id} className="flex flex-col items-center text-center">
              {isEditing ? (
                <>
                  {/* 图标选择 */}
                  <select
                    value={app.icon}
                    onChange={(e) => handleEditChange(app.id, "icon", e.target.value)}
                    className="mt-2 p-1 border rounded text-center"
                  >
                    {availableIcons.map((iconName) => (
                      <option key={iconName} value={iconName}>
                        {iconName}
                      </option>
                    ))}
                  </select>
                  {/* 名称编辑 */}
                  <input
                    type="text"
                    value={app.name}
                    onChange={(e) => handleEditChange(app.id, "name", e.target.value)}
                    className="mt-2 p-1 border rounded text-center"
                  />
                  {/* 链接编辑 */}
                  <input
                    type="text"
                    value={app.link}
                    onChange={(e) => handleEditChange(app.id, "link", e.target.value)}
                    className="mt-2 p-1 border rounded text-center"
                  />
                </>
              ) : (
                <a
                  href={app.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center"
                >
                  <span className="text-5xl text-blue-500 hover:text-blue-700">
                    <Icon />
                  </span>
                  <span className="mt-2 text-base text-gray-700">{app.name}</span>
                </a>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-4">
        {/* 判断是否为管理员 */}
        {userRole === "admin" && (
          isEditing ? (
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Edit
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Table;