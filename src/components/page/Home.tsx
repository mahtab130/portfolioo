import { FC } from "react";

import { Grid } from "@mui/material";

import { AboutMe } from "../sections/AboutMe";
import { HomeSection } from "../sections/HomeSection";
import { BlogSection } from "../sections/BlogSection";
import { homeSX } from "../../helper/styleObjects/main";
import { ServicesSection } from "../sections/ServicesSection";
import { AwardsSection } from "../sections/AwardsSection";
import { CommentsSection } from "../sections/CommentsSection";
import { ResearchesSection } from "../sections/ResearchesSection";

const Home: FC = () => {
  return (
    <Grid sx={homeSX}>
      <HomeSection />
      <ServicesSection />
      <AboutMe />
      <ResearchesSection />
      <AwardsSection />
      <CommentsSection />
      <BlogSection />
    </Grid>
  );
};

export default Home;
