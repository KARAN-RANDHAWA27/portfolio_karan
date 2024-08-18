import React from "react";
import Navbar from "../Navbar";
import Image from "next/image";

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white p-6 relative overflow-hidden">
      <Navbar />
      <div className="hidden lg:block absolute inset-0 bg-yellow-500  transform rotate-[-15deg] -translate-x-1/2 -translate-y-1/4 h-[200%] w-2/6"></div>

      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 relative z-10 mt-14 md:mt-0">
        <div className="relative">
          <div className="rounded-2xl md:rounded-xl overflow-hidden">
            <Image
              src="/assets/profile.jpg"
              alt="Profile Image"
              width={500}
              height={400}
              className="object-cover rounded-2xl md:rounded-xl"
            />
          </div>
          {/* <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full md:rounded-none border-4 border-yellow-500"></div> */}
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-500">
            &mdash; I am Karan Randhawa.
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-500 dark:text-gray-500 md:pl-14">
            Full Stack Developer
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 border border-gray-500 md:ml-14 w-10/12 rounded-lg p-4 md:w-6/12 ml-6">
            I am a full developer focused on crafting clean &amp; user-friendly
            experiences. I am passionate about building excellent software that
            improves the lives of those around me.
          </p>
          {/* <button className="mt-6 px-6 py-2 rounded-full bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none">
            MORE ABOUT ME
          </button> */}
          <button className="mt-6 p-[3px] relative md:ml-14">
            <div className="px-8 py-2 rounded-full border border-yellow-500 relative group transition duration-200 text-black dark:text-gray-400 hover:bg-yellow-500">
              MORE ABOUT ME
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
