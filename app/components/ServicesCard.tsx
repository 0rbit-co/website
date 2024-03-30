"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import Http from "@/app/components/Http";

interface ServicesProps {
  title: string;
  description: string;
  imgUri: string;
}

function ServicesCard({ title, description, imgUri }: ServicesProps) {
  return (
    <article>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {description}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            {/* <Image
            src="/images/3d-card/1.jpg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          /> */}
            <Http imgUrl={imgUri} />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {title}
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </article>
  );
}

export default ServicesCard;
