import React from "react";
import Navbar from "./Navbar";
import { createClient } from "next-sanity";
import Link from "next/link";

export default async function AboutPage() {
  const client = createClient({
    projectId: "qb0ilyn2",
    dataset: "production",
    useCdn: false,
  });

  const about = await client.fetch(`*[_type == "about"] `, {
    cache: "no-cache",
  });

  console.log(about);
  return (
    <section className="bg-gray-800">
      <Navbar className="absolute z-50" />
      <div className="container mx-auto py-20 md:py-10 ">
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
      <div className="h-screen mt-20 flex justify-center " id="achievements">
        <div className="w-10/12 bg-gray-700 bg-opacity-50 py-10 px-10 rounded-2xl">
          <div>
            <h1 className="text-3xl font-bold mb-8">My Achievements</h1>
            <ol class="relative border-s border-gray-200 dark:border-gray-700">
              <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  February 2022
                </time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Application UI code in Tailwind CSS
                </h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Get access to over 20+ pages including a dashboard layout,
                  charts, kanban board, calendar, and pre-order E-commerce &
                  Marketing pages.
                </p>
              </li>
              <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  March 2022
                </time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Marketing UI design in Figma
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  All of the pages and components are first designed in Figma
                  and we keep a parity between the two versions even as we
                  update the project.
                </p>
              </li>
              <li class="ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  April 2022
                </time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  E-Commerce UI code in Tailwind CSS
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  Get started with dozens of web components and interactive
                  elements built on top of Tailwind CSS.
                </p>
              </li>
            </ol>
          </div>

          <div className="mt-30">
            <h1 className="text-3xl font-bold mb-8">My Achievements</h1>
            <ol class="relative border-s border-gray-200 dark:border-gray-700">
              <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  February 2022
                </time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Application UI code in Tailwind CSS
                </h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Get access to over 20+ pages including a dashboard layout,
                  charts, kanban board, calendar, and pre-order E-commerce &
                  Marketing pages.
                </p>
              </li>
              <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  March 2022
                </time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Marketing UI design in Figma
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  All of the pages and components are first designed in Figma
                  and we keep a parity between the two versions even as we
                  update the project.
                </p>
              </li>
              <li class="ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  April 2022
                </time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  E-Commerce UI code in Tailwind CSS
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  Get started with dozens of web components and interactive
                  elements built on top of Tailwind CSS.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
