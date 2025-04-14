"use client";

import Link from "next/link";
import { FC } from "react";
import { Button } from "../ui/Button";

import { usePathname } from "next/navigation";

const NavBar: FC = () => {
  const pathName = usePathname();
  return (
    <header className="">
      <div className="w-full bg-gray-800 text-white">
        <nav className="flex w-full justify-between items-center p-4">
          <Link href="/" className="text-3xl">
            Thinking Maths
          </Link>
          <div className="flex-wrap  nav-links flex space-x-9 items-center justify-around text-lg ">
            <Link href="/" className={`${pathName === "/" ? "font-bold" : ""}`}>
              Home
            </Link>
            <Link
              href="/about"
              className={`${pathName === "/about" ? "font-bold" : ""}`}
            >
              About
            </Link>
            <Link
              href="/resourceList"
              className={`${pathName === "/resourceList" ? "font-bold" : ""}`}
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className={`${pathName === "/contact" ? "font-bold" : ""}`}
            >
              Contact
            </Link>
          </div>
          <Button>Login</Button>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
