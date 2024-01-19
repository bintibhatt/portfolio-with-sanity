import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex h-full bg-gray-600 bg-opacity-60 p-20 rounded-b-3xl">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Contact Me!</h2>
        <div className="flex">
          <Link href="https://linkedin.com/in/bintibhatt" target="_blank">
            <img
              src="/assets/images/linkedin.png"
              className="w-24 opacity-80 hover:opacity-100"
              alt="Contact"
            />
          </Link>
          <Link href="https://github.com/bintibhatt" target="_blank">
            <img
              src="/assets/images/github.png"
              className="w-24 opacity-80 hover:opacity-100"
              alt="Contact"
            />
          </Link>
          <Link href="mailto:bjbhatt@duck.com" target="_blank">
            <img
              src="/assets/images/email.png"
              className="w-24 opacity-80 hover:opacity-100"
              alt="Contact"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
