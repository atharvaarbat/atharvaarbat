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

            <div className="h-[35rem]  w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute z-10 h-full grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mt-40">
                    <div className="p-4">
                        <p className="text-2xl sm:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-8 pb-4">
                            Object Classifier with Tensorflow and NextJs
                        </p>
                        <p className="text-stone-400">
                            The Object Classifier project uses a combination of TensorFlow.js, COCO-SSD model, React, and Tailwind CSS to detect and classify objects in real-time using a webcam. This documentation will guide you through the setup, code structure, and key functionalities of the project.
                        </p>
                        <div className="flex items-center justify-start -space-x-2 mt-4">
                            <div className="bg-black border border-zinc-700 rounded-full aspect-square h-10 p-2">
                                <Image src="/tech/tensorflow.svg" alt="HTML" width={30} height={30} />
                            </div>
                            <div className="bg-black border border-zinc-700 rounded-full aspect-square h-10 p-2">
                                <Image src="/tech/nextjs.svg" alt="HTML" width={30} height={30} />
                            </div>
                            <div className="bg-black border border-zinc-700 rounded-full aspect-square h-10 p-2">
                                <Image src="/tech/tailwindcss.svg" alt="HTML" width={30} height={30} />
                            </div>

                        </div>
                        <div className="flex gap-4 my-6">
                            <Link href={'https://live-object-classifier-tensorflow.vercel.app/'} target="_blank">
                                <button className="flex gap-2 items-center px-6 py-2 rounded-full border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                                    <ExternalLink size={15} />   Live Demo
                                </button>

                            </Link>
                            <Link href={'https://github.com/atharvaarbat/Live-Object-classifier-tensorflow'} target="_blank">
                                <button className="flex gap-2 items-center px-6 py-2 rounded-full border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                                    <Github size={15} />   Github
                                </button>

                            </Link>
                        </div>
                    </div>
                    <div className="p-4">
                        <img src="/project-covers/object-classifier.jpg" className="rounded-3xl" />
                    </div>

                </div>

                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            </div>

        </>

    );
}
