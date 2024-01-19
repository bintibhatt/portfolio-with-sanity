"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  const isActive = (href) => pathname === href;

  return (
    <nav className="flex justify-between bg-gray-800 text-white py-4 px-6 md:flex md:items-center rounded-t-3xl">
      <div className="hidden md:block md:ml-10">
        <ul className="flex space-x-8 items-center">
          <li className={`hover:text-gray-300`}>
            <Link href="/">Home</Link>
          </li>
          <li
            className={
              isActive("/about")
                ? `text-blue-300 underline hover:text-gray-300`
                : "hover:text-gray-300"
            }
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={
              isActive("/about/projects")
                ? `text-blue-300 underline hover:text-gray-300`
                : "hover:text-gray-300"
            }
          >
            <Link href="/about/projects">Projects</Link>
          </li>
          <li
            className={
              isActive("/about/achievements")
                ? `text-blue-300 underline hover:text-gray-300`
                : "hover:text-gray-300"
            }
          >
            <Link href="/about/achievements">Achievements</Link>
          </li>
          <li
            className={
              isActive("/about/experience")
                ? `text-blue-300 underline hover:text-gray-300`
                : "hover:text-gray-300"
            }
          >
            <Link href="/about/experience">Learning</Link>
          </li>
          <li
            className={
              isActive("/about/contact")
                ? `text-blue-300 underline hover:text-gray-300`
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
