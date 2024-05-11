import React from "react";
import { brandLightText } from "../../_utils/colors";
import Image from "next/image";
import "@/app/_styles/anims.css";

const Features = () => {
  return (
    <div
      className="flex flex-col items-center justify-center text-center
      max-w-[1800px] w-[100vw] md:h-[75vh] min-h-full relative md:rounded-sm
       from-[#25291C] via-[#25291C] to-[#45512B] md:bg-[url('/feat/bg.svg')] bg-[url('/feat/bgSm.svg')]"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="fadeInFeatScroll flex flex-col items-center justify-center text-center gap-6 overflow-hidden 
      w-full max-w-[1440px]"
      >
        <Image
          src="/feat/circle.svg"
          alt="features"
          height={330}
          width={330}
          className="xl:w-[300px] xl:h-[300px] 
          lg:w-[240px] lg:h-[240px] 
          md:w-[180px] md:h-[180px] 
          w-[180px] h-[180px] rotating"
        />
        <div
          className="feat1 flex flex-col md:gap-[0px] gap-[3px] text-start items-start justify-start absolute
        lg:max-w-[240px] md:max-w-[210px] max-w-[105px]"
        >
          <div
            className="flex flex-row items-center justify-start
          md:gap-3 gap-[3px]"
          >
            <h3
              className={`text-[#D16D1B] opacity-90 font-medium 
              lg:text-[24px] lg:leading-[33px] 
              md:text-[18px] md:leading-[21px] md:tracking-[2.7px]
              text-[13.5px] leading-[18px] tracking-[0.6px]`}
            >
              Data Access
            </h3>
            <Image
              alt="qwer"
              src="/feat/data.svg"
              height={30}
              width={30}
              className="md:w-[30px] md:h-[30px] w-[15px] h-[15px]"
            />
          </div>
          <p
            className={`${brandLightText} font-normal md:tracking-[1.5px]
            lg:text-[15px] lg:leading-[18px] 
            md:text-[12px] md:leading-[15px]
            text-[9px] leading-[12px]`}
          >
            Get any data on Arweave including both on-chain and off-chain.
          </p>
        </div>
        <div
          className="feat2 flex flex-col md:gap-[0px] gap-[3px] text-start items-start justify-start absolute
          lg:max-w-[240px] md:max-w-[210px] max-w-[135px]"
        >
          <div
            className="flex flex-row items-center justify-start
          md:gap-3 gap-[3px]"
          >
            <h3
              className={`text-[#D16D1B] opacity-90 font-medium 
              lg:text-[24px] lg:leading-[33px] 
              md:text-[18px] md:leading-[21px] md:tracking-[2.7px]
              text-[13.5px] leading-[18px] tracking-[0.6px]`}
            >
              Permissionless
            </h3>
            <Image
              alt="qwer"
              src="/feat/permissionless.svg"
              height={21}
              width={21}
              className="md:w-[21px] md:h-[21px] w-[15px] h-[15px]"
            />
          </div>
          <p
            className={`${brandLightText} font-normal md:tracking-[1.5px]
            lg:text-[15px] lg:leading-[18px] 
            md:text-[12px] md:leading-[15px] 
            text-[9px] leading-[12px]`}
          >
            Anyone can utilise <span className="font-[Regular]">0rbit</span>{" "}
            without asking permission from the team.
          </p>
        </div>
        <div
          className="feat3 flex flex-col md:gap-[0px] gap-[3px] text-start items-start justify-start absolute
        lg:max-w-[240px] md:max-w-[210px] max-w-[135px] "
        >
          <div className="flex flex-row md:gap-3 gap-[3px] items-center justify-start">
            <h3
              className={`text-[#D16D1B] opacity-90 font-medium 
              lg:text-[24px] lg:leading-[33px] 
              md:text-[18px] md:leading-[21px] md:tracking-[2.7px]
              text-[13.5px] leading-[18px] tracking-[0.6px]`}
            >
              Decentralized
            </h3>
            <Image
              alt="qwer"
              src="/feat/decentralized.svg"
              height={39}
              width={39}
              className="md:w-[39px] md:h-[39px] w-[18px] h-[18px]"
            />
          </div>
          <p
            className={`${brandLightText} font-normal 
            lg:text-[15px] lg:leading-[18px] 
            md:text-[12px] md:leading-[15px] md:tracking-[1.5px]
            text-[9px] leading-[10.5px] tracking-[0.6px]`}
          >
            The <span className="font-[Regular] tracking-tight">0rbit</span>{" "}
            nodes secure and provide accurate data by following consensus.
          </p>
        </div>
        <div
          className="feat4 flex flex-col gap-[0px] text-start items-start justify-start absolute
        lg:max-w-[240px] md:max-w-[210px] max-w-[120px]"
        >
          <div className="flex flex-row md:gap-3 gap-[3px] items-center justify-start">
            <h3
              className={`text-[#D16D1B] opacity-90 font-medium 
              lg:text-[24px] lg:leading-[33px] 
              md:text-[18px] md:leading-[21px] md:tracking-[2.7px]
              text-[13.5px] leading-[18px] tracking-[0.9px]`}
            >
              Secure
            </h3>
            <Image
              alt="qwer"
              src="/feat/secure.svg"
              height={24}
              width={24}
              className="md:w-[24px] md:h-[24px] w-[15px] h-[15px]"
            />
          </div>
          <p
            className={`${brandLightText} font-normal md:tracking-[1.5px]
            lg:text-[15px] lg:leading-[18px] 
            md:text-[12px] md:leading-[15px] 
            text-[9px] leading-[10.5px] tracking-[0.6px]`}
          >
            <span className="font-[Regular]">0rbit</span> provides secure path
            to get the data in any AO process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
