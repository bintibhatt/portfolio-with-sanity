import React from "react";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <section className="bg-gray-800 h-screen">
      <Navbar className="absolute z-50" />
      <div className="container mx-auto py-20 md:py-10 ">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <p className="text-lg">
              Feel free to drop me a line using the form below or reach out
              through any of the following channels:
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="mailto:youremail@example.com"
                  className="hover:underline"
                >
                  youremail@example.com
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/your_username"
                  className="hover:underline"
                >
                  Twitter: @your_username
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/your_username"
                  className="hover:underline"
                >
                  LinkedIn: in/your_username
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
