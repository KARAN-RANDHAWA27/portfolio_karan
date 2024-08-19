"use client";
import Navbar from "@/components/Navbar";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Button } from "@/components/ui/moving-border";
import React from "react";

export const projects = [
  {
    title: "Sangeet",
    stack: "Javascript, CSS3, HTML5",
    description: "A music app used for playing music online.",
    link: "https://github.com/KARAN-RANDHAWA27/Sangeet",
  },
  {
    title: "Portfolio Template",
    stack: "Javascript, CSS3, HTML5",
    description: "A basic portfolio template for users. ",
    link: "https://github.com/KARAN-RANDHAWA27/Portfolio-Template",
  },
  {
    title: "Snake Game",
    stack: "HTML5, Pygame, Python",
    description:
      "A classic arcade game where the snake grows longer each time it eats, but the challenge intensifies as the snake must avoid colliding with the walls or its own body.",
    link: "https://github.com/KARAN-RANDHAWA27/Snake-And-Momo",
  },
  {
    title: "Old Portfolio",
    stack: "Javascript, CSS3, HTML5, React JS, MUI, Bootstrap",
    description: "My previous portfolio website.",
    link: "https://karan27.vercel.app/",
  },
  {
    title: "Stopwatch",
    stack: "Javascript, CSS3, HTML5, React JS",
    description:
      "A tool to measure elapsed time with start, stop, and reset functionality.",
    link: "https://github.com/KARAN-RANDHAWA27/Timer",
  },
  {
    title: "Blog",
    stack: "Flask,Javascript,CSS3, SQLITE ",
    description:
      "A platform for sharing and publishing written content on various topics.",
    link: "https://github.com/KARAN-RANDHAWA27/Flask-blog",
  },
];

export const workingProjects = [
  {
    title: "Healthcare Management Application",
    stack: "Django, Javascript, CSS3, Tailwind, MUI React JS, MySQL ",
    description:
      "A foreign industry that deals with managing the customers health document and filling all the necessary forms every year with all the custom functions.",
    link: "#",
  },
  {
    title: "Dockyard Ships Management",
    stack:
      "Django, Javascript, CSS3, Tailwind, MUI React JS, Web Socket, MySQL ",
    description:
      "A maritime shipping company having multiple ships that involves in the transport of goods and cargo across the seas and oceans needed to keep all the record of there ships sailing also for the communication purpose from the oceans where the direct calls are unreachable. Created a custom chat support to deal with the communication.",
    link: "#",
  },
  {
    title: "Hotel Booking",
    stack: "Django, Javascript, CSS3, sqlite",
    description:
      "A group of entrepreneurs aims to launch a platform where users can book unique and offbeat destinations across India.",
    link: "#",
  },
  {
    title: "Teaching Platform",
    stack: "Django, Javascript, CSS3, Web Socket, Postgres",
    description:
      "A company that aims to launch a platform where children can learn from home, creating a virtual school experience.",
    link: "#",
  },
  {
    title: "E-Mail Marketing",
    stack: "Next JS,Tailwind CSS, NODE, Mongodb",
    description:
      "A SaaS product that will be used to do marketing of a product over E-mail. It involves promotions, Ad's, offers and custom templates.",
    link: "#",
  },
  {
    title: "Painting And Gallery",
    stack: "Next JS,Tailwind CSS, NODE, Mongodb",
    description:
      "A startup that brings all types of artwork to an e-commerce platform for sale.",
    link: "#",
  },
  {
    title: "Jewellery Website",
    stack: "",
    description:
      "A jewelry shop owner seeking to expand their customer base and increase revenue through an online platform.",
    link: "#",
  },
];
const Projects = () => {
  return (
    <div className="page-slide-down">
      <Navbar />
      <div className="flex flex-row gap-2 justify-center mt-20 font-extrabold border border-gray-700 m-4 p-4 bg-gray-700 lg:border-none lg:bg-transparent">
        <span className="text-customGray text-3xl lg:text-5xl font-extrabold">
          MY
        </span>
        <span className="text-yellow-400 text-3xl lg:text-5xl font-extrabold">
          PROJECTS
        </span>
      </div>
      <div className="flex flex-col justify-center items-center mt-12">
        <div>
          <Button className="bg-slate-900 dark:text-white border-neutral-200 dark:border-slate-800 text-3xl font-bold rounded-full">
            Learning Projects
          </Button>
        </div>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </div>
      <div className="border border-gray-700  mt-6 w-5/6 ml-6 lg:ml-32"></div>
      <div className="flex flex-col justify-center items-center mt-12">
        <div>
          <Button className="bg-slate-900 dark:text-white border-neutral-200 dark:border-slate-800 text-3xl font-bold rounded-full">
            Industrial &amp; Freelance Projects
          </Button>
        </div>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={workingProjects} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
