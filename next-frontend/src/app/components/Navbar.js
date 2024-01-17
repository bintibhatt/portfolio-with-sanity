import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-gray-700 text-white py-4 px-6 md:flex md:items-center">
      <div className="hidden md:block md:ml-10">
        <ul className="flex space-x-8 items-center">
          <li>
            <Link className="hover:text-gray-300" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" href="/about/achievements">
              Achievements
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" href="/about/experience">
              Experience
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" href="/about/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" href="/about/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
