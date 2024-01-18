"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const Navbar = () => {
  const isActive = (href) => {
    return useSelectedLayoutSegment() === href ? "active" : " ";
  };

  return (
    <nav className="flex justify-between bg-gray-800 text-white py-4 px-6 md:flex md:items-center rounded-t-3xl">
      <div className="hidden md:block md:ml-10">
        <ul className="flex space-x-8 items-center">
          <li className={`hover:text-gray-300 ${isActive(null)}`}>
            <Link className="active-link" href="/">
              Home
            </Link>
          </li>
          <li className={`hover:text-gray-300 ${isActive("/about")}`}>
            <Link className="active-link" href="/about">
              About
            </Link>
          </li>
          <li className={`hover:text-gray-300 ${isActive("/about/projects")}`}>
            <Link className="active-link" href="/about/projects">
              Projects
            </Link>
          </li>
          <li
            className={`hover:text-gray-300 ${isActive("/about/achievements")}`}
          >
            <Link className="active-link" href="/about/achievements">
              Achievements
            </Link>
          </li>
          <li
            className={`hover:text-gray-300 ${isActive("/about/experience")}`}
          >
            <Link className="active-link" href="/about/experience">
              Learning
            </Link>
          </li>
          <li className={`hover:text-gray-300 ${isActive("/about/contact")}`}>
            <Link className="active-link" href="/about/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
