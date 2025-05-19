import Link from "next/link";
import { FC } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import NavLink from "../ui/Navlink";
import AuthButton from "../ui/AuthButton";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Resources", path: "/resourceList" },
  { name: "Contact", path: "/contact" },
];

const NavBar: FC = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800 text-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>

          {/* Logo */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link
                href="/"
                className="text-xl lg:text-2xl font-bold tracking-wide"
              >
                Thinking Maths
              </Link>
            </div>

            {/* Desktop Navigation Links */}
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  name={link.name}
                  path={link.path}
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white"
                />
              ))}
            </div>
          </div>

          {/* Auth Button */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <AuthButton />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navLinks.map((link) => (
            <DisclosureButton
              key={link.name}
              as={Link}
              href={link.path}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              {link.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default NavBar;
