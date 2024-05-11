import {
  brandDarkBg,
  brandDarkBorder,
  brandDarkText,
  brandLightBg,
  brandLightText,
  brandSecondaryText,
} from "@/app/_utils/colors";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface QuestProps {
  qname: string;
  imag: string;
  info: string;
  repo: string;
  submission: string;
  pts: string;
  last: boolean;
}

const QuestCard: React.FC<QuestProps> = ({
  qname,
  imag,
  info,
  repo,
  submission,
  pts,
  last,
}) => {
  return (
    <div
      className={`rounded-xl ${brandDarkBorder} ${brandDarkBg} border-[0.3px] ${brandLightText}
      ${
        last ? "md:col-span-2 md:place-self-center md:w-[50%]" : ""
      } hover:translate-y-[-24px]
      flex flex-col items-center justify-center xl:gap-5 lg:gap-[15px] md:gap-[10.5px] gap-[7.5px] text-center lg:w-[100%]
      xl:p-4 md:p-3 p-3`}
    >
      <div
        className={`${brandLightBg} w-full flex items-center justify-center rounded-md 
        shadow-[inset_0px_3.14px_3.9px_0px_rgba(0,_0,_0,_0.25),inset_0px_-3.14px_3.9px_0px_RGBA(0,_0,_0,_0.25)] 
        `}
      >
        <Image
          src={`/quests/${imag}.svg`}
          alt={qname}
          width={120}
          height={120}
          className="p-3 
          xl:w-[120px] xl:h-[120px]
          lg:w-[90px] lg:h-[90px]
          md:w-[90px] md:h-[90px]
          w-[75px] h-[75px]"
        />
      </div>
      <h2
        className="text-center font-semibold pb-[2px] 
      xl:text-[27px] xl:leading-[27px] 
      md:text-[21px] md:leading-[24px] "
      >
        {qname}
      </h2>
      <div
        className=" text-center font-normal tracking-wide
      xl:max-w-[240px] xl:text-[15px] xl:leading-[18px]
      md:max-w-[195px] md:text-[12px] md:leading-[12px]
      max-w-[150px] text-[9px] leading-[9px]"
      >
        {info}
      </div>
      <div
        className={`${brandSecondaryText} flex flex-row gap-1 items-center justify-center`}
      >
        <Link
          href={repo}
          className="text-[18px] hover:underline flex flex-row items-center justify-center gap-1"
        >
          <div
            className={` ${brandSecondaryText} text-center xl:text-[15px] md:text-[12px] text-[10.5px] font-semibold`}
          >
            Check out the Repo
          </div>
          <Image
            width={8}
            height={8}
            src="/icons/arrSecondary.svg"
            alt="arrow"
          />
        </Link>
      </div>
      <div
        className={`${brandSecondaryText} font-[Medium] flex flex-row items-center w-full xl:text-[15px] lg:text-[12px] text-[10.5px]`}
      >
        {submission && (
          <Link
            href={submission}
            className="hover:underline font-bold w-full text-start"
          >
            Submit PR
          </Link>
        )}
        <Link
          href="https://www.ao.link/entity/BUhZLMwQ6yZHguLtJYA5lLUa9LQzLXMXRfaq9FVcPJc"
          className={` tracking-tighter xl:text-[18px] lg:text-[12px] md:text-[10.5px] font-bold w-full text-right hover:underline`}
        >
          +{pts} $0RBT
        </Link>
      </div>
    </div>
  );
};

export default QuestCard;
