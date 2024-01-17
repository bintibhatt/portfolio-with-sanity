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
    <section className="bg-gray-800 h-screen">
      <Navbar className="absolute z-50" />
      <div className="container mx-auto py-20 md:py-10 ">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {projects.map((project) => (
            <div
              key={project._id}
              className="max-w-md rounded-lg overflow-hidden shadow-md bg-gray-700"
            >
              <img
                src={urlFor(project.projectImage.asset._ref)
                  .width(500)
                  .height(300)
                  .toString()}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4 text-justify">{project.description}</p>
                <div className="">
                  <p className="text-gray-300">
                    Technologies: {project.technologies}
                  </p>
                  <p>
                    <Link
                      href={project.projectLink}
                      target="_blank"
                      className="text-blue-500"
                    >
                      View Project &#8594;
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
