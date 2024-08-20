"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandLinkedin,
  IconBrandGithubFilled,
  IconBrandHackerrank,
} from "@tabler/icons-react";

const Homepage = () => {
  const links = [
    {
      title: "Github",
      icon: (
        <IconBrandGithubFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/KARAN-RANDHAWA27",
    },

    {
      title: "Linkdin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "HackerRank",
      icon: (
        <IconBrandHackerrank className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.hackerrank.com/profile/karandeeprandha1",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white p-6 relative overflow-hidden page-slide-down">
      <Navbar />
      <div className="hidden lg:block absolute inset-0 bg-yellow-500  transform rotate-[-15deg] -translate-x-1/2 -translate-y-1/4 h-[200%] w-2/6"></div>

      <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8 relative z-10 mt-14 lg:mt-0">
        <div className="relative">
          <div className="rounded-2xl lg:rounded-xl overflow-hidden bg-transparent">
            <Image
              src="/assets/img.jpg"
              alt="Profile Image"
              width={600}
              height={400}
              className="object-cover rounded-2xl lg:rounded-xl"
            />
          </div>
          {/* <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full lg:rounded-none border-4 border-yellow-500"></div> */}
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold text-yellow-500">
            &mdash; I am Karan Randhawa.
          </h1>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-500 dark:text-gray-500 lg:pl-14">
            Full Stack Developer
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 border border-gray-500 lg:ml-14 w-400 rounded-lg p-4 lg:w-6/12 ml-2">
            I am a full developer focused on crafting clean &amp; user-friendly
            experiences. I am passionate about building excellent software that
            improves the lives of those around me.
          </p>
          <a href="/about">
            <button className="mt-6 p-[3px] relative lg:ml-14">
              <div className="px-8 py-2 rounded-full border border-yellow-500 relative group transition duration-200 text-black dark:text-gray-400 hover:bg-yellow-500">
                MORE ABOUT ME
              </div>
            </button>
          </a>
          <div className="lg:ml-10 mt-4">
            <FloatingDock items={links} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
