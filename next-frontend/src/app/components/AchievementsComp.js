import React from "react";
import { createClient } from "next-sanity";
import Link from "next/link";

export default async function AchievementsPage() {
  const client = createClient({
    projectId: "qb0ilyn2",
    dataset: "production",
    useCdn: false,
  });

  const achievements = await client.fetch(
    `*[_type == "achievement"] | order(_createdAt asc) `,
    {
      cache: "no-cache",
    }
  );
  return (
    <div className="flex h-full bg-gray-600 bg-opacity-60 p-16 rounded-b-3xl">
      <div>
        <h1 className="text-3xl font-bold mb-8">My Achievements</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {achievements.map((achievement) => (
            <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {achievement.title}
                </h5>
                <p className="text-base text-gray-700 dark:text-gray-400">
                  {achievement.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
