import React from "react";
import FloatingNav from "@/components/ui/floating-navbar";
import {
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
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];
export default function Page() {
  return (
    <>

      <div className=" h-[20rem] md:h-[30rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <FloatingNav navItems={navItems} />

        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Projects
        </p>
      </div>
      <section className="p-4 md:p-8">
        <div className="md:max-w-7xl mx-auto">
          <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-8 gap-4 max-w-7xl mx-auto'>

        <Link href={'/projects/object-classifier'}>
        <div className='row-span-2 col-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-8 dark:bg-black  bg-white  justify-end flex flex-col  min-h-fit'
              style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(/project-covers/object-classifier.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className='group-hover/bento:translate-x-2 transition duration-200'>

                <div className='font-sans font-bold  mt-28 text-xl truncate'>Object classifier with Tensorflow.Js</div>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm">Real-time object detection using your webcam with TensorFlow.js and COCO-SSD model.</p>

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
              </div>
            </div>
        </Link>



          </div>
        </div>
      </section>
    </>

  );
}
