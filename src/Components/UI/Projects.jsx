import React from "react";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

export const Projects = () => {
  const projects = [
    {
      title: "Portfolio Mockup",
      description:
        "A Mockup of a Portfolio that showcase the product and its features",
      src: "/img.png",
      to: "https://habib277672.github.io/Personal-Portfolio/",
    },
    {
      title: "Portfolio Mockup",
      description:
        "A Mockup of a Portfolio that showcase the product and its features",
      src: "/img.png",
      to: "https://habib277672.github.io/Personal-Portfolio/",
    },
    {
      title: "Portfolio Mockup",
      description:
        "A Mockup of a Portfolio that showcase the product and its features",
      src: "/img.png",
      to: "https://habib277672.github.io/Personal-Portfolio/",
    },
    {
      title: "Portfolio Mockup",
      description:
        "A Mockup of a Portfolio that showcase the product and its features",
      src: "/img.png",
      to: "https://habib277672.github.io/Personal-Portfolio/",
    },
  ];
  return (
    <div className="py-10">
      <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
        I Love Building Web Apps and products that can impact millions of lives
      </p>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
        {projects?.map((project, id) => {
          return (
            <motion.div
              initial={{
                opacity: 0,
                filter: "blur(10px)",
                y: 10,
              }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.3, delay: id * 0.1, ease: "easeInOut" }}
              key={id}
              className="group relative mb-2 h-fit"
            >
              <NavLink to={project.to}>
                <img
                  className="h-72 w-full rounded-xl object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                  src={project.src}
                  alt={project.title}
                  draggable={false}
                  width={300}
                  height={300}
                />
                <h2 className="z-20 mt-2 font-medium tracking-tight text-neutral-500 dark:text-neutral-400">
                  {project.title}
                </h2>
                <p className="mt-1 max-w-sm text-sm text-neutral-500 md:text-sm dark:text-neutral-400">
                  {project.description}
                </p>
              </NavLink>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
