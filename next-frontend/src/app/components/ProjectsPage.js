import React, { cache } from "react";
import Image from "next/legacy/image";
import { createClient } from "next-sanity";
import Navbar from "../components/Navbar";

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
    <section>
      <Navbar className="absolute z-50" />
      <div className="container mx-auto py-24 md:py-48">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="max-w-md rounded-lg overflow-hidden shadow-md bg-gray-700"
            >
              {/* <Image
                className=" hover:scale-105"
                src={project.projectImage.asset._ref}
                alt={project.title}
                width={500}
                height={250}
              /> */}
              {/* <img src={project.projectImage.asset._ref} alt={project.title} /> */}
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4 text-justify">{project.description}</p>
                <div className="">
                  <p className="text-gray-300">
                    Technologies: {project.technologies}
                  </p>
                  <p className="text-blue-500">
                    <a
                      href={project.projectLink}
                      target="_blank"
                      className="text-white-500"
                    >
                      View Project &#8594;
                    </a>
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
