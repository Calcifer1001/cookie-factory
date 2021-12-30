import React from "react";
import Welcome, { BASE_URL } from "./components/Welcome";
import PropsSection from "./components/PropsSection";
import { Attributes, Emotions } from "../../../src/common/resource";
import SponsorComponent from "./components/SponsorComponent";
import AuthorsSection from "./components/AuthorsSection";

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <Welcome />
      </section>
      <section className="props-section">
        <div>
          <div>
            <PropsSection
              align="left"
              title={Emotions.Title}
              text={Emotions.DisplayText}
              src={BASE_URL + "745.png"}
            />
          </div>
          <div>
            <PropsSection
              align="right"
              title={Attributes.Title}
              text={Attributes.DisplayText}
              src={BASE_URL + "999.png"}
            />
          </div>
        </div>
      </section>
      <section className="authors-section align-center ptb-120">
        <AuthorsSection/>
      </section>
      <SponsorComponent />
    </main>
  );
}

