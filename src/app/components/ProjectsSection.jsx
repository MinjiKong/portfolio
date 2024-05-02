"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Debug Run",
    project: "Hackathon BCIT's Hack the Break 2022",
    description:
      "I successfully created a text-based game within a 24-hour timeframe. The hackathon was done remotely that I managed to effectively communicate with the team through discord and resolved conflicts as a team.",
    image: "/images/projects/debug.gif",
    tag: ["All", "Mobile"],
    skill: "Skills: HTML5, CSS, JavaScript, Heroku",
    gitUrl: "https://github.com/MinjiKong/Debug-Run",
    previewUrl: "/",
    width: 200,
    height: 400,
  },
  {
    id: 2,
    title: "Butterfly Effect",
    project: "Academic Project",
    description:
      "I collaborated in a team of 5, applying Agile development methodologies with scrum and Git branching. I self-taught on email API using JavaScript",
    image: "/images/projects/butterfly.gif",
    tag: ["All", "Web"],
    skill: "Skills: HTML5, CSS, Heroku, JavaScript, MySQL, Node.js, Bcypt",
    gitUrl: "https://github.com/MinjiKong/Butterfly-Effect",
    previewUrl: "/",
    width: 550,
    height: 300,
  },
  {
    id: 3,
    title: "BurnOut",
    project: "Cloud Academic Project",
    description:
      "With the knowledge I gained in BCIT Cloud option course, I created a web application using a wide range of AWS.",
    image: "/images/projects/burnout.png",
    tag: ["All", "Web"],
    skill:
      "Skills: HTML5, CSS, JavaScript, Node.js, Firebase, React, AWS EC2, AWS Cognito, AWS S3, and Elastic Load Balancer",
    gitUrl: "https://github.com/MinjiKong/BurnOut",
    previewUrl:
      "https://www.canva.com/design/DAFdAkQB8I4/WAK-1JuWpjnz5X5FSa21IQ/view?utm_content=DAFdAkQB8I4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    width: 500,
    height: 300,
  },
  {
    id: 4,
    title: "PokeSlot",
    project: "Android Mobile Academic Project",
    description:
      "It was my first time developing an Android mobile app with a new language, kotlin. I learned the Model-View-ViewModel (MVVM) design pattern.",
    image: "/images/projects/pokeslot.gif",
    tag: ["All", "Mobile"],
    skill: "Skills: Kotlin, Android Studio, Firebase",
    gitUrl: "https://github.com/MinjiKong/PokeSlot",
    previewUrl:
      "https://www.canva.com/design/DAFfIMC41cE/7KMiYkCiA_t1f_yG_2i8UQ/view?utm_content=DAFfIMC41cE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    width: 200,
    height: 400,
  },
  {
    id: 5,
    title: "Golf Performance App",
    project: "Industry Sponsored Student Project",
    description:
      "My team successfully developed a mobile app which later got released by OneIotaPerformance for public use. I have acquired proficiency in Flutter through self-directed learning.",
    image: "/images/projects/golf.gif",
    tag: ["All", "Mobile"],
    skill: "Skills: Flutter, Dart, and Firebase",
    gitUrl: "https://github.com/MinjiKong/oneiotaperformance",
    previewUrl:
      "https://play.google.com/store/apps/details?id=com.oneiotaperformance.golf&hl=en-US&ah=5jL7ntK8K227cgiIHX9Xk_n9A2E ",
    width: 200,
    height: 400,
  },
  {
    id: 6,
    title: "Goal Checking App",
    project: "Industry Sponsored Student Project",
    description:
      "I collaborated within a dynamic team of 4 to develop a cutting-edge mobile application with valuable guidance from our esteemed client, OneIotaPerformance. I have learned the Model-View-Controller (MVC) design pattern, a fundamental aspect of modern software architecture.",
    image: "/images/projects/goal.gif",
    tag: ["All", "Mobile"],
    skill: "Skills: Flutter, Dart, MySQL and Swagger API",
    gitUrl: "/",
    previewUrl: "/",
    width: 200,
    height: 400,
  },
  {
    id: 7,
    title: "StoreFront",
    project: "Serverless Academic Project",
    description:
      "Created e-commerce website that is run serverless by using AWS services",
    image: "/images/projects/storefront.gif",
    tag: ["All", "Web"],
    skill: "Skills: Nextjs, Tailwind, stripe, 17 AWS services",
    gitUrl: "/",
    previewUrl: "/",
    width: 500,
    height: 300,
  },
  {
    id: 8,
    title: "New York Times Best Sellers",
    project: "Personal Project",
    description:
      "Created a website that displays New York Times best sellers and directs users to Amazon.com",
    image: "/images/projects/bestsellers.gif",
    tag: ["All", "Web"],
    skill: "Skills: Nextjs, Typescript, Public API, CSS",
    gitUrl: "https://github.com/MinjiKong/New-York-Times-Best-Sellers",
    previewUrl: "https://new-york-times-best-sellers-omega.vercel.app/",
    width: 500,
    height: 300,
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
        {filteredProjects.reverse().map((project, index) => (
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
              width={project.width}
              height={project.height}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
