import { FaAppStore, FaGooglePlay } from 'react-icons/fa';

export interface AppConfig {
  id: number;
  name: string;
  icon: string; // 使用字符串存储图标名称
  link: string;
}

export const appsConfig: AppConfig[] = [
  {
    id: 1,
    name: "App Store",
    icon: "FaAppStore", // 字符串表示图标
    link: "https://www.apple.com/app-store/",
  },
  {
    id: 2,
    name: "Google Play",
    icon: "FaGooglePlay",
    link: "https://play.google.com/",
  },
  {
    id: 3,
    name: "Google Play",
    icon: "FaGooglePlay",
    link: "https://play.google.com/",
  },
  {
    id: 4,
    name: "Google Play",
    icon: "FaGooglePlay",
    link: "https://play.google.com/",
  },
  {
    id: 5,
    name: "Google Play",
    icon: "FaGooglePlay",
    link: "https://play.google.com/",
  },
  {
    id: 6,
    name: "Google Play",
    icon: "FaGooglePlay",
    link: "https://play.google.com/",
  },
];