import React, { useEffect, useState, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import myImage from "../../assets/pic1.jpg"; // Adjust the path if needed
import projects from "../../data/projectsData.js"; // Ensure the file extension is included

export default function Project() {
  const [visibleImages, setVisibleImages] = useState({}); // Track which images are visible
  const [cachedImages, setCachedImages] = useState({}); // Cache for loaded images
  const imageRefs = useRef([]); // Store references to image containers

  useEffect(() => {
    const storedCache = JSON.parse(localStorage.getItem("imageCache")) || {};
    setCachedImages(storedCache);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            const project = projects[index];
            if (!project) return;

            const img = new Image();
            img.src = project.image;

            img.onload = () => {
              setCachedImages((prev) => {
                const updated = { ...prev, [index]: img.src };
                localStorage.setItem("imageCache", JSON.stringify(updated));
                return updated;
              });
              setVisibleImages((prev) => ({ ...prev, [index]: true }));
            };

            img.onerror = () => {
              console.error(`Failed to load image at index: ${index}`);
              setVisibleImages((prev) => ({ ...prev, [index]: true })); // Ensure fallback image shows
            };

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-[10%] py-10 pb-20">
      {projects.map((project, index) => (
        <div key={`${project.id}-${index}`} className="relative rounded-2xl overflow-hidden shadow-lg group">
          <div
            className="aspect-[5/3] overflow-hidden flex items-center justify-center bg-gray-200"
            ref={(el) => (imageRefs.current[index] = el)} // Store reference to the image container
            data-index={index} // Use index as a unique identifier
          >
            {visibleImages[index] ? (
              <img
                src={cachedImages[index] || myImage} // Use cached image or fallback
                alt={project.name}
                onError={(e) => (e.currentTarget.src = myImage)}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            ) : (
              <div className="loader border-t-4 border-blue-500 rounded-full w-10 h-10 animate-spin"></div> // Loading spinner
            )}
          </div>
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-4 py-2 rounded-full font-semibold shadow hover:scale-105 transition-transform flex items-center gap-2"
            >
              <FaGithub className="inline mr-2 text-2xl" /> <span>GitHub</span>
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group/live-btn bg-white text-black px-4 py-2 rounded-full font-semibold shadow hover:scale-105 transition-transform flex items-center gap-2"
            >
              <span>Live</span>
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
