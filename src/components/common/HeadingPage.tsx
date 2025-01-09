import { memo } from "react";

import { Box, Grid, Typography } from "@mui/material";

import { AnimationSlideIn } from "./AnimateComponent";
import { headingPageSX } from "../../helper/styleObjects/common";
import { CustomImage } from "../controller/CustomImage";

import vector from "../../assets/images/vectors/orange-arrow.webp";

interface IHeadingPage {
  title: string;
  image: string;
  description: string;
}

export const HeadingPage = memo<IHeadingPage>(
  ({ description, image, title }) => {
    return (
      <Grid sx={headingPageSX(image)}>
        <Box className="leaner" />
        <AnimationSlideIn direction="left" className="container">
          <Grid className="container">
            <Typography className="title">
              {title} <CustomImage className="vector" src={vector} />
            </Typography>
            <Typography className="subtitle">{description}</Typography>
          </Grid>
        </AnimationSlideIn>
      </Grid>
    );
  }
);
