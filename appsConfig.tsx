import { FaAppStore, FaGooglePlay } from 'react-icons/fa';

export interface AppConfig {
  id: number;
  name: string;
  icon: string; // 使用字符串存储图标名称
  link: string;
  category: string; // 新增类别字段
}

export const appsConfig: AppConfig[] = [
  {
    id: 1,
    name: "App Store",
    icon: "FaAppStore", // 字符串表示图标
    link: "https://www.apple.com/app-store/",
    category: "Tool",
  },
  {
    id: 2,
    name: "Google Play",
    icon: "FaGooglePlay",
    link: "https://play.google.com/",
    category: "Shopping",
  },
  {
    id: 3,
    name: "Google Play",
    icon: "FaGooglePlay",
    link: "https://play.google.com/",
    category: "Shopping",
  },
  {
    id: 4,
    name: "Google Play",
    icon: "FaGooglePlay",
    link: "https://play.google.com/",
    category: "Shopping",
  },
  {
    id: 5,
    name: "Google Play",
    icon: "FaGooglePlay",
    link: "https://play.google.com/",
    category: "Shopping",
  },
  {
    id: 6,
    name: "Google Play",
    icon: "FaGooglePlay",
    link: "https://play.google.com/",
    category: "Shopping",
  },
];