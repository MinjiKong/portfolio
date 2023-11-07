"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Skill from "./Skill";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-5 gap-5">
        <Skill imageSrc="images/skills/java.png" skillName="Java" percentage="90%" />
        <Skill imageSrc="images/skills/python.png" skillName="Python" percentage="90%" />
        <Skill imageSrc="images/skills/dart.png" skillName="Dart" percentage="60%" />
        <Skill imageSrc="images/skills/kotlin.png" skillName="Kotlin" percentage="60%" />
        <Skill imageSrc="images/skills/flutter.png" skillName="Flutter" percentage="80%" />
        <Skill imageSrc="images/skills/git.png" skillName="Git" percentage="90%" />
        <Skill imageSrc="images/skills/react.png" skillName="React" percentage="70%" />
        <Skill imageSrc="images/skills/nextjs.png" skillName="Next.js" percentage="50%" />
        <Skill imageSrc="images/skills/javascript.png" skillName="JavaScript" percentage="80%" />
        <Skill imageSrc="images/skills/tailwind.png" skillName="Tailwind" percentage="50%" />
        <Skill imageSrc="images/skills/aws.png" skillName="AWS" percentage="50%" />
        <Skill imageSrc="images/skills/firebase.png" skillName="Firebase" percentage="50%" />
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>British Columbia of institute of Technology - Computer Systems Technology Diploma</li>
        <li>Douglas College - Hospitality Management Diploma</li>
      </ul>
    ),
  },
  // {
  //   title: "Certifications",
  //   id: "certifications",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>AWS Cloud Practitioner</li>
  //       <li>Google Professional Cloud Developer</li>
  //     </ul>
  //   ),
  // },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a software developer, driven by a deep passion for crafting interactive and responsive web and mobile applications. 
          My primary expertise is in front-end development, where I combine creativity with 
          meticulous attention to detail to ensure the creation of user-friendly applications that captivate and delight.
          As a quick learner, I am always on the lookout for new skills and technologies.
          I am looking forward to adventure this dynamic and ever-evolving field!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;