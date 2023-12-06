import React from "react";
import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";

export default function Sidebar() {
  const mainLinks = [
    {
      icon: <MdHomeFilled className="text-xl" />,
      name: "Trang chủ",
    },
    {
      icon: <FaRegCompass className="text-xl" />,
      name: "Explore",
    },
    {
      icon: <MdOutlineSlowMotionVideo className="text-xl" />,
      name: "Shorts",
    },
    {
      icon: <MdSubscriptions className="text-xl" />,
      name: "Kênh đăng ký",
    },
  ];

  const secondaryLinks = [
    {
      icon: <MdOutlineVideoLibrary className="text-xl" />,
      name: "Thư viện của bạn",
    },
    {
      icon: <MdHistory className="text-xl" />,
      name: "Video đã xem",
    },
    {
      icon: <MdOutlineSmartDisplay className="text-xl" />,
      name: "Video của bạn",
    },
    {
      icon: <MdOutlineWatchLater className="text-xl" />,
      name: "Xem sau",
    },
    {
      icon: <MdThumbUpOffAlt className="text-xl" />,
      name: "Video đã thích",
    },
  ];

  const subscriptionLinks = [
    {
      icon: <TbMusic className="text-xl" />,
      name: "Âm nhạc",
    },
    {
      icon: <MdOutlineSportsVolleyball className="text-xl" />,
      name: "Thể thao",
    },
    {
      icon: <TbDeviceGamepad2 className="text-xl" />,
      name: "Trò chơi",
    },
    {
      icon: <GiFilmStrip className="text-xl" />,
      name: "Phim",
    },
  ];

  const helpLinks = [
    {
      icon: <MdSettings className="text-xl" />,
      name: "Cài đặt",
    },
    {
      icon: <MdOutlinedFlag className="text-xl" />,
      name: "Nhật ký báo cáo",
    },
    {
      icon: <MdOutlineHelpOutline className="text-xl" />,
      name: "Trợ giúp",
    },
    {
      icon: <MdOutlineFeedback className="text-xl" />,
      name: "Gửi ý kiến phản hồi",
    },
  ];

  const textLinks = [
    [
      "Giới thiệu",
      "Báo chí",
      "Bản quyền",
      "Liên hệ với chúng tối",
      "Người sáng tạo",
      "Quảng cáo",
      "Nhà phát triển",
    ],
    [
      "Điều khoản",
      "Quyền riêng tư",
      "Chính sách và an toàn",
      "Cách Youtube hoạt động",
      "Thử các tính năng mới",
    ],
  ];

  return (
    <div className="w-2/12 bg-[#212121] pr-5 overflow-auto pb-8 sidebar">
      <ul className="flex flex-col border-b-2 border-gray-700">
        {mainLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-zinc-600 ${
                name === "Home" ? "bg-slate-600" : ""
              }`}
            >
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700">
        {secondaryLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 `}>
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700">
        {subscriptionLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 `}>
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700">
        {helpLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 `}>
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
        {textLinks[0].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
        {textLinks[1].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <span className="px-4 text-sm text-zinc-400">&copy; 2023 Google</span>
      <br />
      <p className="px-4 pt-3 text-sm text-zinc-400">
        Clone by Trần Minh Tiến
      </p>
    </div>
  );
}
