"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next.js Portfolio Website",
    description: "This is a portfolio website built with Next.js and Tailwind CSS. It showcases my skills, projects, and achievements in an elegant and responsive design.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ylwn29/next.js-portfolio",
    previewUrl: "https://yulunwang.netlify.app/",
  },
  {
    id: 2,
    title: "Color Palette Generator",
    description: "A SPA utilized Flask and Python. It takes users' prompts, pass it over to OpenAI API to get colors back from GPT, then respond with the list of colors.",
    image: "/images/projects/2.png",
    tag: ["All", "Web", "AI"],
    gitUrl: "https://github.com/ylwn29/color_palette_generator",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Full Stack MERN Web Application",
    description: "Rotten Apples is a book review web application using MongoDB, Express, React, Node. It consists of Login, Register, Home, Profile, Search/Results, Details pages.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ylwn29/rotten-apples-web-app",
    previewUrl: "https://rotten-apples-react-web-app.netlify.app/",
  },
  {
    id: 4,
    title: "Command line chat bot",
    description: "This is a React project that implements an image carousel component using react-slick and modern-screenshot libraries. You can either download individual page as a PNG file or all the pages as a PDF file.",
    image: "/images/projects/4.png",
    tag: ["All", "AI"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 5,
    title: "Image Carousel React Project",
    description: "This is a React project that implements an image carousel component using react-slick and modern-screenshot libraries. You can either download individual page as a PNG file or all the pages as a PDF file.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ylwn29/image_carousel",
    previewUrl: "https://image-carousel-download.netlify.app/",
  },
  {
    id: 6,
    title: "Django ecommerce project",
    description: "A simple django ecommerce that selling dog supplies, which implemented shopping cart feature with CRUD operations.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ylwn29/django_project",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12  xl:px-16">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
