import React from "react";

import Advert from "@/components/landingPageComponent/Advert";
import EditorsPickSection from "./landingPageComponent/EditorsPickSection";
import Trending from "./landingPageComponent/Trending";
import NewlyAddedEpisode from "./landingPageComponent/NewlyAddedEpisode";
import CategoryListening from "./landingPageComponent/CategoryListening";
import AdvertLayoutTwo from "./landingPageComponent/AdvertLayoutTwo";
import EducationalSection from "./landingPageComponent/EducationalSection";
import EntertainmentLifestyle from "./landingPageComponent/EntertainmentLifeStyle";
import TechSportBusiness from "./landingPageComponent/TechSportBusiness";
import OtherPodcast from "./landingPageComponent/OtherPodcast";
import NewsLetter from "./landingPageComponent/NewsLetter";
import Partners from "./landingPageComponent/Partners";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <>
      {/* Advert */}
      <Advert />
      {/* Editors Pick */}
      <EditorsPickSection />
      {/* Trending Post */}
      <Trending />
      {/* Newly added episode */}
      <NewlyAddedEpisode />
      {/* Listen by Category */}
      <CategoryListening />
      {/* advertTwo */}
      <AdvertLayoutTwo />
      {/* educational section */}
      <EducationalSection />
      {/* entertainment section */}
      <EntertainmentLifestyle />
      {/* tech, sport, business */}
      <TechSportBusiness />
      {/* other podcast */}
      <OtherPodcast />
      {/* news letter */}
      <NewsLetter />
      {/* partners */}
      <Partners />
    </>
  );
};

export default LandingPage;
