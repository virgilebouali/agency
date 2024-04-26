"use client"
import React from "react";
import { Vortex } from "../ui/vortex";
import Link from "next/link";

export function Hero() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden -z-50">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >

        <div className="mx-64 -z-40">
        <h2 className="text-white text-2xl md:text-7xl font-bold text-left">
        L&apos;Agence de <span className="text-blue-500">Growth Marketing</span>  efficace et vraiment performante.        </h2>
        <p className="text-white text-md md:text-2xl max-w-xl mt-6 text-left font-medium ">
        Growth Room est une agence d’experts en Growth Marketing. <br></br>Nous actionnons les leviers pertinents pour propulser votre croissance et dépasser vos objectifs d’acquisition.
        </p>

        </div>
        <div className="flex flex-col sm:flex-row  gap-4 mt-6">
        <button className="p-[3px] relative">
        <Link href="#_" className="relative inline-flex  p-4 px-5 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
<span className="absolute inset-0 w-full h-full bg-gradient-to-br from-midnightblue via-blue-500 to-pink-700"></span>
<span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-midnightblue rounded-full opacity-30 group-hover:rotate-90 ease"></span>
<span className="relative text-white text-md">Parler avec un expert Crafters</span>
</Link>
</button>
        </div>
      </Vortex>
    </div>
  );
}
