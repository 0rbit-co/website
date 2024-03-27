import React from "react";
import { Anonymous_Pro } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const anp = Anonymous_Pro({ subsets: ["latin"], weight: ["400", "700"] });
const QuestsModal = ({ vis, onClosing, num }: any) => {
  const checkArea = (e: any) => {
    if (e.target.id === "blurArea") {
      onClosing();
    }
  };
  return (
    <>
      {vis && (
        <div
          className="bg-[#bd7f0d7d] backdrop-blur-md fixed inset-0 grid z-50"
          onClick={checkArea}
          id="blurArea"
        >
          <div
            className={`bg-[#000000] rounded-xl place-self-center px-12 py-6 w-[75%] ${anp.className}`}
          >
            <div className="flex flex-col items-center w-fit py-3">
              <div
                className={`flex items-center justify-center gap-3 ${anp.className} px-6 py-3
          sm:text-[57px] text-[39px] font-semibold text-neutral-500 dark:text-neutral-300 leading-[36px]
          tracking-wide lg:max-w-[330px] sm:max-w-[330px] max-w-[240px] w-full `}
              >
                {" "}
                {num == 1 && (
                  <>
                    <h2>$</h2>
                    <Image
                      src="/quest/q1Arrows.svg"
                      height={150}
                      width={60}
                      alt="oracle pricefeed"
                    />
                    <h2 className="">0RBT</h2>
                  </>
                )}
                {num == 2 && (
                  <>
                    <h2 className=" tracking-[21px] mr-[-24px]">NEWS</h2>
                  </>
                )}
              </div>
              <h3 className="text-[39px] leading-6">Price Feed Bot</h3>
            </div>
            <h2 className="text-[21px] tracking-wider ml-[-12px] font-bold">
              Task:
            </h2>
            <p className="text-[13.5px]">
              - Create a bot for the chatroom that will provide the price feed
              for a token(s) when asked by the users.
            </p>
            <h2 className="text-[21px] tracking-wider ml-[-12px] font-bold">
              Requirements:
            </h2>
            <p className="text-[13.5px]">
              - Must use 0rbit's{" "}
              <span className="bg-[#3f3f3f] px-[3px] py-[1px] rounded-sm text-center">
                ao
              </span>{" "}
              process to fetch the data from the API.
            </p>
            <h2 className="text-[21px] tracking-wider ml-[-12px] font-bold">
              Evaluation:
            </h2>
            <p className="text-[13.5px]">
              - The bot will be evaluated based on the live demo and the
              codebase.
            </p>
            <p className="text-[13.5px]">
              {" "}
              - Submit a PR here with the{" "}
              <span className="bg-[#3f3f3f] px-[3px] py-[1px] rounded-sm text-center">
                Name=price-feed-bot-$&#123;username&#125;
              </span>{" "}
              and with the codebase and demo link in the description.
            </p>
            <h2 className="text-[21px] tracking-wider ml-[-12px] font-bold">
              Hints:
            </h2>
            <p className="text-[13.5px]">- Use CoinGecko free price API</p>
            <p className="text-[13.5px]">
              - Learn how to fetch data through 0rbit{" "}
              <Link
                href="https://docs.0rbit.co/examples/basic-get-request"
                className="text-[15px] font-light tracking-wider pr-[6px] pl-[6px] py-[2px]
            hover:cursor-pointer hover:bg-[#cf893457] bg-[#cf8934c3]"
              >
                here
              </Link>
            </p>
            <h2 className="text-[21px] tracking-wider ml-[-12px] font-bold">
              Submission:
            </h2>
            {/* aos> Send({Target= "O3SXXYqQCNTbBedJjsW6wkPnrKFZq8DPLkKjO7zhztE", Action = "Claim", Quest = "Price-Bot", User = <username>}) */}
            <h2 className="text-[21px] tracking-wider ml-[-12px] font-bold">
              Points:
            </h2>
            <p className="text-[13.5px]">
              - Note: It will take a little time after we recieve your request.
            </p>
            <p className="text-[13.5px]">
              {" "}
              - Once you get the message for Credit-Notice run following to
              check balance.
            </p>
            <p className="text-[13.5px]">
              {" "}
              - 200000 OP (0rbit Points) will be awarded to PR after the
              successful evaluation.
            </p>
            <p className="text-[13.5px]">
              {" "}
              - The address of the 0rbit Point is
              BUhZLMwQ6yZHguLtJYA5lLUa9LQzLXMXRfaq9FVcPJc
            </p>
            <p className="text-[13.5px]">
              {" "}
              - You can check your OP balance by using the following commands in
              your terminal: Start aos
            </p>
            {/* aos> Send({Target= "BUhZLMwQ6yZHguLtJYA5lLUa9LQzLXMXRfaq9FVcPJc", Action = "Balance"}) */}
          </div>
        </div>
      )}
    </>
  );
};

export default QuestsModal;
