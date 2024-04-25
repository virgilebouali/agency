import Image from "next/image";
import { HeroParallaxDemo } from "./HeroParallax";
import { TypewriterEffectSmoothDemo } from "./TypeWriter";
import { WavyBackgroundDemo } from "./Waves";
import Navbar from "../Navbar/Navbar";
import NewNav from "../Navbar/NewNav";


const Banner = () => {
    return (
        <main>

              <WavyBackgroundDemo />
            <div className="px-6 lg:px-8 bg-black">
                <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20">


                  
                  
                    <HeroParallaxDemo />
                </div>
            </div>
        </main>
    )
}

export default Banner;
