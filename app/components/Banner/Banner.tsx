import Image from "next/image";
import { HeroParallaxDemo } from "./HeroParallax";
import { TypewriterEffectSmoothDemo } from "./TypeWriter";


const Banner = () => {
    return (
        <main>
            <div className="px-6 lg:px-8">
                <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
                    <div className="text-left">
                        <div className="flex flex-col">
                        <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl  lg:text-6xl md:4px lh-56 mx-12 mt-12">
                            L``&apos;``agence Web 360° qui vous accompagne vers la <span className="text-blue-500"> performance</span>

                        </h1>
                     
                        </div>
                        <p className="mt-6 text-lg leading-8 text-gray-800 mx-12">
                        Crafters est une agence d’experts en Web Marketing et Webdesign. <br></br> Nous actionnons les leviers pertinents pour propulser votre croissance et dépasser vos objectifs d’acquisition.                        </p>
                    </div>


                    <div className="text-center mt-5">
                        <button type="button" className='text-15px ml-4 mt-2 text-white transition duration-150 ease-in-out hover:text-blue-500 hover:bg-white font-medium py-5 px-16 border border-lightgrey leafbutton bg-blue'>
                            Prendre rendez-vous avec un expert
                        </button>
                       
                        
                    </div>

                    <Image src={'/assets/banner/dashboard.svg'} alt="banner-image" width={1200} height={598} className="hidden" />
                    <HeroParallaxDemo />
                </div>
            </div>
        </main>
    )
}

export default Banner;
