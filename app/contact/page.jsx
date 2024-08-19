"use client";
import { useRef, useState } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import emailjs from "@emailjs/browser";
import { Typography } from "@mui/material";

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const form = useRef();

  const handleNameChange = (event) => {
    const updatedValue = event.target.value.replace(/[^A-Za-z]/g, "");
    setName(updatedValue);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleEmailChange = (event) => {
    const updatedValue = event.target.value.replace(
      /[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$,/g,
      ""
    );
    setEmail(updatedValue);
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setDone(false);
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setDone(false);
      setError("Invalid email address.");
      return;
    }
    emailjs
      .sendForm(
        "service_bd6omkv",
        "template_ext8tjb",
        form.current,
        "H2xDnK8Bw8V0cPJpp"
      )
      .then(
        (result) => {
          setDone(true);
          setName("");
          setEmail("");
          setMessage("");
          setError("");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white p-6 relative overflow-hidden page-slide-down">
        <Navbar />
        <div className="flex flex-row gap-2 justify-center font-extrabold border border-gray-700 m-4 bg-gray-700 lg:border-none lg:bg-transparent">
          <span className="text-customGray text-3xl lg:text-5xl font-extrabold">
            GET IN
          </span>
          <span className="text-yellow-400 text-3xl lg:text-5xl font-extrabold">
            TOUCH
          </span>
        </div>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-10 flex flex-col items-center justify-center">
          <BackgroundGradient
            containerClassName="md:w-1/2 w-4/5"
            className="rounded-[22px] p-4 bg-gray-200 dark:bg-zinc-900"
          >
            <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-lg bg-white dark:bg-black">
              <form className="my-8" onSubmit={handleSubmit} ref={form}>
                <LabelInputContainer className="mb-8">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Tyler"
                    type="text"
                    onInput={handleNameChange}
                    value={name}
                  />
                </LabelInputContainer>
                <LabelInputContainer className="mb-8">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    placeholder="projectmayhem@fc.com"
                    type="email"
                    onInput={handleEmailChange}
                    value={email}
                  />
                </LabelInputContainer>
                <LabelInputContainer className="mb-8">
                  <Label htmlFor="email">Message</Label>
                  <Input
                    id="message"
                    placeholder="What do you want to talk about?"
                    type="text"
                    onInput={handleMessageChange}
                    value={message}
                  />
                </LabelInputContainer>

                <button className="px-8 py-2 bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
                  Submit
                </button>
              </form>
              {error && (
                <Typography className="text-red-500 text-2xl mb-4">
                  {error}
                </Typography>
              )}
              <Typography className="text-2xl ">
                {done && "Your Message Is Shared."}
              </Typography>
            </div>
          </BackgroundGradient>
        </div>
      </div>
    </>
  );
};

export default Contact;
