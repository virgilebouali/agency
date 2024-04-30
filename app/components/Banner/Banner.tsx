import Image from "next/image";
import { HeroParallaxDemo } from "./HeroParallax";
import { TypewriterEffectSmoothDemo } from "./TypeWriter";
import { WavyBackgroundDemo } from "./Waves";
import NewNav from "../Navbar/NewNav";
import { Hero } from "./Hero";
import MainNav from "../Navbar/MainNav";
import Divider from "../ui/divider";
import { LampDemo } from "./Lamp";

const Banner = () => {
  return (
    <main>
      <MainNav />
      <Hero />
      <div className="px-6 lg:px-8 bg-black">
        <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20">
          <HeroParallaxDemo />
        </div>
      </div>
    </main>
  );
};

export default Banner;
