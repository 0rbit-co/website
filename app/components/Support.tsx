import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import star from "@/public/star.svg";

const Support = () => {
  const repeatedText = "0RBIT x ARWEAVE";

  return (
    <article className="inset-0 -z-10 h-full w-full bg-black">
      <Marquee className="bg-radial-gradient text-[#FFD700] tracking-[3px]">
        {[...Array(20)].map((_, index) => (
          <React.Fragment key={index}>
            <span className="">{repeatedText}</span>
            <Image
              src={star}
              alt="star"
              className="inline-block h-4 w-4 mx-20"
            />
          </React.Fragment>
        ))}
      </Marquee>
    </article>
  );
};

export default Support;
