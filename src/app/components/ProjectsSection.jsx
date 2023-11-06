"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Goal Tracking App",
    project: "Industry Sponsored Student Project",
    description: "I collaborated within a dynamic team of 4 to develop a cutting-edge mobile application with valuable guidance from our esteemed client, OneIotaPerformance. I have learned the Model-View-Controller (MVC) design pattern, a fundamental aspect of modern software architecture.",
    image: "/images/projects/burnout.png",
    tag: ["All", "Mobile"],
    skill: "Skills: Flutter, Dart, MySQL and Swagger API",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Golf App",
    project: "Industry Sponsored Student Project",
    description: "My team successfully developed a mobile app which later got released by OneIotaPerformance for public use. I have acquired proficiency in Flutter through self-directed learning.",
    image: "/images/projects/burnout.png",
    tag: ["All", "Mobile"],
    skill: "Skills: Flutter, Dart, and Firebase",
    gitUrl: "https://github.com/MinjiKong/oneiotaperformance",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "PokeSlot",
    project: "Android Mobile Academic Project",
    description: "It was a first time developing an Android mobile app with a new language, kotlin. I learned the Model-View-ViewModel (MVVM) designp pattern.",
    image: "/images/projects/burnout.png",
    tag: ["All", "Mobile"],
    skill: "Skills: Kotlin, Android Studio, Firebase",
    gitUrl: "https://github.com/MinjiKong/PokeSlot",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "BurnOut",
    project: "Cloud Academic Project",
    description: "With the knowledge I gained in BCIT Cloud option cource, I created a web application using a wide range of AWS.",
    image: "/images/projects/burnout.png",
    tag: ["All", "Web"],
    skill: "Skills: HTML5, CSS, JavaScript, Node.js, Firebase, React, AWS EC2, AWS Cognito, AWS S3, and Elastic Load Balancer",
    gitUrl: "https://github.com/MinjiKong/BurnOut",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Butterfly Effect",
    project: "Academic Project",
    description: "I collaborated in a team of 5, applying Agile development methodologies with scrum and Git branching. I self-taught on email API using JavaScript",
    image: "/images/projects/burnout.png",
    tag: ["All", "Web"],
    skill: "Skills: HTML5, CSS, Heroku, JavaScript, MySQL, Node.js, Bcypt",
    gitUrl: "https://github.com/MinjiKong/Butterfly-Effect",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Debug Run",
    project: "Hackathon BCIT's Hack the Break 2022",
    description: "I successfully created a text-based game within a 24-hour timeframe. The hackathon was done remotely that I managed to effectively communicate with the team through discord and resolved conflicts as a team.",
    image: "/images/projects/burnout.png",
    tag: ["All", "Mobile"],
    skill: "Skills: HTML5, CSS, JavaScript, Heroku",
    gitUrl: "https://github.com/MinjiKong/Debug-Run",
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
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
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
              project={project.project}
              description={project.description}
              imgUrl={project.image}
              skill={project.skill}
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