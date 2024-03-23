"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import Http from "@/app/components/Http";
import QuestTitle from "./QuestTitle";
import Link from "next/link";

interface ServicesProps {
  title: string;
  description: string;
  url: string;
  imgUri: string;
  points: string;
}

function QuestsCard({
  title,
  description,
  url,
  imgUri,
  points,
}: ServicesProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  h-auto rounded-xl p-6 border  ">
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm font-light tracking-wide lg:max-w-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 md:text-xs text-[12px] lg:max-w-sm max-w-sm mt-2 dark:text-neutral-300 bg-[#ffffff1e] md:px-[27px] px-[27px] py-4 border border-[#FFD700] rounded-md"
        >
          <h4 className=" leading-6 tracking-wider ">
            Submit PR at:{" "}
            <span>
              <Link
                href={url.split("with the")[0]}
                className="hover:underline bg-[#000000] py-[3px] px-[6px] rounded-xl border-[1px] border-[#dadada4b]"
              >
                {url.split("with the")[0]}
              </Link>
            </span>
            <span>{url.split("with the")[1]}</span>
            <span>add codebase with demo link in Description!</span>
          </h4>
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-xs lg:max-w-sm max-w-sm mt-2 dark:text-neutral-300 w-full text-right
          hover:underline"
        >
          <Link href="https://github.com/0rbit-co/quest">know more...</Link>
        </CardItem>
        {/* <CardItem translateZ="100" className="w-full mt-4"> */}
        {/* <Image
            src="/images/3d-card/1.jpg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          /> */}
        {/* <Http imgUrl={imgUri} /> */}
        {/* </CardItem> */}
        <div className="flex justify-between items-center mt-[21px]">
          <CardItem
            translateZ="50"
            className="md:text-2xl text-[24px] font-bold text-neutral-600 dark:text-[#f1f1f1] flex justify-between items-center w-full"
          >
            <h6 className="tracking-wider font-normal">{title}</h6>
            <span className="bg-[#ffd9002c] font-extrabold border-[1px] border-[#FFD700] rounded-full px-[9px] py-[3px] md:text-[12px] text-[9px]">
              + {points.split(" ")[1]} OP
            </span>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default QuestsCard;
