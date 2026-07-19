"use client";

import { FaBell, FaUserCircle } from "react-icons/fa";

export default function Topbar() {
  return (
    <header className="h-16 bg-black shadow flex justify-between items-center px-8">

      <h2 className="text-2xl font-bold">
        Dashboard
      </h2>

      <div className="flex items-center gap-6">

        <FaBell size={22} />

        <FaUserCircle size={30} />

      </div>

    </header>
  );
}