import React from "react";

function Footer() {
  return (
    <div>
      <footer className="text-center text-gray-100 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center justify-center sm:flex-row flex-col">
          <p className="text-sm text-gray-100  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
            © 2024 Portfolio —
            <a
              href="https://linkedin.com/in/bintibhatt"
              className="text-gray-100  ml-1"
              target="_blank"
            >
              @bintibhatt
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
