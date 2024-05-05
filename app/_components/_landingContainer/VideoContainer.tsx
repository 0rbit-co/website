"use client";
import {
  brandDarkBg,
  brandDarkText,
  brandLightBg,
  brandLightText,
  brandSecondaryText,
} from "@/app/_utils/colors";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const VideoContainer = () => {
  const [video, setVideo] = useState(false);

  const [isVisible, setVisible] = useState(false);
  const vidRef = useRef<HTMLDivElement>(null); // Specify the element type

  useEffect(() => {
    const currentElement = vidRef.current;
    if (currentElement) {
      // Check if the ref is attached to an element
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      });

      observer.observe(currentElement);

      // Cleanup function to disconnect the observer when the component unmounts
      return () => {
        observer.disconnect();
      };
    }
  }, []);
  console.log("isvis", isVisible);
  console.log("vid:", video);
  return (
    <>
      <section
        // onMouseEnter={() => {
        //   setVideo(true);
        // }}
        // onMouseLeave={() => {
        //   setVideo(false);
        // }}
        className={`snap flex flex-col lg:flex-row items-center justify-center 
        md:gap-9 gap-3 ${brandDarkText} rounded-3xl w-full 
        ${video ? "" : "xl:mr-[75px]"}`}
      >
        <div
          className="flex lg:hidden flex-row tracking-widest text-center font-medium
       md:text-[24px] md:leading-[36px] md:gap-6
       text-[18px] leading-[30px] gap-3"
        >
          <h3>KNOW</h3>
          <h3 className={`${brandSecondaryText} font-[Medium]`}>0RBIT</h3>
          <h3>BETTER</h3>
        </div>
        <iframe
          width="750"
          height="450"
          className={`${isVisible ? " ltrArchScroll " : " md:opacity-0"} 
          ${video ? " videoExpand " : "scale-100"} 
          xl:h-[315px] xl:w-[500px] 
          lg:h-[210px] lg:w-[360px]
          md:h-[240px] md:w-[390px]
          h-[165px] w-[300px]
          hover:scale-105 
          hover:cursor-pointer`}
          src="https://www.youtube.com/embed/7XIv9ZvcvPc?si=Qw5DlvEI71pWzR7e"
          title="YouTube video player"
          allowFullScreen
          allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <div
          className={`px-[1.8px] w-fit xl:h-[240px] h-[180px] ${brandDarkBg} hidden ${
            video ? " lg:hidden" : " lg:flex"
          }`}
        ></div>
        <div
          className={`${isVisible ? "rtlArchScroll " : "opacity-0 "} ${
            video ? "lg:hidden" : "lg:flex"
          } hidden lg:flex-col  flex-row text-center md:text-left font-semibold tracking-wider
       xl:text-[60px] xl:leading-[60px] lg:gap-6 
       text-[30px] leading-[36px] gap-3 
       sm:text-[36px] 
       `}
        >
          <h3>KNOW</h3>
          <h3 className={`${brandSecondaryText} font-[Regular]`}>0RBIT</h3>
          <h3>BETTER</h3>
        </div>
        <div
          ref={vidRef}
          className="bg-[#000000] z-50 absolute self-end md:block hidden opacity-0"
        >
          .
        </div>
      </section>
    </>
  );
};

export default VideoContainer;
