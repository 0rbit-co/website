import React from "react";
import FloatingNavDemo from "@/app/components/Navbar";
import TeamPreview from "@/app/components/TeamPreview";
import SparklesPreview from "../components/SparklesPreview";
import Footer from "../components/Footer";

const page = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <div>
        <div>
          <FloatingNavDemo />
        </div>
        <div className="mt-20 md:mt-0">
          <SparklesPreview title="The Team" />
        </div>
        <section className="flex justify-center items-center gap-10 flex-wrap">
          <article className="flex">
            <TeamPreview
              imgURL="/team/lucifer.jpeg"
              name="Lucifer"
              role="Backend and Infrastructure"
              github="https://github.com/Lucifer0x17"
            />
          </article>
          <article className="flex">
            <TeamPreview
              imgURL="/team/sarthak.jpeg"
              name="Sarthak"
              role="Frontend"
              github="https://github.com/Not-Sarthak"
            />
          </article>
          <article className="flex">
            <TeamPreview
              imgURL="/team/megabyte.png"
              name="Megabyte"
              role="Smart Contract Developer"
              github="https://github.com/megabyte0x"
            />
          </article>
        </section>
        <section className="flex justify-center mt-10 items-center gap-10 flex-wrap">
          <article className="flex">
            <TeamPreview
              imgURL="/team/taveesha.jpg"
              name="Taveesha"
              role="Frontend Developer"
              github="https://github.com/0xLPircy"
            />
          </article>
          <article className="flex">
            <TeamPreview
              imgURL="/team/manishi.jpg"
              name="Manishi"
              role="Designer"
              github="https://github.com/0xManishi"
            />
          </article>
        </section>
      </div>
      <div className="flex-grow"></div>
    </main>
  );
};

export default page;
