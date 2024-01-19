"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (href) => pathname === href;

  return (
    <nav className="flex flex-col md:flex-row justify-between bg-gray-800 text-white py-4 px-6 md:flex md:items-center rounded-t-3xl">
      <div className="md:hidden">
        <button
          className="text-gray-300 hover:text-gray-500 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          &#9776;
        </button>
      </div>

      <div
        className={`md:flex space-x-8 items-center ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex md:space-x-8 md:items-center flex-col md:flex-row p-3">
          <li className={`hover:text-gray-300`}>
            <Link href="/">Home</Link>
          </li>
          <li
            className={
              isActive("/about")
                ? `text-blue-400 underline hover:text-gray-300 p-2`
                : "hover:text-gray-300"
            }
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={
              isActive("/about/projects")
                ? `text-blue-400 underline hover:text-gray-300`
                : "hover:text-gray-300"
            }
          >
            <Link href="/about/projects">Projects</Link>
          </li>
          <li
            className={
              isActive("/about/achievements")
                ? `text-blue-400 underline hover:text-gray-300`
                : "hover:text-gray-300"
            }
          >
            <Link href="/about/achievements">Achievements</Link>
          </li>
          <li
            className={
              isActive("/about/experience")
                ? `text-blue-400 underline hover:text-gray-300`
                : "hover:text-gray-300"
            }
          >
            <Link href="/about/experience">Learning</Link>
          </li>
          <li
            className={
              isActive("/about/contact")
                ? `text-blue-400 underline hover:text-gray-300`
                : "hover:text-gray-300"
            }
          >
            <Link href="/about/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
