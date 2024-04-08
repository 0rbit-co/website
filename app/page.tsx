import React from "react";
import FloatingNavDemo from "./components/Navbar";
import SpotlightPreview from "./components/SpotlightPreview";
import SparklesPreview from "./components/SparklesPreview";
import BentoGridPreview from "./components/BentoGridPreview";
import ServicesCard from "./components/ServicesCard";
import Support from "./components/Support";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ContactPreview from "./components/ContactPreview";

const page = () => {
  return (
    <main>
      <div className="">
        <SpotlightPreview />
      </div>
      <section className="m-20">
        <SparklesPreview title="Features" />
        <BentoGridPreview />
      </section>
      <section className="">
        <SparklesPreview title="Services" />
        <div className="flex gap-8 justify-center flex-wrap">
          <ServicesCard
            title="Get Data from any HTTP URL"
            description=""
            imgUri="/data-access.svg"
          />
          <ServicesCard
            title="Get Price Feeds"
            description=""
            imgUri="/price-feed.svg"
          />
        </div>
      </section>
      <section className="my-20">
        <Support />
      </section>
      <section className="my-20">
        <ContactPreview title="Contact Us" />
        <Form />
      </section>
    </main>
  );
};

export default page;
