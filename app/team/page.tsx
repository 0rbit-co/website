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
              dribble=""
              imgURL="/team/lucifer.jpeg"
              name="Lucifer"
              role="Backend and Infrastructure"
              github="https://github.com/Lucifer0x17"
              twitter="https://x.com/Lucifer0x17?t=fH5LRms3xy2hSPLJbNubaA&s=09"
            />
          </article>
          <article className="flex">
            <TeamPreview
              dribble=""
              imgURL="/team/sarthak.jpeg"
              name="Sarthak"
              role="Frontend"
              github="https://github.com/Not-Sarthak"
              twitter="https://x.com/0xSarthak13?t=nvsUz9hxhq2hQO25wr8Rtw&s=09"
            />
          </article>
          <article className="flex">
            <TeamPreview
              dribble=""
              imgURL="/team/megabyte.png"
              name="Megabyte"
              role="Smart Contract Developer"
              github="https://github.com/megabyte0x"
              twitter="https://x.com/megabyte0x?t=WZYKcJAvN-CM7a6yU4lPNQ&s=09"
            />
          </article>
        </section>
        <section className="flex justify-center mt-10 items-center gap-10 flex-wrap">
          <article className="flex">
            <TeamPreview
              dribble=""
              imgURL="/team/taveesha.jpg"
              name="Taveesha"
              role="Frontend Developer"
              github="https://github.com/0xLPircy"
              twitter="https://x.com/0xLPircy?t=Ppkfa4HmoEsfPMEeYJCisw&s=09"
            />
          </article>
          <article className="flex">
            <TeamPreview
              dribble="https://dribbble.com/0xManishi"
              imgURL="/team/manishi.jpg"
              name="Manishi"
              role="Designer"
              github=""
              twitter="https://x.com/0xManishi?t=FKn7XBJwlIXwJR-f4KGkzw&s=09"
            />
          </article>
        </section>
      </div>
      <div className="flex-grow"></div>
    </main>
  );
};

export default page;
