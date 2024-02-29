import React from "react";
import { cn } from "@/app/utils/cn";
import { Spotlight } from "@/app/components/ui/Spotlight";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import logo from "@/public/svg/main-unit.svg";

function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-48 md:pt-0">
        <div className="mb-4">
          <Image
            src={logo}
            alt="main-logo"
            width={100}
            height={100}
            className="mx-auto lg:w-72"
          />
        </div>
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          First ever Decentralised <br /> Oracle on Arweave.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Build with Permanent Data
        </p>
        <div className="flex items-center justify-center mt-4 gap-8">
          <a href="https://github.com/0rbit-co">
            <button className="inline-flex gap-4 h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <FaGithub />
              Github
            </button>
          </a>
          <a href="https://twitter.com/0rbitco">
            <button className="inline-flex gap-4 h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <FaXTwitter />
              Twitter
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SpotlightPreview;
