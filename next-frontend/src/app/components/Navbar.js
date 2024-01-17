import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-gray-800 text-white py-4 px-6 md:flex md:items-center">
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link className="text-2xl font-bold tracking-widest" href="/">
          Porfolio
        </Link>
        <button className="md:hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-white">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className="hidden md:block md:ml-10">
        <ul className="flex space-x-8 items-center">
          <li>
            <Link className="hover:text-gray-300" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" href="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
