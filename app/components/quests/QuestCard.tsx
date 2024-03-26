import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { Anonymous_Pro } from "next/font/google";

const anp = Anonymous_Pro({ subsets: ["latin"], weight: ["400", "700"] });

interface QuestCardProps {
  num: any;
  name: any;
  linker: any;
  text: any;
  points: any;
}

const QuestCard = ({ num, name, linker, text, points }: QuestCardProps) => {
  return (
    <CardContainer>
      <CardBody
        className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#00000000] backdrop-blur-[2px] dark:border-[#A8A8A8] border-[0.5px] border-black/[0.1]  
        h-auto rounded-xl py-8 px-[33px]
      flex flex-col items-center justify-between gap-[27px]"
      >
        <CardItem
          as="div"
          translateZ="60"
          className={`flex items-center justify-center gap-3 ${anp.className} px-6 py-3
          sm:text-[57px] text-[39px] font-semibold text-neutral-500 dark:text-neutral-300 leading-[36px]
          tracking-wide lg:max-w-[330px] sm:max-w-[330px] max-w-[240px] w-full `}
        >
          {" "}
          {num == 1 && (
            <>
              <h2>$</h2>
              <Image
                src="/quest/q1Arrows.svg"
                height={150}
                width={60}
                alt="oracle pricefeed"
              />
              <h2 className="">0RBT</h2>
            </>
          )}
          {num == 2 && (
            <>
              <h2 className=" tracking-[21px] mr-[-24px]">NEWS</h2>
            </>
          )}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className={`${anp.className} sm:text-[15px] text-[12px] dark:text-neutral-300 tracking-wide
          lg:max-w-[330px] sm:max-w-[330px] max-w-[240px] md:px-[9px] px-[6px] py-[6px] leading-[21px] text-justify 
          border-[0.6px] border-[#E2B436] bg-[#cf893437] rounded-md mx-[9px]`}
        >
          {text}
        </CardItem>
        {/* <CardItem
          as="p"
          translateZ="60"
          className={`text-neutral-500 text-[12px] font-light tracking-wider 
          lg:max-w-[330px] sm:max-w-[330px] max-w-[240px] dark:text-neutral-300 mt-[-3px] px-[6px] py-[3px] rounded-md
          ${anp.className} hover:underline-offset-2 hover:underline hover:cursor-pointer hover:bg-[#cf893437]`}
        ></CardItem> */}
        <CardItem
          as="p"
          translateZ="60"
          className={`text-neutral-500  lg:max-w-[330px] sm:max-w-[330px] max-w-[240px] dark:text-neutral-300
          ${anp.className} 
          flex flex-col items-center`}
        >
          <Link
            className="hover:underline-offset-4 underline underline-offset-2 hover:cursor-pointer hover:tracking-wide
            sm:text-[24px] text-[18px] tracking-widest"
            href={linker}
          >
            CHECK THE REPO
          </Link>
          <Link
            className="text-[12px] font-light tracking-wider px-[6px] py-[2px]
            hover:cursor-pointer hover:bg-[#cf893457] bg-[#cf8934c3]"
            href="https://github.com/0rbit-co/quest"
          >
            Submit PR Here
          </Link>
        </CardItem>
        <CardItem
          translateZ="50"
          className="sm:text-2xl text-[18px] font-bold text-neutral-600 dark:text-[#f1f1f1] flex justify-between items-center w-full"
        >
          <h6 className="tracking-wider font-extralight text-[#CF8934]">
            {name}
          </h6>
          <span
            className={`bg-[#cf893425] font-extrabold border-[0.6px] border-[#CF8934] rounded-full 
          px-[9px] py-[6px] sm:text-[18px] text-[12px] leading-3
          animate-shimmer bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]   transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
          ${anp.className}`}
          >
            +{points} 0P
          </span>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default QuestCard;
