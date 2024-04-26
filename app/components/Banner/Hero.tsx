"use client"
import React from "react";
import { Vortex } from "../ui/vortex";

export function Hero() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >

        <div className="mx-64">
        <h2 className="text-white text-2xl md:text-7xl font-bold text-left">
        L&apos;Agence de Growth Marketing efficace et vraiment performante.        </h2>
        <p className="text-white text-md md:text-2xl max-w-xl mt-6 text-left ">
        Growth Room est une agence d’experts en Growth Marketing. <br></br>Nous actionnons les leviers pertinents pour propulser votre croissance et dépasser vos objectifs d’acquisition.
        </p>

        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <button className="p-[3px] relative">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
    Lit up borders
  </div>
</button>
        </div>
      </Vortex>
    </div>
  );
}
