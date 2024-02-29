import React, { useEffect, useRef } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';

const data: string[] = [
  'weavers',
  'builders',
  'developers',
];

const Http: React.FC<{ imgUrl: string }> = ({ imgUrl }) => {
  const swapperRef = useRef<HTMLDivElement>(null);

  let count = 0;
  let count2 = 0;
  let count3 = 0;

  useEffect(() => {
    const swapper = swapperRef.current;
    if (!swapper) return;

    const list = Array.from(swapper.children) as HTMLDivElement[];
    let count = 0;
    let count2 = 0;
    let count3 = 0;

    const scrollInterval = setInterval(() => {
      list.forEach((item, index) => {
        const distance = count - index;
        const opacity = Math.max(0, 1 - Math.abs(distance) * 0.2);
        const translateY = distance * 100;

        item.style.opacity = opacity.toString();
        item.style.transform = `translateY(${translateY}%)`;
      });

      count = (count + 1) % list.length;

    }, 1000);

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);


  return (
    <div className="bg-[#150f04]  overflow-hidden  small-lg:px-[3%] relative">
      <div className="py-[4rem] small-lg:pt-[6.4rem] small-lg:pb-[1.6rem] w-full small-lg:max-w-[1280px] max-w-none mx-auto">
        <div className="w-full">
          <div className="small-lg:grid text-[#deb556] grid-cols-auto w-full gap-[48px]">
            <div className="small-lg:max-w-[420px]  flex flex-col gap-[36px] small-lg:text-right small-lg:items-end justify-start">
              <div className="flex justify-center items-center">
                <Image src={imgUrl} width={100} height={100} alt="price" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Http;
