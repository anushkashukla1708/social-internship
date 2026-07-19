"use client";

import Link from "next/link";
import {
  FaHome,
  FaClipboardCheck,
  FaChild,
  FaUsers,
  FaChartBar,
  FaSignOutAlt,
} from "react-icons/fa";

const menu = [
  {
    name: "Dashboard",
    link: "/",
    icon: <FaHome />,
  },
  {
    name: "Attendance",
    link: "/attendance",
    icon: <FaClipboardCheck />,
  },
  {
    name: "Children",
    link: "/children",
    icon: <FaChild />,
  },
  {
    name: "Volunteers",
    link: "/volunteers",
    icon: <FaUsers />,
  },
  {
    name: "Reports",
    link: "/reports",
    icon: <FaChartBar />,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-green-800 text-black fixed left-0 top-0">

      <h1 className="text-xl bg-yellow-700 font-bold text-center py-6 border-b">
        
NGO Admin
      </h1>

      <nav className="mt-6">

        {menu.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className="flex items-center gap-3 px-6 py-4 hover:bg-green-700"
          >
            {item.icon}
            {item.name}
          </Link>
        ))}

        <button className="flex items-center gap-3 px-6 py-4 mt-10 w-full hover:bg-red-600">
          <FaSignOutAlt />
          Logout
        </button>

      </nav>

    </aside>
  );
}