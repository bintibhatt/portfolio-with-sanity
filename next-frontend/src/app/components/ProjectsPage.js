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
    <div className="flex h-full bg-gray-600 p-20 rounded-b-3xl">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {projects.map((project) => (
            <div
              key={project._id}
              className="max-w-sm rounded-lg overflow-hidden shadow-md bg-gray-800 hover:bg-gray-900"
            >
              <div className="p-4">
                <div className="flex items-center h-16 border-b-2">
                  <h3 className="w-56 text-lg font-bold text-white tracking-tight mb-2">
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
                <p className="text-gray-400">{project.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-wrap">
                    {project.technologies.split(", ").map((tech) => (
                      <span key={tech} className="text-white px-2 list-disc">
                        <li>{tech}</li>
                      </span>
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
