import React from "react";
import { Footer, QuestCard } from "../_components";
import { brandDarkText, brandSecondaryText } from "../_utils/colors";
import { quests } from "../_utils/quests";

const QuestsPage = () => {
  return (
    <main
      className={`min-w-[100vw] max-w-[1800px] flex flex-col items-center justify-center ${brandDarkText} 
      sm:px-[18px] px-[12px] pt-[10vh] min-h-[93vh] lg:pb-[30px]`}
    >
      <h1
        className="uppercase tracking-wider font-medium 
      xl:text-[60px] xl:leading-[66px]
      lg:text-[39px] lg:leading-[54px]
      md:text-[33px] md:leading-[39px]
      text-[27px] leading-[42px]"
      >
        Quests
      </h1>
      <h3
        className="pb-12 font-medium tracking-wide text-center md:px-0 px-3
      xl:text-[24px] xl:leading-[27px] md:text-[18px] md:leading-[21px] text-[18px] leading-[21px]"
      >
        <span className={`font-[Medium] tracking-wide`}>0rbit</span> quests are
        challenges that will help you learn about
        <br />
        <span className={`font-[Medium] tracking-wide`}>0rbit</span> and ao and
        earn some{" "}
        <span className={`${brandSecondaryText} font-[Regular] tracking-wide`}>
          $0RBT
        </span>{" "}
        along the way.{" "}
      </h3>
      <div
        className="lg:flex lg:flex-row md:grid md:grid-cols-2 flex flex-col lg:gap-9 md:gap-4 gap-[33px] items-center justify-center
      lg:pb-0 pb-[30px]"
      >
        {quests.map((quest, key) => {
          return (
            <QuestCard
              qname={quest.qname}
              info={quest.info}
              imag={quest.imag}
              repo={quest.repo}
              submission={quest.submission}
              pts={quest.pts}
              last={
                key + 1 == quests.length && quests.length % 2 != 0
                  ? true
                  : false
              }
            />
          );
        })}
      </div>
      <Footer />
    </main>
  );
};

export default QuestsPage;
