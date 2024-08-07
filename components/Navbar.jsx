"use client";
import { useState, useEffect } from "react";
import {
  XIcon,
  MenuIcon,
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  MailIcon,
  PencilIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="fixed md:right-10 right-4 top-4 md:top-1/2 transform md:-translate-y-1/2 flex flex-col space-y-4 z-50">
      <button
        onClick={toggleNavbar}
        className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full focus:outline-none md:hidden"
      >
        {isOpen ? (
          <XIcon className="h-6 w-6" />
        ) : (
          <MenuIcon className="h-6 w-6" />
        )}
      </button>
      <div
        className={`flex flex-col space-y-4 ${
          isOpen ? "block" : "hidden"
        } md:block`}
      >
        <NavItem icon={<HomeIcon className="h-6 w-6" />} label="HOME" />
        <NavItem icon={<UserIcon className="h-6 w-6" />} label="ABOUT" />
        <NavItem
          icon={<BriefcaseIcon className="h-6 w-6" />}
          label="PORTFOLIO"
        />
        <NavItem icon={<MailIcon className="h-6 w-6" />} label="CONTACT" />
        <NavItem icon={<PencilIcon className="h-6 w-6" />} label="BLOG" />
        <NavItem
          icon={
            isDarkMode ? (
              <SunIcon className="h-6 w-6" onClick={toggleDarkMode} />
            ) : (
              <MoonIcon className="h-6 w-6" onClick={toggleDarkMode} />
            )
          }
          label=""
        />
      </div>
    </div>
  );
};

const NavItem = ({ icon, label }) => {
  return (
    <div className="group relative flex items-center">
      <div className="p-2 rounded-full bg-gray-200 dark:bg-gray-800  group-hover:bg-yellow-500">
        {icon}
      </div>
      {label && (
        <span className="absolute right-12 ml-12 whitespace-nowrap bg-yellow-500 text-white dark:text-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-full group-hover:translate-x-0">
          {label}
        </span>
      )}
    </div>
  );
};

export default Navbar;
