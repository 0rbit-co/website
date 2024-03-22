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
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-md  lg:max-w-lg max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 md:text-sm text-[12px] lg:max-w-lg max-w-sm mt-2 dark:text-neutral-300 bg-[#ffffff1e] md:px-10 px-[27px] py-4 border border-[#FFD700] rounded-md"
        >
          <h4>
            Submit PR at: <span>{url}</span>
          </h4>
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-xs lg:max-w-lg max-w-sm mt-2 dark:text-neutral-300 w-full text-right
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
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ="50"
            className="md:text-3xl text-[24px] font-bold text-neutral-600 dark:text-white flex justify-between items-center w-full"
          >
            <h6>{title}</h6>
            <span className="bg-[#ffd9002c] border-[1px] border-[#FFD700] rounded-full px-[9px] py-[3px] md:text-[15px] text-[12px]">
              + {points.split(" ")[1]} OP
            </span>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default QuestsCard;
