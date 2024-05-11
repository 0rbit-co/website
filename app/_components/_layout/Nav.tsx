"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  brandDarkBg,
  brandDarkBorder,
  brandDarkText,
  brandLightBg,
  brandLightText,
} from "@/app/_utils/colors";
import Link from "next/link";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import Hamburger from "./Hamburger";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname().split("/");
  const validPaths = ["home", "team", "quests"];
  const pageTitle = validPaths.includes(path[1]?.toLowerCase()) ? path[1] : "Home"; 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        onClick={toggleMenu}
        className={`flex flex-row sm:items-center items-start justify-between md:h-[9vh] md:bg-[#E3E5DE]
        md:px-[39px] px-[15px] py-[9px] fixed w-full z-40 ${brandLightText} max-w-[1800px] backdrop-blur-[3px]
        ${
          isOpen ? "h-[100vh] bg-[#25291ca4] z-50 " : "h-[9vh] bg-[#e3e5dee5]"
        }`}
      >
        <Link href="/" className="hover:cursor-pointer">
          <Image
            alt="logo"
            src="/logos/recLight.svg"
            height={90}
            width={150}
            className={`md:w-[120px] md:h-[54px] w-[90px] h-[45px] md:block hidden`}
          />
          <Image
            alt="logo"
            src={`/logos/${isOpen ? "recDark" : "recLight"}.svg`}
            height={90}
            width={150}
            className={`md:w-[120px] md:h-[54px] w-[90px] h-[45px] md:hidden block`}
          />
        </Link>
        <div className="flex sm:flex-row flex-col sm:gap-4 gap-3 items-center justify-between sm:text-[18px] text-[15px] md:mt-0 mt-[9px]">
          <div
            className="sm:hidden flex flex-row items-center justify-between gap-3 bg-[#444444] z-50 sm:px-[36px] px-[21px] py-[3px] rounded-lg hover:cursor-pointer hover:tracking-widest"
            onClick={toggleMenu}
          >
            <Image
              alt="arrleft"
              src="/icons/arrowLeft.svg"
              height={12}
              width={12}
              className="rl sm:w-[15px] sm:h-[15px] w-[12px] h-[12px]"
            />
            <h6 className=" capitalize">{path[1] ? path[1] : "Home"}</h6>
          </div>
          <Link
            href={path[1] == "quests" ? "/" : "/quests"}
            className={`${brandDarkText} ${brandDarkBorder} border-[1px] 
            w-full text-center sm:px-[18px] py-[2px] px-[9px]  sm:bg-none bg-[#E3E5DE] backdrop-blur-[3px]
            rounded-lg transition-transform duration-500 ease-in-out ${
              isOpen
                ? "translate-x-0"
                : "sm:translate-x-[360px] translate-x-[150%]"
            }`}
          >
            {" "}
            <button className="hover:cursor-pointer hover:opacity-75 hover:scale-105">
              {path[1] == "quests" ? "Home" : "Quests"}
            </button>
          </Link>
          <Link
            href="https://docs.0rbit.co/"
            className={`${brandDarkText} ${brandDarkBorder} border-[1px] 
            w-full text-center sm:px-[18px] py-[2px] px-[9px]  sm:bg-none bg-[#E3E5DE] backdrop-blur-[3px]
            rounded-lg transition-transform duration-500 ease-in-out ${
              isOpen
                ? "translate-x-0"
                : "sm:translate-x-[240px] translate-x-[250%]"
            }`}
          >
            <button className="hover:cursor-pointer hover:opacity-75 hover:tracking-widest">
              Docs
            </button>
          </Link>
          <Link
            href={path[1] == "team" ? "/" : "/team"}
            className={`${brandDarkText} ${brandDarkBorder} border-[1px] 
            w-full text-center sm:px-[18px] py-[2px] px-[9px]  sm:bg-none bg-[#E3E5DE] backdrop-blur-[3px]
             rounded-lg transition-transform duration-500 ease-in-out ${
               isOpen
                 ? "translate-x-0"
                 : "sm:translate-x-[120px] translate-x-[350%]"
             }`}
          >
            <button className="hover:cursor-pointer hover:opacity-75 hover:tracking-widest">
              {path[1] == "team" ? "Home" : "Team"}
            </button>
          </Link>
          <div
            className="hidden sm:flex flex-row items-center justify-between gap-3 bg-[#444444] z-50 px-[36px] py-[3px] rounded-lg hover:cursor-pointer hover:tracking-widest"
            onClick={toggleMenu}
          >
            <Image
              alt="arrleft"
              src="/icons/arrowLeft.svg"
              height={12}
              width={12}
              className="rl"
            />
            <h6 className="capitalize">{pageTitle}</h6>
          </div>
        </div>
      </nav>
      {/* <nav
        className={` flex items-center justify-between px-4 py-2 lg:px-8 lg:py-4 fixed w-full z-10 ${brandLightText}`}
      >
        <div className="flex items-center">
          <Image
            alt="logo"
            src="logo.svg"
            height={70}
            width={100}
            className="px-2 backdrop-blur-lg bg-[#ffffff49] rounded-3xl"
          />
        </div>

        <div
          className="place-self-end"
          onClick={() => {
            toggleMenu();
          }}
        >
          <Hamburger isOpen={isOpen} />
        </div>
        <div
          onClick={() => {
            toggleMenu();
            console.log("clickedout");
          }}
          className={`${
            isOpen
              ? "translate-x-0"
              : "sm:translate-x-[360px] translate-x-[150%]"
          } w-[100vw] h-[100vh] absolute`}
        ></div>
        <div
          className={`${
            isOpen
              ? "translate-x-0"
              : "sm:translate-x-[360px] translate-x-[150%]"
          } place-self-end flex flex-col items-center justify-between bg-[#25291cbd] backdrop-blur-sm top-0 right-0 fixed px-6 py-6 rounded-sm h-[100vh] gap-3 w-[100%]`}
        >
          <div className="flex flex-row w-full items-center justify-between">
            <Image
              alt="logo"
              src="/logos/recDark.svg"
              height={70}
              width={100}
              className="w-[90px] h-[60px]"
            />
            <div
              className=""
              onClick={() => {
                toggleMenu();
              }}
            >
              <Hamburger isOpen={isOpen} />
            </div>
          </div>
          <div className="grid grid-flow-row place-self-end gap-[21px] text-left text-lg font-light">
            <Link
              href={"/"}
              onClick={() => {
                toggleMenu();
              }}
              className=" rounded-sm text-[33px]"
            >
              Home
            </Link>
            <div className=" text-[33px]">
              <Link
                href={"/ourServices"}
                onClick={() => {
                  toggleMenu();
                }}
              >
                <h6>Docs</h6>
              </Link>
            </div>
            <div className=" text-[33px]">
              <Link
                href={"/ourServices"}
                onClick={() => {
                  toggleMenu();
                }}
              >
                <h6>Docs</h6>
              </Link>
            </div>
            <div className=" text-[33px]">
              <Link
                href={"/ourServices"}
                onClick={() => {
                  toggleMenu();
                }}
              >
                <h6>Docs</h6>
              </Link>
            </div>
            <div className=" text-[33px]">
              <Link
                href={"/ourServices"}
                onClick={() => {
                  toggleMenu();
                }}
              >
                <h6>Docs</h6>
              </Link>
            </div>
          </div>
          <div className="place-self-center justify-self-end grid grid-flow-row gap-3 w-fit col-span-1">
            <div className="flex flex-row gap-6 items-center justify-center">
              <Link href="https://twitter.com/0rbitco">
                <FaTwitter className={` ${brandLightText} w-6 h-6`} />
              </Link>
              <Link href="https://discord.gg/JVSjqaKJgV">
                <FaDiscord className={` ${brandLightText} w-6 h-6`} />
              </Link>
              <Link href="https://github.com/0rbit-co">
                <TbBrandGithubFilled className={` ${brandLightText} w-6 h-6`} />
              </Link>
            </div>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default Nav;
