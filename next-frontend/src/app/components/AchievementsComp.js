import React from "react";
import { createClient } from "next-sanity";

export default async function AchievementsPage() {
  const client = createClient({
    projectId: "qb0ilyn2",
    dataset: "production",
    useCdn: false,
  });

  const experiences = await client.fetch(
    `*[_type == "experience"] | order(_createdAt desc) `,
    {
      cache: "no-cache",
    }
  );
  const educations = await client.fetch(
    `*[_type == "education"] | order(_createdAt desc) `,
    {
      cache: "no-cache",
    }
  );

  console.log(experiences);
  return (
    <div className="flex justify-around h-full bg-gray-600 p-16 rounded-b-3xl">
      <div>
        <h1 className="text-3xl font-bold mb-8">My Experiences</h1>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {experiences.map((experience) => (
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-md font-normal leading-none text-gray-300 dark:text-gray-300">
                {experience.date}
              </time>
              <div className="flex items-center mb-2 text-lg font-semibold leading-none text-gray-200 dark:text-gray-300">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {experience.title} -{" "}
                </h3>
                <p className="text-md font-normal text-gray-500 dark:text-gray-300 mt-1 ml-2">
                  {experience.company}
                </p>
              </div>
              <p className="text-base font-normal text-gray-500 dark:text-gray-300">
                {experience.skills}
              </p>
            </li>
          ))}
        </ol>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-8">My Education</h1>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {educations.map((education) => (
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-md font-normal leading-none text-gray-300 dark:text-gray-300">
                {education.date}
              </time>
              s
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {education.degree}
              </h3>
              <p className="text-md font-normal text-gray-500 dark:text-gray-300">
                {education.institution}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
