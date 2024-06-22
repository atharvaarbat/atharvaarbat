
import FloatingNav from "../components/ui/floating-navbar";
import { HomeIcon, MessageCircle, User2Icon } from "lucide-react";
import ThemeSwitch from "./theme";
import Grid from "@/components/Grid";
import AuroraBackgroundDemo from "@/components/AuroraBg";
import Hero from "@/components/hero";
// import {BackgroundBeams} from "@/components/ui/background-beams";
const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <User2Icon className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: (
      <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <AuroraBackgroundDemo>
          <Hero />
         
        {/* <BackgroundBeams /> */}
        <Grid/>
        </AuroraBackgroundDemo>
      </div>
    </main>
  );
}


