"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import { DownloadIcon } from "@heroicons/react/outline";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import CircularProgress from "@mui/material/CircularProgress";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const About = () => {
  const experienceContent = [
    {
      company: "WEB IDEA SOLUTION",
      tenure: (
        <>
          <span>APRIL, 2024 - JULY, 2024</span>
        </>
      ),
      role: "Software Developer",
      description:
        "Developed web applications and contributed to backend development using Python and Django. Build chat system and all its features for a project.",
      icon: <FaBriefcase />,
    },
    {
      company: "PANDORA WEB STUDIO",
      tenure: (
        <>
          <span>JULY, 2023 - PRESENT</span>
        </>
      ),
      role: "Freelancer",
      description:
        "Worked on various freelancing projects focusing on frontend development with React and Next alongside Tailwind CSS for desgign. Django and Node for backend development.",
      icon: <FaBriefcase />,
    },
    {
      company: "Raneso",
      tenure: (
        <>
          <span>FEB, 2023 - APRIL, 2024</span>
        </>
      ),
      role: "Junior Software Developer",
      description:
        "Developed web applications using HTML5, CSS3, JavaScript, React JS, Django, MUI and Tailwind. Acquired and applied new technologies through hands-on integration in various projects.",
      icon: <FaBriefcase />,
    },
    {
      company: "SKILLIGENCE",
      tenure: (
        <>
          <span>FEB, 2022 - PRESENT</span>
        </>
      ),
      role: "Python and Data Science Trainer",
      description:
        "Provided training in Python programming and data science to aspiring developers. Build projects that includes features of Machine Learning.",
      icon: <FaBriefcase />,
    },
  ];

  const educationContent = [
    {
      institute: "ARKA JAIN UNIVERSITY",
      place: "JAMSHEDPUR, JHARKHAND",
      tenure: "APRIL, 2020 - JULY, 2023",
      degree: "BACHELOR OF COMPUTER APPLICATIONS",
      icon: <FaGraduationCap />,
    },
    {
      institute: "S.D.S.M SCHOOL OF EXCELLENCE (C.B.S.E)",
      place: "JAMSHEDPUR, JHARKHAND",
      tenure: "MARCH, 2017 - FEB, 2019",
      degree: "HIGHER SECONDARY SCHOOLING",
      icon: <FaGraduationCap />,
    },
    {
      institute: "N.M.L KERALA PUBLIC SCHOOL (C.B.S.E)",
      place: "JAMSHEDPUR, JHARKHAND",
      tenure: "TILL FEB-2017",
      degree: "SECONDARY SCHOOLING",
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <div className="page-slide-down">
      <Navbar />
      <div className="flex flex-row gap-2 justify-center mt-20 font-extrabold border border-gray-700 m-4 p-4 bg-gray-700 lg:border-none lg:bg-transparent">
        <span className="text-customGray text-3xl lg:text-5xl font-extrabold">
          ABOUT
        </span>
        <span className="text-yellow-400 text-3xl lg:text-5xl font-extrabold">
          ME
        </span>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-start lg:ml-56 gap-10 ml-4">
        <div className="flex flex-col gap-6 lg:w-1/2 ml-12">
          <span className="font-semibold text-customGray text-3xl">
            PERSONAL INFO
          </span>
          <div className="flex flex-col gap-6 font-semibold ml-6">
            <div className="flex flex-row gap-4">
              <span className="text-gray-400">First Name:</span>
              <span className="text-black dark:text-white">Karandeep</span>
            </div>
            <div className="flex flex-row gap-4">
              <span className="text-gray-400">Last Name:</span>
              <span className="text-black dark:text-white">Randhawa</span>
            </div>
            <div className="flex flex-row gap-16">
              <span className="text-gray-400">Age:</span>
              <span className="text-black dark:text-white">23 Years</span>
            </div>
            <div className="flex flex-row gap-6">
              <span className="text-gray-400">Address:</span>
              <span className="text-black dark:text-white">Jamshedpur</span>
            </div>
            <div className="flex flex-row gap-8">
              <span className="text-gray-400">Phone:</span>
              <span className="text-black dark:text-white">+919661637558</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row lg:flex-col lg:w-1/2 gap-6 ml-2">
          <div className="flex flex-col lg:flex-row gap-10">
            <CardSpotlight className="w-40 h-40">
              <span className="text-3xl font-bold relative z-20 mt-2 text-yellow-400">
                16+
              </span>
              <br />
              <span className="font-semibold relative z-20 text-white">
                Months Of Experience
              </span>
            </CardSpotlight>
            <CardSpotlight className="w-40 h-40">
              <span className="text-3xl relative font-bold z-20 mt-2 text-yellow-400">
                35+
              </span>
              <br />
              <span className="font-semibold relative z-20 text-white">
                Projects Completed
              </span>
            </CardSpotlight>
          </div>
          <div className="flex flex-col lg:flex-row gap-10">
            <CardSpotlight className="w-40 h-40">
              <span className="text-3xl relative font-bold z-20 mt-2 text-yellow-400">
                10+
              </span>
              <br />
              <span className="font-semibold relative z-20 text-white">
                Satisfied Clients
              </span>
            </CardSpotlight>
            <CardSpotlight className="w-40 h-40">
              <span className="text-3xl relative font-bold z-20 mt-2 text-yellow-400">
                14+
              </span>
              <br />
              <span className="font-semibold relative z-20 text-white">
                Months as Trainer
              </span>
            </CardSpotlight>
          </div>
        </div>
      </div>

      <div className="ml-16 lg:ml-20 mt-6">
        <a href="/assets/cv.pdf" download="Karan_Randhawa.pdf">
          <button className="p-[3px] relative lg:ml-44">
            <div className="px-8 py-2 rounded-full border border-yellow-500 group transition duration-200 text-black dark:text-white hover:bg-yellow-500 flex items-center justify-center gap-2">
              <span>DOWNLOAD CV</span>
              <span className="flex justify-center items-center w-10 h-10 rounded-full border border-yellow-500 bg-yellow-400 group-hover:bg-yellow-500 transition duration-200">
                <DownloadIcon className="text-black group-hover:text-white" />
              </span>
            </div>
          </button>
        </a>
      </div>
      <div className="border border-gray-700  mt-6 w-5/6 ml-6 lg:ml-32"></div>
      <div className="flex flex-col justify-center items-center mt-12">
        <span className="font-semibold text-customGray text-3xl">
          MY SKILLS
        </span>
      </div>
      <div className="flex flex-col lg:flex-row lg:ml-16 ml-4">
        <div className="flex flex-row lg:gap-48 gap-14 justify-start items-start mt-12 ml-12 lg:ml-56">
          <div className="flex flex-col items-center justify-center relative">
            <div className="relative inline-flex items-center justify-center">
              <CircularProgress
                variant="determinate"
                value={100}
                size={100}
                thickness={4}
                sx={{
                  color: "#bfbcbb",
                  position: "absolute",
                }}
              />
              <CircularProgress
                variant="determinate"
                value={90}
                size={100}
                thickness={4}
                sx={{
                  color: "yellow",
                }}
              />
              <div className="absolute flex items-center justify-center inset-0 text-lg font-semibold">
                90%
              </div>
            </div>
            <div className="mt-2 text-lg font-semibold">PYTHON</div>
          </div>

          <div className="flex flex-col items-center justify-center relative">
            <div className="relative inline-flex items-center justify-center">
              <CircularProgress
                variant="determinate"
                value={100}
                size={100}
                thickness={4}
                sx={{
                  color: "#bfbcbb",
                  position: "absolute",
                }}
              />
              <CircularProgress
                variant="determinate"
                value={85}
                size={100}
                thickness={4}
                sx={{
                  color: "yellow",
                }}
              />
              <div className="absolute flex items-center justify-center inset-0 text-lg font-semibold">
                85%
              </div>
            </div>
            <div className="mt-2 text-lg font-semibold">DJANGO</div>
          </div>
        </div>
        <div className="flex flex-row lg:gap-48 gap-14 justify-start items-start mt-12 ml-12 lg:ml-56">
          <div className="flex flex-col items-center justify-center relative">
            <div className="relative inline-flex items-center justify-center">
              <CircularProgress
                variant="determinate"
                value={100}
                size={100}
                thickness={4}
                sx={{
                  color: "#bfbcbb",
                  position: "absolute",
                }}
              />
              <CircularProgress
                variant="determinate"
                value={80}
                size={100}
                thickness={4}
                sx={{
                  color: "yellow",
                }}
              />
              <div className="absolute flex items-center justify-center inset-0 text-lg font-semibold">
                80%
              </div>
            </div>
            <div className="mt-2 text-lg font-semibold">JAVASCRIPT</div>
          </div>
          <div className="flex flex-col items-center justify-center relative">
            <div className="relative inline-flex items-center justify-center">
              <CircularProgress
                variant="determinate"
                value={100}
                size={100}
                thickness={4}
                sx={{
                  color: "#bfbcbb",
                  position: "absolute",
                }}
              />
              <CircularProgress
                variant="determinate"
                value={90}
                size={100}
                thickness={4}
                sx={{
                  color: "yellow",
                }}
              />
              <div className="absolute flex items-center justify-center inset-0 text-lg font-semibold">
                90%
              </div>
            </div>
            <div className="mt-2 text-lg font-semibold">REACT JS</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:ml-16 ml-4">
        <div className="flex flex-row lg:gap-48 gap-14 justify-start items-start mt-12 ml-12 lg:ml-56">
          <div className="flex flex-col items-center justify-center relative">
            <div className="relative inline-flex items-center justify-center">
              <CircularProgress
                variant="determinate"
                value={100}
                size={100}
                thickness={4}
                sx={{
                  color: "#bfbcbb",
                  position: "absolute",
                }}
              />
              <CircularProgress
                variant="determinate"
                value={80}
                size={100}
                thickness={4}
                sx={{
                  color: "yellow",
                }}
              />
              <div className="absolute flex items-center justify-center inset-0 text-lg font-semibold">
                80%
              </div>
            </div>
            <div className="mt-2 text-lg font-semibold">NEXT JS</div>
          </div>
          <div className="flex flex-col items-center justify-center relative">
            <div className="relative inline-flex items-center justify-center">
              <CircularProgress
                variant="determinate"
                value={100}
                size={100}
                thickness={4}
                sx={{
                  color: "#bfbcbb",
                  position: "absolute",
                }}
              />
              <CircularProgress
                variant="determinate"
                value={70}
                size={100}
                thickness={4}
                sx={{
                  color: "yellow",
                }}
              />
              <div className="absolute flex items-center justify-center inset-0 text-lg font-semibold">
                70%
              </div>
            </div>
            <div className="mt-2 text-lg font-semibold">NODE</div>
          </div>
        </div>
        <div className="flex flex-row lg:gap-48 gap-14 justify-start items-start mt-12 ml-12 lg:ml-56">
          <div className="flex flex-col items-center justify-center relative">
            <div className="relative inline-flex items-center justify-center">
              <CircularProgress
                variant="determinate"
                value={100}
                size={100}
                thickness={4}
                sx={{
                  color: "#bfbcbb",
                  position: "absolute",
                }}
              />
              <CircularProgress
                variant="determinate"
                value={90}
                size={100}
                thickness={4}
                sx={{
                  color: "yellow",
                }}
              />
              <div className="absolute flex items-center justify-center inset-0 text-lg font-semibold">
                90%
              </div>
            </div>
            <div className="mt-2 text-lg font-semibold">MYSQL</div>
          </div>
          <div className="flex flex-col items-center justify-center relative">
            <div className="relative inline-flex items-center justify-center">
              <CircularProgress
                variant="determinate"
                value={100}
                size={100}
                thickness={4}
                sx={{
                  color: "#bfbcbb",
                  position: "absolute",
                }}
              />
              <CircularProgress
                variant="determinate"
                value={75}
                size={100}
                thickness={4}
                sx={{
                  color: "yellow",
                }}
              />
              <div className="absolute flex items-center justify-center inset-0 text-lg font-semibold">
                75%
              </div>
            </div>
            <div className="mt-2 text-lg font-semibold">MONGODB</div>
          </div>
        </div>
      </div>
      <div className="border border-gray-700  mt-6 w-5/6 ml-6 lg:ml-32"></div>
      <div className="flex flex-col justify-center items-center mt-12">
        <span className="font-semibold text-customGray text-2xl lg:text-3xl">
          EXPERIENCE &amp; EDUCATION
        </span>
        <div className="px-6 mt-10">
          <div className="max-w-6xl mx-auto antialiased pt-4 grid lg:grid-cols-2 gap-16 relative">
            {/* Experience Section */}
            <div className="relative">
              {experienceContent.map((item, index) => (
                <div key={`experience-${index}`} className="mb-10 relative">
                  <div className="absolute top-0 left-0 w-px bg-blue-500 h-full"></div>
                  <div className="flex items-center mb-2 pl-6">
                    <div className="text-2xl mr-2">{item.icon}</div>
                    <h2 className="bg-gray-500 text-white rounded-full text-sm w-fit px-4 py-1">
                      {item.company}
                    </h2>
                  </div>
                  <div className="text-xl mb-2 pl-6">{item.tenure}</div>
                  <div className="text-lg font-semibold mb-2 pl-6">
                    {item.role}
                  </div>
                  <div className="text-sm prose prose-sm dark:prose-invert pl-6">
                    {item.description}
                  </div>
                  <div className="border-t border-gray-300 mt-4"></div>
                </div>
              ))}
            </div>

            {/* Education Section */}
            <div className="relative">
              {educationContent.map((item, index) => (
                <div key={`education-${index}`} className="mb-10 relative">
                  <div className="absolute top-0 left-0 w-px bg-blue-500 h-full"></div>
                  <div className="flex items-center mb-2 pl-6">
                    <div className="text-2xl mr-2">{item.icon}</div>
                    <h2 className="bg-gray-500 text-white rounded-full text-sm w-fit px-4 py-1 pl-6">
                      {item.institute}, {item.place}
                    </h2>
                  </div>
                  <div className="text-xl mb-2 pl-6">{item.tenure}</div>
                  <div className="text-lg font-semibold mb-2 pl-6">
                    {item.degree}
                  </div>
                  <div className="border-t border-gray-300 mt-4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
