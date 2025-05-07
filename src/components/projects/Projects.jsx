import React from "react";
import { FaGithub } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import myImage from "../../assets/pic1.jpg"; // adjust the path if needed
import oldPortfolio from "../../assets/oldPortfolio.PNG"
import tastyTreat from "../../assets/tastyTreat.PNG"; // adjust the path if needed
import emart from "../../assets/emart.PNG";

const projects = [
  {
    id: 1,
    image: tastyTreat,
    github: "https://github.com/example/project1",
    live: "https://example.com/project1",
    name: "TastTreat",
    about: "Food Ordering and Delivery",
  },
  {
    id: 2,
    image: oldPortfolio,
    github: "https://github.com/example/project2",
    live: "https://example.com/project2",
    name: "Portfolio", // Fixed spelling
    about: "Plain HTML CSS Javascript",
  },
  {
    id: 3,
    image: emart,
    github: "https://github.com/example/project3", // Updated link
    live: "https://example.com/project3", // Updated link
    name: "EMart",
    about: "Ecommerce",
  },
  {
    id: 4,
    image: myImage,
    github: "https://github.com/example/project4", // Updated link
    live: "https://example.com/project4", // Updated link
    name: "Project 4",
    about: "Full-stack Development",
  },
];

export default function Project() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-32 py-10 ">
      {projects.map((project) => (
        <div key={project.id} className="relative rounded-2xl overflow-hidden shadow-lg group">
          <div className="aspect-[5/3] overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              onError={(e) => (e.currentTarget.src = myImage)}
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-4 py-2 rounded-full font-semibold shadow hover:scale-105 transition-transform flex items-center gap-2"
            >
              <FaGithub className="inline mr-2 text-2xl" /> <span >GitHub</span>
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group/live-btn bg-white text-black px-4 py-2 rounded-full font-semibold shadow hover:scale-105 transition-transform flex items-center gap-2"
            >
              <span >Live</span>
              <GoArrowRight className="transition-transform duration-300 transform group-hover/live-btn:-rotate-45 text-xl" />
            </a>
          </div>
          <div className="p-4 bg-black/50">
            <h3 className="text-xl font-semibold text-gray-500">{project.name}</h3>
            <p className="text-sm text-white mt-2">{project.about}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
