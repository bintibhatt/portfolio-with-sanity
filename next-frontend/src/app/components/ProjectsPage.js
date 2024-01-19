import React from "react";
import { createClient } from "next-sanity";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default async function ProjectsPage() {
  const client = createClient({
    projectId: "qb0ilyn2",
    dataset: "production",
    useCdn: false,
  });

  const projects = await client.fetch(
    `*[_type == "project"] | order(_createdAt asc) `,
    {
      cache: "no-cache",
    }
  );
  return (
    <div className="flex flex-col sm:flex-row h-full bg-gray-600 bg-opacity-60 p-4 sm:p-10 rounded-b-3xl md:p-5 lg:p-10 xl:p-20">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 ">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <div
              key={project._id}
              className="max-w-sm rounded-lg overflow-hidden shadow-md bg-gray-800 hover:bg-gray-900"
            >
              <div className="p-4">
                <div className="flex items-center h-16 border-b-2">
                  <h3 className="w-full sm:w-56 text-lg font-bold text-white tracking-tight mb-2 sm:mb-0 md:text-md">
                    {project.title}
                  </h3>
                  <Link
                    href={project.projectLink}
                    target="_blank"
                    className="text-white border-spacing-2 border-2 border-white rounded-full px-2 py-1 text-sm font-semibold hover:bg-gray-300 hover:text-black"
                  >
                    View &rarr;
                  </Link>
                </div>
                <p className="text-gray-400 md:text-sm">
                  {project.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-wrap">
                    {project.technologies.split(", ").map((tech) => (
                      <li key={tech} className="text-white px-2 min-w-32">
                        {tech}
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
