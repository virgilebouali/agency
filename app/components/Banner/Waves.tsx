"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";
import Image from "next/image";
import { Tooltip } from "../Tooltip";
export function WavyBackgroundDemo() {
  return (
    
    <WavyBackground className="max-w-4xl mx-auto pb-40">

      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
      L&apos;agence Web & Web Marketing efficace et vraiment performante.      </p>
      <p className="text-base md:text-lg  text-white font-normal inter-var text-center mt-12">
      Growth Room est une agence d’experts en Growth Marketing. <br></br> Nous actionnons les leviers pertinents pour propulser votre croissance et dépasser vos objectifs d’acquisition.      </p>

    </WavyBackground>
  );
}
