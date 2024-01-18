"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-gray-800 text-white py-4 px-6 md:flex md:items-center rounded-t-3xl">
      <div className="hidden md:block md:ml-10">
        <ul className="flex space-x-8 items-center">
          <li className={`hover:text-gray-300`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`hover:text-gray-300`}>
            <Link href="/about">About</Link>
          </li>
          <li className={`hover:text-gray-300`}>
            <Link href="/about/projects">Projects</Link>
          </li>
          <li className={`hover:text-gray-300`}>
            <Link href="/about/achievements">Achievements</Link>
          </li>
          <li className={`hover:text-gray-300`}>
            <Link href="/about/experience">Learning</Link>
          </li>
          <li className={`hover:text-gray-300`}>
            <Link href="/about/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
