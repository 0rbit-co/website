import React from "react";
import FloatingNavDemo from "@/app/components/Navbar";
import TeamPreview from "@/app/components/TeamPreview";
import SparklesPreview from "../components/SparklesPreview";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <div>
          <FloatingNavDemo />
        </div>
        <div className="mt-20 md:mt-0">
          <SparklesPreview title="The Team" />
        </div>
        <div className="flex justify-center items-center gap-10 flex-wrap">
          <div className="flex">
            <TeamPreview
              imgURL="/team/lucifer.jpeg"
              name="Lucifer"
              role="Backend and Infrastructure"
              github="https://github.com/Lucifer0x17"
            />
          </div>
          <div className="flex">
            <TeamPreview
              imgURL="/team/sarthak.jpeg"
              name="Sarthak"
              role="Frontend"
              github="https://github.com/Not-Sarthak"
            />
          </div>
          <div className="flex">
            <TeamPreview
              imgURL="/team/megabyte.png"
              name="Megabyte"
              role="Smart Contract Developer"
              github="https://github.com/megabyte0x"
            />
          </div>
        </div>
      </div>
      <div className="flex-grow"></div>
    </div>
  );
};

export default page;
