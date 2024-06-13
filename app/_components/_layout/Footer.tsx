"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { brandDarkText, brandSecondaryText } from "../../_utils/colors";
import { FaTwitter } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaDiscord } from "react-icons/fa";
import arrDark from "@/public/icons/linkArrow.svg";
import { usePathname } from "next/navigation";

const event = ({ action, category, label, value }: any) => {
  (window as any).gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

const Footer = () => {
  const path = usePathname();

  const handleLinkClick = (label: string, value: number) => {
    event({
      action: "click_footer_link",
      category: "Navigation",
      label,
      value,
    });
  };

  return (
    <footer
      className={`flex flex-col md:flex-row gap-1 md:gap-3 md:items-center items-center justify-between bottom-0 
       py-[12px] md:px-[30px] px-[9px] w-[100vw] max-w-[1800px]
       border-t-[1.2px] border-[#000000]
   ${
     path == "/quests"
       ? "lg:absolute "
       : `${path == "/team" ? "lg:absolute " : ""}`
   }
 `}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center md:justify-end md:items-end md:gap-[9px]">
          <Image
            width={60}
            height={60}
            src="/logos/recLight.svg"
            alt="logo"
            className="md:block hidden"
          />
          <Image
            width={90}
            height={90}
            src="/logos/recLight.svg"
            alt="logo"
            className="md:hidden w-[60px]"
          />
          <h4
            className={`${brandSecondaryText} md:text-[12px] text-[10px] font-semibold tracking-tighter font-[Regular] pb-[3px]`}
          >
            &copy; 2024 0rbit
          </h4>
      </div>
      <div className="flex md:hidden flex-row md:gap-6 gap-5 items-center justify-center mt-1 md:mt-0">
        <Link
          href="https://twitter.com/0rbitco"
          onClick={() => handleLinkClick("Twitter", 1)}
        >
          <FaTwitter
            className={`${brandDarkText} hover:opacity-75 md:w-6 md:h-6 w-[20px] h-[20px]`}
          />
        </Link>
        <Link
          href="https://discord.gg/JVSjqaKJgV"
          onClick={() => handleLinkClick("Discord", 2)}
        >
          <FaDiscord
            className={`${brandDarkText} hover:opacity-75 md:w-6 md:h-6 w-[20px] h-[20px]`}
          />
        </Link>
        <Link
          href="https://github.com/0rbit-co"
          onClick={() => handleLinkClick("GitHub", 3)}
        >
          <TbBrandGithubFilled
            className={`${brandDarkText} hover:opacity-75 md:w-6 md:h-6 w-[20px] h-[20px]`}
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <div
          className="flex flex-row items-center justify-center sm:gap-6 gap-3 mr-4 font-semibold mt-2
      md:text-[15px] text-[12px]"
        >
          <Link
            href="https://docs.0rbit.co/"
            className={`flex flex-row gap-[3px] text-md hover:text-[#EB8F44] hover:tracking-wider hover:underline`}
            onClick={() => handleLinkClick("Docs", 4)}
          >
            <h4>Docs</h4>
            <Image width={8} height={8} src={arrDark} alt="arrow" />
          </Link>
          <Link
            href="https://playground.0rbit.co/"
            className={`flex flex-row gap-[3px] text-md hover:text-[#EB8F44] hover:tracking-wider hover:underline`}
            onClick={() => handleLinkClick("Playground", 5)}
          >
            <h4>Playground</h4>
            <Image width={8} height={8} src={arrDark} alt="arrow" />
          </Link>
          <Link
            href="/"
            className={`flex flex-row gap-[3px] text-md hover:text-[#EB8F44] hover:tracking-wider hover:underline`}
            onClick={() => handleLinkClick("Home", 6)}
          >
            <h4>Home</h4>
            <Image width={8} height={8} src={arrDark} alt="arrow" />
          </Link>
          <Link
            href="/quests"
            className={`flex flex-row gap-[3px] text-md hover:text-[#EB8F44] hover:tracking-wider hover:underline`}
            onClick={() => handleLinkClick("Quest", 7)}
          >
            <h4>Quest</h4>
            <Image width={8} height={8} src={arrDark} alt="arrow" />
          </Link>
          <Link
            href="/team"
            className={`flex flex-row gap-[3px] text-md hover:text-[#EB8F44] hover:tracking-wider hover:underline`}
            onClick={() => handleLinkClick("Team", 8)}
          >
            <h4>Team</h4>
            <Image width={8} height={8} src={arrDark} alt="arrow" />
          </Link>
        </div>
      </div>
      <div className="md:flex hidden flex-row md:gap-6 gap-[6px] items-center justify-center">
        <Link
          href="https://twitter.com/0rbitco"
          onClick={() => handleLinkClick("Twitter", 9)}
        >
          <FaTwitter
            className={`${brandDarkText} hover:opacity-75 md:w-6 md:h-6 w-[15px] h-[15px]`}
          />
        </Link>
        <Link
          href="https://discord.gg/JVSjqaKJgV"
          onClick={() => handleLinkClick("Discord", 10)}
        >
          <FaDiscord
            className={`${brandDarkText} hover:opacity-75 md:w-6 md:h-6 w-[15px] h-[15px]`}
          />
        </Link>
        <Link
          href="https://github.com/0rbit-co"
          onClick={() => handleLinkClick("GitHub", 11)}
        >
          <TbBrandGithubFilled
            className={`${brandDarkText} hover:opacity-75 md:w-6 md:h-6 w-[15px] h-[15px]`}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
