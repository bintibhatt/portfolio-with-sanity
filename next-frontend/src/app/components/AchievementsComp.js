import React from "react";
import { createClient } from "next-sanity";
import Link from "next/link";

export default async function AchievementsPage() {
  return (
    <div className="flex h-full bg-gray-600 bg-opacity-60 p-16 rounded-b-3xl">
      <div>
        <h1 className="text-3xl font-bold mb-8">My Achievements</h1>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 text-justify">
          <div className="p-4">
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-contain w-full rounded-t-lg h-32  md:w-48 md:rounded-none md:rounded-s-lg"
                src="/assets/images/MLSA.png"
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Microsoft Learn Student Ambassador
                </h5>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
