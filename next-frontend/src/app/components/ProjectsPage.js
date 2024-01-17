import React, { cache } from "react";
import { createClient } from "next-sanity";
import Navbar from "../components/Navbar";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";

const builder = imageUrlBuilder({
  baseUrl: "https://cdn.sanity.io/",
  projectId: "qb0ilyn2",
  dataset: "production",
});
const urlFor = (source) => builder.image(source);

export default async function ProjectsPage() {
  const client = createClient({
    projectId: "qb0ilyn2",
    dataset: "production",
    useCdn: false,
  });

  const projects = await client.fetch(`*[_type == "project"] `, {
    cache: "no-cache",
  });

  console.log(projects);
  return (
    <div className="flex h-full bg-gray-600 p-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {projects.map((project) => (
            <div
              key={project._id}
              className="max-w-64 rounded-lg overflow-hidden shadow-md bg-gray-700 hover:bg-gray-800 h-72"
            >
              <div className="p-2">
                <h3 className="h-16 flex justify-center items-center w-full text-lg font-bold text-center text-white">
                  {project.title}
                </h3>
                <hr></hr>
                <p className="text-sm text-justify text-gray-400">
                  {project.description}
                </p>
                <div className="text-sm text-gray-200">
                  {project.technologies.split(", ").map((tech) => (
                    <div className="inline-flex px-2.5 py-0.5 text-xs font-medium bg-gray-800 mr-1">
                      {tech}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <Link
                    href={project.projectLink}
                    target="_blank"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
