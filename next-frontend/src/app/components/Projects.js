import React from "react";
import Image from "next/legacy/image";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1 Title",
      description:
        "Project 1 description goes here.Project 1 description goes here.Project 1 description goes here.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      image: "/assets/images/project1.jpg",
      link: "https://project1-link.com",
    },
    {
      id: 2,
      title: "Project 2 Title",
      description:
        "Project 2 description goes here.Project 2 description goes here.Project 2 description goes here.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      image: "/assets/images/project2.jpg",
      link: "https://project1-link.com",
    },
    {
      id: 3,
      title: "Project 3 Title",
      description: "Project 3 description goes here.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      image: "/assets/images/project3.jpg",
      link: "https://project1-link.com",
    },
    {
      id: 4,
      title: "Project 4 Title",
      description: "Project 4 description goes here.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      image: "/assets/images/project3.jpg",
      link: "https://project1-link.com",
    },
  ];

  return (
    <section className="py-24 md:py-48">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="max-w-md rounded-lg overflow-hidden shadow-md bg-gray-700"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500">
                    Technologies: {project.technologies.join(", ")}
                  </p>
                  <a href={project.link} className="text-white-500">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
