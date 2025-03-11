"use client";

import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { FC, useState } from "react";

interface NavBarProps {}

const NavBar: FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="">
      <div className="w-full bg-gray-800 text-white">
        <nav className="flex justify-between items-center p-4">
          <Link href="/" className="text-3xl">
            Thinking Maths
          </Link>
          <div className="nav-links flex space-x-9 items-center justify-around text-lg ">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/categories">Categories</Link>
            <button className="border-2 border-white p-2">Contact</button>
            <button
              className="flex items-center space-x-2 font-bold"
              onClick={() => setDropdownOpen(dropdownOpen)}
            >
              Account
              <ArrowDownTrayIcon />
            </button>
            {dropdownOpen && (
              <div className="dropdown">
                <button>Login</button>
                <button>Register</button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
