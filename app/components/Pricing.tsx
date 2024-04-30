import React from 'react'
import Image from "next/image";
import { WavyBackground } from './ui/wavy-background';

const Pricing = () => {
  return (

    <section className="relative"> {/* BG Image */}
        <WavyBackground className=" pb-40 max-w-full">

 {/* Container */} <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32 mt-24"> {/* Component */} <div className="flex flex-col items-center"> {/* Heading Content */} <div className="mb-8 max-w-3xl text-center md:mb-12 lg:mb-16">
            <h2 className="mb-4 mt-6 text-4xl font-bold text-white md:text-5xl">Faisons de votre site web une réussite</h2>
            <div className="mx-auto mt-4 max-w-[528px]">
              <p className="text-white">Découvrez nos formules de création de site web</p>
            </div>
          </div> {/* Pricing Cards */} <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3 md:gap-4"> {/* Pricing Card */} <div className="mx-auto flex w-full max-w-[416px] flex-col items-start rounded-md bg-[#131313] p-8 text-white">
              <div className="mb-4 rounded-lg bg-[#cf8f1329] px-5 py-2 text-[#cf8f13]">
                <p className="font-bold">One-Page</p>
              </div>
              <p className="mb-6 font-light text-white md:mb-10 lg:mb-12">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit</p>
              <h2 className="my-6 pb-8 text-3xl font-bold md:text-5xl">499€<span className="text-sm font-light text-white"></span>
              </h2>
              <a href="#" className="mb-5 inline-block w-full  bg-midnightblue text-xl rounded-lg bg-neutral-900 px-6 py-4 text-center font-bold text-white transition hover:border-black  lg:mb-8">C&apos;est parti !</a>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Conception responsive</p>
              </div>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Section de présentation</p>
              </div>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Portfolio visuel</p>
              </div>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Contact simplifié</p>
              </div>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Optimisation SEO</p>
              </div>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Formation client</p>
              </div>
            </div> {/* Pricing Card */} <div className="mx-auto flex w-full max-w-[416px] flex-col items-start rounded-md bg-[#131313] p-8 text-white">
              <div className="mb-4 rounded-lg bg-[#0caeb929] px-5 py-2 text-[#0caeb9]">
                <p className="font-bold">Site Web 5-7 Pages</p>
              </div>
              <p className="mb-6 font-light text-white md:mb-10 lg:mb-12">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit</p>
              <h2 className="my-6 pb-8 text-3xl font-bold md:text-5xl">799€<span className="text-sm font-light text-white"></span>
              </h2>
              <a href="#" className="mb-5 inline-block w-full rounded-lg bg-blue-500 text-xl px-6 py-4 text-center font-bold transition hover:border-black hover:bg-neutral-900 hover:text-white md:mb-6 lg:mb-8">C&apos;est parti !</a>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Conception responsive</p>
              </div>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Section de présentation</p>
              </div>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Portfolio visuel</p>
              </div>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Contact simplifié</p>
              </div>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Optimisation SEO</p>
              </div>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Formation client</p>
              </div>
            </div> {/* Pricing Card */} <div className="mx-auto flex w-full max-w-[416px] flex-col items-start rounded-md bg-[#131313] p-8 text-white">
              <div className="mb-4 rounded-lg bg-[#c013cf29] px-5 py-2 text-[#c013cf]">
                <p className="font-bold">Premium</p>
              </div>
              <p className="mb-6  text-white font-light  md:mb-10 lg:mb-12">Conception web complète et stratégie de marketing numérique</p>
              <h2 className="my-6 pb-8 text-3xl font-bold md:text-5xl">Sur devis<span className="text-sm font-light text-white"></span>
              </h2>
              <a href="#" className="mb-5 inline-block w-full rounded-lg bg-neutral-900 bg-midnightblue text-xl px-6 py-4 text-center font-bold text-white transition hover:border-black  lg:mb-8">C&apos;est parti !</a>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Conception responsive</p>
              </div>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Section de présentation</p>
              </div>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Portfolio visuel</p>
              </div>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Contact simplifié</p>
              </div>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Optimisation SEO</p>
              </div>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Formation client</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </WavyBackground>
    </section>
  )
}

export default Pricing