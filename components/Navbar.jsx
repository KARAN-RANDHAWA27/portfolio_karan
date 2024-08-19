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
  CogIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

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
    <div className="fixed md:right-10 right-4 top-4 md:top-1/2 transform md:-translate-y-1/2 flex flex-col space-y-4 z-50 border border-black bg-gray-200 rounded-xl dark:bg-slate-800 pb-2">
      <button onClick={toggleNavbar} className="p-2 md:hidden">
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
        <NavItem
          icon={<HomeIcon className="h-6 w-6" />}
          label="HOME"
          href="/"
        />
        <NavItem
          icon={<UserIcon className="h-6 w-6" />}
          label="ABOUT"
          href="/about"
        />
        <NavItem
          icon={<BriefcaseIcon className="h-6 w-6" />}
          label="PROJECTS"
          href="/projects"
        />
        <NavItem
          icon={<MailIcon className="h-6 w-6" />}
          label="CONTACT"
          href="/contact"
        />
        {/* <NavItem
          icon={<PencilIcon className="h-6 w-6" />}
          label="BLOG"
          href="/blogs"
        />
        <NavItem
          icon={<CogIcon className="h-6 w-6" />}
          label="SETTING"
          href="/settings"
        /> */}
        <NavItem
          icon={
            isDarkMode ? (
              <SunIcon className="h-6 w-6" onClick={toggleDarkMode} />
            ) : (
              <MoonIcon className="h-6 w-6" onClick={toggleDarkMode} />
            )
          }
          label=""
          href="#"
        />
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, href }) => {
  return (
    <Link href={href}>
      <div className="group relative flex items-center pb-2">
        <div className="p-2 rounded-full bg-gray-200 dark:bg-gray-800  group-hover:bg-yellow-500">
          {icon}
        </div>
        {label && (
          <span className="absolute right-12 ml-12 whitespace-nowrap bg-yellow-500 text-white dark:text-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-full group-hover:translate-x-0">
            {label}
          </span>
        )}
      </div>
    </Link>
  );
};

export default Navbar;

{
  /* <Link href={"/"} className="h-6 w-6">
          <NavItem icon={<HomeIcon className="h-6 w-6" />} label="HOME" />
        </Link>
        <Link href={"/about"}>
          <NavItem icon={<UserIcon className="h-6 w-6" />} label="ABOUT" />
        </Link>
        <Link href={"/portfolio"}>
          <NavItem
            icon={<BriefcaseIcon className="h-6 w-6" />}
            label="PORTFOLIO"
          />
        </Link>
        <Link href={"/contact"}>
          <NavItem icon={<MailIcon className="h-6 w-6" />} label="CONTACT" />
        </Link>
        <Link href={"/blog"}>
          <NavItem icon={<PencilIcon className="h-6 w-6" />} label="BLOG" />
        </Link>
        <Link href={"/setting"}>
          <NavItem icon={<CogIcon className="h-6 w-6" />} label="SETTING" />
        </Link> */
}
