import React from "react";
import {
  brandDarkBg,
  brandLightBorder,
  brandLightText,
  brandSecondaryText,
} from "../../_utils/colors";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

interface CardProps {
  image: string;
  title: string;
  description: string;
  url: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, url }) => {
  return (
    <section
      className={` bg-[linear-gradient(0deg,_#9aa083,_#25291C)] p-[0.9px]
      h-full max-h-[360px] xl:rounded-3xl md:rounded-2xl rounded-lg shadow-[3px_4.5px_6px_0px_#1a202c]
      xl:max-w-[330px] xl:w-[330px] 
      lg:max-w-[240px] lg:w-[240px]
      md:max-w-[240px] md:w-[240px]
      max-w-[135px] w-[135px]`}
    >
      <div
        className={`relative flex flex-col items-center justify-between  ${brandDarkBg}
        xl:rounded-3xl xl:gap-3
        lg:rounded-2xl rounded-lg md:gap-[6px] gap-[3px] px-[0.6px] md:py-[6px] py-[3px]`}
        style={{
          backgroundImage: `url('/cardbg.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundClip: "padding-box",
        }}
      >
        <Image
          src={image}
          alt="cover"
          width={300}
          height={150}
          className="w-full rounded-[30px] py-3 px-3.5"
        />
        <p
          className={`text-center text-[#f1f1f1]  pb-[3px]
          xl:text-[15px] xl:max-w-[240px] xl:leading-[16.5px] xl:h-[90px]
          lg:text-[12px] lg:max-w-[195px] lg:leading-[13.5px] lg:h-[66px]
          md:text-[12px] md:max-w-[195px] md:leading-[13.5px] md:h-[66px]
          text-[6.9px] max-w-[105px] leading-[7.5px] h-[33px]`}
        >
          {description.slice(0, 154)}...
        </p>
        <a href={url}>
        <div
          className={`lg:text-[12px] md:text-[10.5px] text-[6px] text-center ${brandSecondaryText} font-normal 
        flex items-center justify-center gap-[1px] pt-2 hover:underline pb-[3px]`}
        >
          Read More <GoArrowUpRight />
        </div>
        </a>
      </div>
    </section>
  );
};

export default Card;
