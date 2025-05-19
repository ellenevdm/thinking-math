"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface NavLinkProps {
  name: string;
  path: string;
  className?: string;
}

const NavLink: FC<NavLinkProps> = ({ name, path, className }) => {
  const pathName = usePathname();
  return (
    <Link
      href={path}
      className={`${pathName === path ? "bg-gray-700" : ""} ${className}`}
    >
      {name}
    </Link>
  );
};

export default NavLink;
