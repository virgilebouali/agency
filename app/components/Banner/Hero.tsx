"use client"
import React from "react";
import { Vortex } from "../ui/vortex";
import Link from "next/link";
import { LampDemo } from "./Lamp";
import { LampContainer } from "../ui/lamp";
import { SparklesCore } from "../ui/Sparkles";
import { Spotlight } from "../ui/spotlight";
import { Tooltip } from "../Tooltip";

export function Hero() {
  return (
    <div className="justify-center items-center text-center lg:mx-12">
       <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 lg:flex sm:hidden"
        fill="blue"
      />
        <div className="mx-6 lg:mx-56 items-center">
        <h2 className="text-white text-4xl  md:text-7xl font-bold text-left">
        L&apos;Agence de <span className="text-blue-500">Growth Marketing</span>  efficace et vraiment performante.        </h2>
        <p className="text-white text-md md:text-2xl max-w-xl mt-6 text-left font-medium ">
        Growth Room est une agence d’experts en Growth Marketing. <br></br>Nous actionnons les leviers pertinents pour propulser votre croissance et dépasser vos objectifs d’acquisition.
        </p>
        <Tooltip />

        </div>
        <div className="block sm:flex-row  items-left gap-4 mt-2">
        <button className="p-[3px] relative">
        <Link href="#_" className="relative inline-flex  p-4 px-6 py-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
<span className="absolute inset-0 w-full h-full bg-gradient-to-br from-midnightblue via-blue-500 to-pink-700"></span>
<span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-midnightblue rounded-full opacity-30 group-hover:rotate-90 ease"></span>
<span className="relative text-white text-md items-center lg:text-xl font-semibold">Demander un devis</span>
</Link>
</button>
        </div>
    </div>
  );
}
