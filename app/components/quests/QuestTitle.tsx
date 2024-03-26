"use client";
import React from "react";
import { SparklesCore } from "@/app/components/ui/sparkles";

interface QuestTitleProps {
  title: string;
}

function QuestTitle({ title }: QuestTitleProps) {
  return (
    <div className="mt-0 lg:mt-20 w-full bg-black flex flex-col items-start justify-start overflow-hidden rounded-md">
      <h1 className="md:text-xl text-3xl lg:text-xl font-bold text-start text-white relative z-20">
        {title}
      </h1>
      <div className="w-[40rem] h-10 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}

export default QuestTitle;
