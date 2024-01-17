import React from "react";

export default function AboutComp() {
  return (
    <div className="relative group rounded-lg p-4 cursor-pointer hover:bg-gray-100">
      <h2 className="text-lg font-medium">Item 1</h2>
      <div className="transition-all duration-300 hidden">
        <div className="flex h-full rounded-lg bg-gray-600 p-20">
          <div className="container w-9/12">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 text-justify">
              <p>{about[0].about_me}</p>
              <p>{about[0].about_study}</p>
              <p>{about[0].about_extra}</p>
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Get in touch &#8594;
              </Link>
            </div>
          </div>
        </div>
        {/* Your actual content for item 1 goes here */}
      </div>
    </div>
  );
}
