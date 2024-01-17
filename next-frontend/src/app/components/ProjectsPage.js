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
              className="max-w-64 rounded-lg overflow-hidden shadow-md bg-gray-700"
            >
              <div className="flex items-center p-4">
                <i className="fas fa-laptop-code fa-3x text-gray-400 mr-4"></i>
                <div>
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="mb-4 text-base text-justify">
                    {project.description}
                  </p>
                  <div className="">
                    <p className="text-gray-300">
                      Technologies: {project.technologies}
                    </p>
                    <Link
                      href={project.projectLink}
                      target="_blank"
                      className="text-blue-500"
                    >
                      View Project &#8594;
                    </Link>
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
