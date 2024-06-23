
import React from "react";
import GlobeDemo from "./globedemo";
import FlipWords from './ui/flip-words.tsx';
const Globe = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    fill="none"
    className="mt-4 md:m-0 w-[50%] md:w-[35%] h-[50%] md:h-[35%] animate-spin-slow"
  >
    <circle cx="50" cy="50" r="49" stroke="white" stroke-width="1" />
    <path
      d="M50 10.25C50 6.53858 44.4614 3 37.5 3C29.6414 3 22 6.53858 22 10.25C22 10.265 21.9996 10.2803 21.9992 10.2946C21.9989 10.3088 21.9985 10.3231 21.998 10.3373C21.9976 10.3514 21.9971 10.3656 21.9966 10.3798C21.9961 10.394 21.9956 10.4082 21.9951 10.4224C21.9946 10.4366 21.9941 10.4508 21.9936 10.465C21.9931 10.4792 21.9926 10.4934 21.9921 10.5076C21.9916 10.5218 21.9911 10.536 21.9906 10.5502C21.9901 10.5644 21.9896 10.5786 21.9891 10.5928C21.9887 10.6069 21.9882 10.6211 21.9876 10.6353C21.987 10.6495 21.9865 10.6637 21.986 10.6779C21.9855 10.692 21.985 10.7062 21.9845 10.7204C21.9841 10.7346 21.9836 10.7489 21.9831 10.7632C21.9826 10.7775 21.9821 10.7919 21.9816 10.8063C21.9811 10.8207 21.9806 10.8351 21.98 10.85"
      stroke="white"
      stroke-width="1"
    />
  </svg>
);

export const Hero = () => {
  const words = ["robust", "powerfull", "better", "cute", "beautiful", "modern"];
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-1   lg:grid-cols-[auto_1fr] h-[90vh] bg-gradient-to-b from-black to-transparent">
      <div className="flex flex-col h-screen lg:max-w-xl mx-10 lg:ml-24  justify-center  lg:text-left">
        <h1 className="text-4xl font-bold tracking-wide m-1 p-0 text-white md:text-5xl">
          <p className="text-4xl font-normal tracking-wide">
           
            Build
            <FlipWords words={words} duration={3000} className="" /> <br />
            webapps with <strong>Atharva Arbat</strong> 
          </p>
        </h1>
          
        
        <p className="mt-2 italic font-extralight   text-2xl text-gray-300 dark:text-gray-500">
          I'm seriously good at web development.
        </p>
        {/* <div className="flex mt-8 space-x-4">
          <span className="flex items-center space-x-2">
            <SiJavascript className="h-6 w-6 text-white" />
            <span className="text-lg text-gray-300 dark:text-gray-500">Javascript</span>
          </span>
          <span className="flex items-center space-x-2">
            <SiReact className="h-6 w-6 text-white" />
            <span className="text-lg text-gray-300 dark:text-gray-500">React</span>
          </span>
          <span className="flex items-center space-x-2">
            <SiNextdotjs className="h-6 w-6 text-white" />
            <span className="text-lg text-gray-300 dark:text-gray-500">Next.js</span>
          </span>
          <span className="flex items-center space-x-2">
            <SiTailwindcss className="h-6 w-6 text-white" />
            <span className="text-lg text-gray-300 dark:text-gray-500">Tailwind</span>
          </span>
          <span className="flex items-center space-x-2">
            <SiTypescript className="h-6 w-6 text-white" />
            <span className="text-lg text-gray-300 dark:text-gray-500">Typescript</span>
          </span>
          <span className="flex items-center space-x-2">
            <SiNodedotjs className="h-6 w-6 text-white" />
            <span className="text-lg text-gray-300 dark:text-gray-500">Node.js</span>
          </span>
          <span className="flex items-center space-x-2">
            <SiMongodb className="h-6 w-6 text-white" />
            <span className="text-lg text-gray-300 dark:text-gray-500">MongoDB</span>
          </span>
          <span className="flex items-center space-x-2">
            <SiPython className="h-6 w-6 text-white" />
            <span className="text-lg text-gray-300 dark:text-gray-500">Python</span>
          </span>
        </div> */}
      </div>
      <div className="mt-8 lg:block md:mt-0 md:ml-8 h-full hidden">
        <GlobeDemo className="w-full aspect-square" />
      </div>
    </div>
  )

};

export default Hero;
