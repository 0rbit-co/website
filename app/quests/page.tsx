import React from "react";
import SpotlightPreview from "../components/SpotlightPreview";
import FloatingNavDemo from "../components/Navbar";
import { Spotlight } from "../components/ui/Spotlight";
import QuestsCall from "../components/quests/QuestsCall";
import SparklesPreview from "../components/SparklesPreview";
import Link from "next/link";
import Footer from "../components/Footer";

const QuestsPage = () => {
  return (
    <div className="px-20 min-h-[100vh]">
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
      <div className="bottom-0 my-[18px]">
        <Footer />
      </div>
    </div>
  );
};

export default QuestsPage;
