"use client";
import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import {
  brandDarkText,
  brandSecondaryBg,
  brandSecondaryText,
} from "@/app/_utils/colors";
import "../../_styles/anims.css";

const Stats: React.FC = () => {
  const [counter, setCounter] = useState<number>(70000);
  useEffect(() => {
    const fetchCounter = async () => {
      setTimeout(() => {
        setCounter(70000);
      }, 1000);
    };

    fetchCounter();
  }, []);
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
  console.log("isvis", isVisible);
  return (
    <section className="flex flex-col items-center justify-center gap-3 max-w-[1800px] w-[100vw]">
      <div
        ref={lhsRef}
        className={`${
          isVisible ? "statLine" : "w-0"
        } self-start md:py-[3px] py-[1.5px] ${brandSecondaryBg}`}
      ></div>
      <div
        className={`${
          isVisible ? "fadeInStatScroll " : " opacity-0 "
        } flex flex-row items-center justify-center 
      xl:gap-9
      gap-[9px]`}
      >
        <h1
          className={`
        xl:text-[96px]
        lg:text-[81px] 
        md:text-[75px] md:tracking-[6px]
        text-[27px]
        leading-none 
        text-center text-orange ${brandSecondaryText} font-[Medium] 
        w-fit md:pl-[15px] pl-[9px]`}
        >
          <CountUp
            end={counter}
            duration={3}
            separator=","
            enableScrollSpy={true}
          />
          +
        </h1>
        <h4
          className={`bttScroll ${brandDarkText}

      xl:text-[36px]
      lg:text-[30px] 
      md:text-[24px]
      text-[12px] 
      font-semibold text-secondary `}
        >
          REQUESTS ALREADY MADE
        </h4>
      </div>
      <div
        className={`${
          isVisible ? "statLine" : "w-0"
        } self-end md:py-[3px] py-[1.5px] ${brandSecondaryBg}`}
      ></div>
    </section>
  );
};

export default Stats;
