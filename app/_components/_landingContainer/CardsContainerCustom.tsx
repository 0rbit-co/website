"use client";
import React, { useState } from "react";
import Card from "./Card";
import { blogData } from "@/app/_utils/blogs";
import Image from "next/image";
import { brandDarkBg, brandDarkText } from "@/app/_utils/colors";

interface BlogData {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

const CardsContainerCustom = () => {
  const [main, setMain] = useState(1);
  return (
    <section className="fadeInScroll flex flex-col items-center justify-center">
      <h2
        className="uppercase font-semibold pb-0 text-center
      xl:text-[39px] 
      lg:text-[33px]
      md:text-[27px] md:mb-0
      text-[18px] mb-[-30px]"
      >
        Check out our recent blogs
      </h2>
      <section
        className=" flex flex-row xxs:px-6 pl-1 items-center justify-center w-full
      xl:min-h-[390px]
      lg:min-h-[300px]
      md:min-h-[270px] 
      min-h-[240px] "
      >
        <button
          disabled={main == 0 ? true : false}
          onClick={() => {
            setMain(main - 1);
          }}
          className={`${brandDarkBg} p-2 h-fit rounded-full w-fit 
          block absolute 
          place-self-end md:place-self-center 
          mr-[120px] md:mr-[660px] xl:mr-[900px]`}
        >
          <Image
            src="/icons/arrowLeftSecondary.svg"
            alt="prev"
            height={15}
            width={15}
            className="md:w-[18px] md:h-[18px] w-[13.5px] h-[13.5px]"
          />
        </button>
        <div
          className="flex flex-row gap-6 items-center absolute md:h-full h-[210px] mx-12 xl:translate-x-0 
        xl:w-[330px] 
        lg:w-[240px] 
        md:w-[240px]
        w-[135px]"
        >
          {blogData.map((item: BlogData, index: number) => (
            <div
              className={`absolute ${
                index == main
                  ? "blur-0 translate-x-[0%] z-10 scale-100"
                  : index == main - 1 || index == main + 1
                  ? `blur-[3px] scale-75 ${
                      index < main ? "translate-x-[-75%]" : "translate-x-[75%]"
                    }`
                  : index < main
                  ? "translate-x-[-75%] scale-50 opacity-0 -z-10"
                  : "translate-x-[75%] scale-50 opacity-0 -z-10"
              }`}
              key={item.id}
            >
              <Card
                image={item.image}
                title={item.title}
                description={item.description}
                url={item.link}
              />
            </div>
          ))}
        </div>
        {/* <div className="flex md:hidden flex-row gap-6 items-center absolute lg:w-[330px] w-[240px] h-full mx-12 cardlg:translate-x-0 ">
          {blogData.map((item: BlogData, index: number) => (
            <div
              className={`absolute ${
                index == main
                  ? "blur-0 translate-x-[0%] z-10 scale-100"
                  : index == main - 1 || index == main + 1
                  ? `blur-[3px] scale-50 ${
                      index < main ? "translate-x-[-50%]" : "translate-x-[50%]"
                    }`
                  : index < main
                  ? "translate-x-[-30%] scale-50 opacity-0 -z-10"
                  : "translate-x-[30%] scale-50 opacity-0 -z-10"
              }`}
              key={item.id}
            >
              <Card
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div> */}
        <button
          disabled={main == blogData.length - 1 ? true : false}
          onClick={() => {
            console.log("clicked");
            setMain(main + 1);
          }}
          className={`${brandDarkBg} p-2 h-fit rounded-full w-fit 
          block absolute 
          place-self-end md:place-self-center 
          ml-[120px] md:ml-[660px] xl:ml-[900px]`}
        >
          <Image
            src="/icons/arrowRightSecondary.svg"
            alt="prev"
            height={15}
            width={15}
            className="md:w-[18px] md:h-[18px] w-[13.5px] h-[13.5px]"
          />
        </button>
      </section>
    </section>
  );
};

export default CardsContainerCustom;
