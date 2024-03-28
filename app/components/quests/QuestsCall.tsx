import Image from "next/image";
import React from "react";
import QuestCard from "./QuestCard";

const QuestsCall = () => {
  return (
    <div className="flex md:flex-row md:gap-0 gap-6 flex-col items-center justify-evenly w-full">
      <QuestCard
        num="1"
        linker="https://github.com/0rbit-co/quest/blob/main/price-feed-bot.md"
        name="Price Feed Bot"
        text="Create a Bot that provides price feed for token(s)."
        points="200.000"
      />
      <QuestCard
        num="2"
        linker="https://github.com/0rbit-co/quest/blob/main/news-feed-bot.md"
        name="News Feed Bot"
        text="Create a Cron-bot that will post the latest news every 4 hours."
        points="300.000"
      />
      <QuestCard
        num="3"
        linker="https://github.com/0rbit-co/quest/blob/main/better-idea.md"
        name="BetterIDEa"
        text="Create an ao process using BetterIdea (with functionality)"
        points="50.000"
      />
    </div>
  );
};

export default QuestsCall;
