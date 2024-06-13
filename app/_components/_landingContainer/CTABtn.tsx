"use client";
import { brandLightText, brandSecondaryText } from "@/app/_utils/colors";
import React from "react";

const event = ({ action, category, label, value }: any) => {
  (window as any).gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

const CTABtn = () => {
  return (
    <a 
      href="https://docs.0rbit.co/"
      onClick={() => event({
        action: 'click_cta',
        category: 'CTA',
        label: 'Check the Docs',
      })}
    >
      <div
        className="fadeInCTAScroll bg-[linear-gradient(0deg,_#9aa083,_#25291C)] p-[0.9px]
    shadow-[3px_4.5px_6px_0px_#1a202c] rounded-[12px] hover:opacity-75"
      >
        <button
          className={`px-[27px] py-3 
          rounded-[12px] ${brandLightText} text-[12px] 
        hover:opacity-75 hover:tracking-wide hover:px-[21px] hover:cursor-pointer`}
          style={{
            backgroundImage: `url('/ctabg.svg')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundClip: "padding-box",
          }}
        >
          Want to dive deeper? 
          <span className={`${brandSecondaryText}`}>Check the Docs!</span>
        </button>
      </div>
    </a>
  );
};

export default CTABtn;