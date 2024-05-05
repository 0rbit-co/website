"use client";
import React, { useEffect, useRef, useState } from "react";
import ArchDiagram from "../ArchDiagram";
import { brandSecondaryText } from "@/app/_utils/colors";

const Architechture = () => {
  const [isVisible, setVisible] = useState(false);
  const lhsRef = useRef<HTMLDivElement>(null); // Specify the element type

  useEffect(() => {
    const currentElement = lhsRef.current;
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
  return (
    <div
      className="flex flex-col lg:gap-6 
    md:h-fit h-full
    items-center justify-center"
    >
      <div
        className={` ${
          isVisible ? "ttbArchScroll " : " md:opacity-0 "
        } flex flex-col gap-0 items-center justify-center text-center sm:mb-0 mb-[-60px]`}
      >
        <h2
          className="uppercase tracking-wider font-semibold 
        xl:text-[45px] xl:leading-[57px] xl:max-w-[1300px] 
        lg:text-[30px] lg:leading-[33px] lg:max-w-[900px]
        md:text-[30px] md:leading-[39px] md:max-w-[540px]
        text-[21px] max-w-[300px]"
        >
          Getting any data from Internet to AO Process within seconds !
        </h2>
      </div>
      <div
        className="flex md:flex-row flex-col items-center justify-between 
        xl:mt-[0] lg:mt-[-60px] 
        lg:mr-0 md:mr-[-60px]
        md:gap-0 gap-6
      xl:max-w-[1300px] lg:max-w-[900px] md:max-w-[690px] max-w-[320px]"
      >
        <div
          ref={lhsRef}
          className={`${
            isVisible ? "ltrArchScroll " : " md:opacity-0 "
          } md:flex hidden flex-col gap-0 items-start justify-center 
        xl:max-w-[522px] lg:max-w-[470px]
        xl:mr-0 lg:mr-[-90px] md:mr-[-150px]
        xl:tracking-[1.5px] tracking-[0]
        xl:text-[27px] xl:leading-[33px] 
        lg:text-[21px] lg:leading-[27px] font-medium  text-left `}
        >
          <h3 className="pt-[24px]">
            <span className={`font-[Regular] ${brandSecondaryText}`}>
              0rbit
            </span>{" "}
            provides any data from the web to an ao process <br />
            by utilizing the power of ao, and{" "}
            <span className={`font-[Regular] ${brandSecondaryText}`}>
              0rbit
            </span>{" "}
            nodes.
          </h3>
          <h3 className="pt-[24px]">
            The user sends a message to the{" "}
            <span className={`font-[Regular] ${brandSecondaryText}`}>
              0rbit
            </span>{" "}
            ao,{" "}
            <span className={`font-[Regular] ${brandSecondaryText}`}>
              0rbit
            </span>{" "}
            nodes fetches the data and the user process receives the data.
          </h3>
        </div>
        <ArchDiagram />
        <div
          className={`${
            isVisible ? "fadeInCTAScroll " : " md:opacity-0 "
          } flex md:hidden flex-col items-center justify-center 
         px-3 sm:mt-0 mt-[-90px]
        text-[15px] leading-[18px] text-center font-semibold `}
        >
          <h3 className="pt-[24px] max-w-[225px]">
            <span className={`font-[Regular] ${brandSecondaryText}`}>
              0rbit
            </span>{" "}
            provides any data from the web to an ao process by utilizing the
            power of ao, and{" "}
            <span className={`font-[Regular] ${brandSecondaryText}`}>
              0rbit
            </span>{" "}
            nodes.
          </h3>
          <h3 className="pt-[24px] max-w-[240px]">
            The user sends a message to the{" "}
            <span className={`font-[Regular] ${brandSecondaryText}`}>
              0rbit
            </span>{" "}
            ao,{" "}
            <span className={`font-[Regular] ${brandSecondaryText}`}>
              0rbit
            </span>{" "}
            nodes fetch the data and the user process receives the data.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Architechture;
