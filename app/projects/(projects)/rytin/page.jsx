import React from "react";
import FloatingNav from "@/components/ui/floating-navbar";
import {
    ExternalLink,
    Github,
    HomeIcon,
    MessageCircle,
    TestTube2,
    TextSelect,
    User2Icon,
} from "lucide-react";
import Image from "next/image";
import { AnimatedTooltip } from '@/components/ui/animamted-tooltip'
import Link from "next/link";
const navItems = [
    {
        name: "Home",
        link: "/",
        icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
        name: "Projects",
        link: "/projects",
        icon: <TestTube2 className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
        name: "Resume",
        link: "/about",
        icon: <TextSelect className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
        name: "Contact",
        link: "/contact",
        icon: (
            <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
    },
];

export default function Page() {
    return (
        <>
            <FloatingNav navItems={navItems} />

            <div className="h-[55rem] md:h-[35rem]  w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute z-10 h-full grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mt-40">
                    <div className="p-4">
                        <p className="text-2xl sm:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-8 pb-4">
                            Rytin - Blocknote (Notebook Manager)
                        </p>
                        <p className="text-stone-400">
                            The Notebook Company is designed to provide users with a powerful yet user-friendly platform for note-taking and sharing. Whether you're a student, professional, or anyone in need of organized note management, our application is built to cater to your needs.                        </p>
                        <div className="flex items-center justify-start -space-x-2 mt-4">

                            <div className="bg-black border border-zinc-700 rounded-full aspect-square h-10 p-2">
                                <Image src="/tech/nextjs.svg" alt="HTML" width={30} height={30} />
                            </div>
                            <div className="bg-black border border-zinc-700 rounded-full aspect-square h-10 p-2">
                                <Image src="/tech/mongodb.svg" alt="HTML" width={30} height={30} />
                            </div>
                            <div className="bg-black border border-zinc-700 rounded-full aspect-square h-10 p-2">
                                <Image src="/tech/tailwindcss.svg" alt="HTML" width={30} height={30} />
                            </div>
                            <div className="bg-black border border-zinc-700 rounded-full aspect-square h-10 p-2">
                                <Image src="/tech/clerk.png" alt="HTML" width={30} height={30} />
                            </div>

                        </div>
                        <div className="flex gap-4 my-6">
                            <Link href={'https://the-notebook-company.vercel.app/'} target="_blank">
                                <button className="flex gap-2 items-center px-6 py-2 rounded-full border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                                    <ExternalLink size={15} />   Live Demo
                                </button>

                            </Link>
                            <Link href={'https://github.com/atharvaarbat/The-Notebook-Company'} target="_blank">
                                <button className="flex gap-2 items-center px-6 py-2 rounded-full border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                                    <Github size={15} />   Github
                                </button>

                            </Link>
                        </div>
                    </div>
                    <div className="p-4">
                        <img src="/project-covers/rytin.jpeg" className="rounded-3xl" />
                    </div>

                </div>

                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            </div>
            <div className="w-full max-w-7xl mx-auto p-4">
                <p className="text-xl sm:text-2xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-8 pb-4">
                    Tech Stack
                </p>
                <p className="ml-4">
                    <p className="text-lg sm:text-xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-8 pb-4">
                        Frontend
                    </p>
                    <div className="flex flex-col ml-4">
                        <ul className="list-disc list-inside flex flex-col gap-2">
                            <li>Next.js: Framework for server-side rendering and static web applications.</li>
                            <li>React: Library for building user interfaces.</li>
                            <li>TailwindCSS: Utility-first CSS framework for rapid UI development.</li>
                            <li>@nextui-org/react: Modern and beautiful UI components library.</li>
                            <li>lucide-react: Icon library for React applications.</li>
                        </ul>
                    </div>

                </p>
                <p className="ml-4">
                    <p className="text-lg sm:text-xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-8 pb-4">
                        Backend
                    </p>
                    <div className="flex flex-col ml-4">
                        <ul className="list-disc list-inside flex flex-col gap-2">

                            <li>Node.js: JavaScript runtime for building scalable network applications.</li>
                            <li>Express.js: Web framework for Node.js.</li>
                            <li>MongoDB: NoSQL database for scalable and high-performance data storage.</li>
                            <li>Mongoose: ODM for MongoDB.</li>
                            <li>Clerk: Authentication solution for managing user accounts.</li>
                        </ul>
                    </div>

                </p>
            </div>
        </>

    );
}
