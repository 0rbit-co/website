import { cn } from "@/app/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/app/components/ui/bento-grid";
import { TbDatabaseSearch } from "react-icons/tb";
import { IoLockOpenOutline } from "react-icons/io5";
import { GoShieldCheck } from "react-icons/go";
import { GiMeshBall } from "react-icons/gi";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "../components/ui/glowing-stars";
 

function BentoGridPreview() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          bgImage={item.bgImage}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

export function GlowingStarsBackgroundCardPreview() {
  return (
    <div className="flex items-center justify-center antialiased">
      <GlowingStarsBackgroundCard>
      </GlowingStarsBackgroundCard>
    </div>
  );
}

const Skeleton = () => (
  <div className="">
    <GlowingStarsBackgroundCardPreview />
  </div>
);

const SkeletonBig = () => (
  <div className="">
  </div>
);
const items = [
  {
    title: "Data Access",
    description: "Get any data on Arweave including both on-chain and off-chain.",
    header: <SkeletonBig />,
    className: "md:col-span-2 bg-[#09090b]",
    icon: <TbDatabaseSearch className="h-4 w-4 text-neutral-500" />,
    bgImage: "/card-background.svg"
  },
  {
    title: "Permissionless",
    description: "Anyone can utilise 0rbit without asking permission from the team.",
    header: <Skeleton />,
    className: "md:col-span-1 bg-[#09090b]",
    icon: <IoLockOpenOutline className="h-4 w-4 text-neutral-500" />,
    // bgImage: "/card-background.svg"
  },
  {
    title: "Secure",
    description: "0rbit provides secure path to get the data in any AO process.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <GoShieldCheck className="h-4 w-4 text-neutral-500" />,
    // bgImage: "/card-background.svg"
  },
  {
    title: "Decentralised",
    description:
      "The 0rbit nodes secures and provides accurate data by following the consensus.",
    header: <SkeletonBig />,
    className: "md:col-span-2 bg-[#09090b]",
    icon: <GiMeshBall className="h-4 w-4 text-neutral-500" />,
    bgImage: "/card-background.svg"
  },
];

export default BentoGridPreview;
