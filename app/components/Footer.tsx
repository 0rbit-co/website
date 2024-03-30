import React from "react";
import mainLogo from "@/public/svg/main-unit.svg";
import midSize from "@/public/svg/mid-size.svg";
import unitIcon from "@/public/svg/unit-icon.svg";
import Image from "next/image";
import { RxDiscordLogo } from "react-icons/rx";
import { RiTwitterXLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="sm:mt-32 mt-6 lg:m-6 px-12">
      <div className="flex sm:flex-row flex-col justify-between items-center sm:gap-0 gap-3">
        <Image
          src="/svg/main-unit.svg"
          alt="main-logo"
          width={100}
          height={100}
        />

        <div className="flex justify-center sm:mt-6 text-[#b97340] text-xs">
          © 2024 0rbit.
        </div>
        <div className="flex items-center gap-4">
          <a href="https://discord.gg/6mNSBSVC4r">
            <button>
              <RxDiscordLogo className="w-6 h-6 hover:w-7 hover:h-7 text-[#f1f1f1] hover:opacity-75" />
            </button>
          </a>
          <a href="https://twitter.com/0rbitco">
            <button>
              <RiTwitterXLine className="w-6 h-6 hover:w-7 hover:h-7 text-[#f1f1f1] hover:opacity-75" />
            </button>
          </a>
          <a href="https://github.com/0rbit-co">
            <button>
              <FaGithub className="w-6 h-6 hover:w-7 hover:h-7 text-[#f1f1f1] hover:opacity-75" />
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
