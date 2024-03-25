import React from "react";
import SpotlightPreview from "../components/SpotlightPreview";
import FloatingNavDemo from "../components/Navbar";
import { Spotlight } from "../components/ui/Spotlight";
import SparklesPreview from "../components/SparklesPreview";
import Link from "next/link";
import Footer from "../components/Footer";
import QuestsCall from "../components/quests/QuestsCall";
import Image from "next/image";

const QuestsPage = () => {
  return (
    <div className="min-h-[100vh] flex flex-col items-center">
      {" "}
      <FloatingNavDemo />
      <div className="">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
      </div>
      <SparklesPreview title="Quests" />
      {/* <h2 className="text-[18px] text-[#FFD700]  text-center mt-[21px]">
        Note: Before picking up the quest please get yourself familiar with
        <Link href="https://cookbook_ao.arweave.dev/welcome/index.html">
          https://cookbook_ao.arweave.dev/welcome/index.html
        </Link>{" "}
        and then Join{" "}
        <span className="bg-[#ffffff17] py-[3px] px-[6px] rounded-sm text-[#eeeeee]">
          Quest
        </span>{" "}
        channel and there pick up the quest and submit using the command
        mentioned in the Url.
      </h2> */}
      <QuestsCall />
      <Image
        src="/quest/questStage.svg"
        alt="quests oracle"
        className="z-[-10] md:mt-[-21px] mt-[-12px] w-full"
        height={300}
        width={900}
      />
      <div className="bottom-0 my-[18px] w-full md:absolute px-6">
        <Footer />
      </div>
    </div>
  );
};

export default QuestsPage;
