import Image from "next/image";
import React from "react";
import QuestCard from "./QuestCard";

const QuestsCall = () => {
  return (
    <section className="flex md:flex-row md:gap-0 gap-6 flex-col items-center justify-evenly w-full">
      <QuestCard
        num="1"
        linker="https://github.com/0rbit-co/quest/blob/main/price-feed-bot.md"
        name="Price Feed Bot"
        text="Create a Bot that provides price feed for token(s)."
        points="200000"
      />
      <QuestCard
        num="2"
        linker="https://github.com/0rbit-co/quest/blob/main/news-feed-bot.md"
        name="News Feed Bot"
        text="Create a Cron-bot that will post the latest news every 4 hours."
        points="300000"
      />
    </section>
  );
};

export default QuestsCall;
