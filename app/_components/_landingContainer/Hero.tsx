import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  brandDarkBg,
  brandLightText,
  brandSecondaryBg,
  brandSecondaryBorder,
} from "../../_utils/colors";
import HeroR from "./HeroR";
import HeroL from "./HeroL";

const Hero = () => {
  return (
    <section className="flex flex-row items-center justify-center h-screen lg:w-full w-full max-w-[99vw] overflow-hidden">
      <div className="pb-48 lg:pb-20">
        <HeroR />
      </div>
      <div className="flex flex-col justify-between items-center z-10 mb-32 m">
        <div className="flex flex-col gap-[3px] text-center items-center justify-center">
          <h1 className="md:text-[30px] text-[28px] md:leading-[36px] font-medium uppercase lg:mb-6">
            First Ever
          </h1>
          <h1 className="lg:text-[48px] sm:text-[45px] text-[36px] lg:leading-[48px] leading-[36px] sm:leading-[45px] font-semibold w-72 lg:w-full">
            Decentralized Oracle Network
          </h1>
          <h1 className="lg:text-[48px] sm:text-[45px] text-[36px] lg:leading-[48px] leading-[36px] sm:leading-[45px] font-semibold">
            {" "}
            on Arweave
          </h1>
          <h2 className="md:text-[27px] md:leading-[36px] sm:leading-[27px] sm:text-[27px] text-[21px] leading-[21px] mt-6 lg:mb-0 mb-12 tracking-widest">
            Get ACCESS to LIMITLESS DATA
          </h2>
          <div className="flex sm:flex-row flex-col sm:gap-6 gap-6 lg:gap-3 items-center justify-between sm:text-[18px] text-[15px] py-[28px]">
            <a
              target="_blank"
              href="https://playground.0rbit.co/"
              className={`px-6 py-[6px] ${brandSecondaryBg} ${brandLightText} rounded-full hover:tracking-wider hover:opacity-75 hover:font-medium`}
            >
              Build With Us
            </a>
            <a
              target="_blank"
              href="https://discord.gg/JVSjqaKJgV"
              className={`px-6 py-[6px] bg-[#e3e5de] ${brandSecondaryBorder} text-orange border-[1px] rounded-full hover:tracking-wider hover:opacity-75 hover:font-medium`}
            >
              Join the Community
            </a>
          </div>
        </div>
        <div className="flex flex-col mt-8 absolute bottom-10 items-center justify-center font-light tracking-widest">
          <h3 className="pb-[39px]">Scroll Down to Discover</h3>
          <div className="flex flex-col items-center justify-center arrowDiv">
            <Image
              src="/icons/arrowDown.svg"
              alt="arrow"
              height={60}
              width={60}
              className=" arrow1"
            />
            <Image
              src="/icons/arrowDown.svg"
              alt="arrow"
              height={60}
              width={60}
              className="my-[-12px] arrow2"
            />
            <Image
              src="/icons/arrowDown.svg"
              alt="arrow"
              height={60}
              width={60}
              className="arrow3"
            />
          </div>
        </div>
      </div>
      <div className="pb-48 lg:pb-20">
        <HeroL />
      </div>
    </section>
  );
};

export default Hero;
