import {
  brandDarkBg,
  brandDarkText,
  brandLightText,
} from "@/app/_utils/colors";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDribbble, FaGithub, FaTwitter } from "react-icons/fa6";
interface TeamProps {
  pname: string;
  github?: string;
  dribble?: string;
  twitter: string;
  info: string;
  last: boolean;
}

const TeamCard: React.FC<TeamProps> = ({
  pname,
  github,
  dribble,
  twitter,
  info,
  last,
}) => {
  return (
    <div
      className={`teamWave text-center flex flex-col justify-start items-center
      md:w-[100%] rounded-full ${brandDarkBg} ${brandLightText} w-fit h-fit min-h-full max-h-fit
      xl:gap-[6px] lg:gap-[3px] gap-[6px]
      xl:pt-3 xl:pb-[30px] xl:px-3 
      lg:pt-[9px] lg:pb-[18px] lg:px-[9px]
      md:pt-[12px] md:pb-[21px] md;px-[12px]
      pt-[9px] pb-[18px] px-[9px]
      `}
    >
      <Image
        src={`/team/${pname}.png`}
        height={150}
        width={150}
        alt={pname}
        className="rounded-full 
        justify-self-start
        xl:w-[135px] xl:h-[198px] xl:mb-[6.6px]
        lg:w-[90px] lg:h-[132px] lg:mb-[6px]
        md:w-[135px] md:h-[198px] md:mb-[6.6px]
        w-[75px] h-[105px] mb-[1px]"
      />
      <h2
        className="xl:text-[18px] xl:leading-[18px] 
        lg:text-[12px] lg:leading-[12px]
        md:text-[18px] md:leading-[18px]
        text-[12px] leading-[12px]
       capitalize "
      >
        {pname}
      </h2>
      <h4
        className="  font-light
      xl:text-[12px] xl:leading-[15px] xl:max-w-[135px]
      lg:text-[8.1px] lg:leading-[10.5px] lg:max-w-[75px]
      md:text-[12px] md:leading-[15px] md:max-w-[135px]
      text-[8.1px] leading-[10.5px] max-w-[60px]"
      >
        {info}
      </h4>
      <div className=" flex flex-row xl:gap-3 gap-[9px] md:pt-3 pt-[3px]">
        <Link href={twitter}>
          <Image
            src="/icons/twitterTeam.svg"
            alt="x"
            height={30}
            width={30}
            className="xl:w-[15px] xl:h-[15px]
            lg:w-3 lg:h-3 
            md:w-[15px] md:h-[15px]
            w-3 h-3 
            hover:opacity-75 hover:scale-90 hover:cursor-pointer"
          />
        </Link>
        {github && (
          <Link href={github}>
            <Image
              src="/icons/discTeam.svg"
              alt="x"
              height={30}
              width={30}
              className="xl:w-[15px] xl:h-[15px]
            lg:w-3 lg:h-3 w-3 h-3 
            md:w-[15px] md:h-[15px] hover:opacity-75 hover:scale-90 hover:cursor-pointer"
            />
          </Link>
        )}
        {dribble && (
          <Link href={dribble}>
            <FaDribbble
              className={`${brandLightText} hover:opacity-75 hover:scale-90 hover:cursor-pointer 
              xl:w-[15px] xl:h-[15px]
              lg:w-3 lg:h-3
              w-3 h-3 
              md:w-[15px] md:h-[15px]`}
            />{" "}
          </Link>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
