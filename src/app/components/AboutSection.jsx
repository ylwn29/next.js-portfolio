"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TabButton from "./TabButton";
import LogoGroup from '../components/LogoGroup';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <LogoGroup />
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-xl">
        <li className="pb-4 hover:font-bold">
          <Link href="https://siliconvalley.northeastern.edu/">
            Northeastern Univeristy - San Jose, CA
          </Link>
          <div className="pl-4">- Master of Science in Computer Science</div>         
        </li>
        <li className="pb-2 hover:font-bold">
          <Link href="https://www.rutgers.edu/">
            Rutgers University - Piscataway, NJ
          </Link>
          <div className="pl-4">- Master of Financial Analysis</div>          
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 text-xl">
        <li className="pb-2 hover:font-bold">
          <Link href="https://www.credly.com/badges/4352eb9c-3d29-44f8-819e-272b271b0075/public_url">
            AWS Cloud Practitioner
          </Link>         
        </li>
        <li className="hover:font-bold">
          <Link href="https://badgr.com/public/assertions/z6Fbrhf9Q06D5wyZFxKGDQ">
            Introductory AI Literacy
          </Link>         
        </li>
      </ul>
    ),
  },
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
        <Image src="/images/bg3.jpg" width={650} height={650} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
          <p className="text-lg lg:text-xl mb-4">
            I am a Master of Science in Computer Science student at Northeastern University. I have experience of Web Development, Cloud Computing, Object-Oriented Design. I am passionate about learning new technologies and am currently exploring the use of OpenAI APIs to deliver diverse functionalities.
          </p>
          <p className="text-lg lg:text-xl">
            Meanwhile, I am a team player and am eager to work with others to create innovative projects.
          </p>
          <div className="flex flex-row justify-center mt-8 text-2xl gap-12 transition-transform duration-300 hover:scale-110">
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
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8 italic">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
