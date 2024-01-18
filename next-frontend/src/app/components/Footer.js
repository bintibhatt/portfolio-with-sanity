import React from "react";

function Footer() {
  return (
    <div>
      <footer className="fixed bottom-0 left-0 z-20 w-full p-1 bg-gray-700 shadow md:flex md:items-center md:justify-between md:p-2 0 bg-opacity-50">
        <span className="text-sm text-gray-200 sm:text-center dark:text-gray-200 text-center">
          © 2024{" "}
          <a
            href="https://linkedin.com/in/bintibhatt"
            className="hover:underline"
          >
            @bintibhatt
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}

export default Footer;
