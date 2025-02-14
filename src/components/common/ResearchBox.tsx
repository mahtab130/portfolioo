import { memo } from "react";

import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";

import { CustomImage } from "../controller/CustomImage";
import { researchBoxSX } from "../../helper/styleObjects/common";
import { arrowRightCrookedIcon } from "../other/SvgComponent";

export const ResearchBox = memo<IResearchBox>(
  ({ description, title, image, navigateString }) => {
    const navigate = useNavigate();
    return (
      <Grid sx={researchBoxSX} onClick={() => navigate(navigateString || "")}>
        <Typography className="title">{title}</Typography>
        <Grid className="description">{description}</Grid>
        <Box className="divider"></Box>
        <CustomImage className="image" src={image} />
        <Grid className="arrow-wrapper">
          {" "}
          <Box component="span">{arrowRightCrookedIcon()}</Box>{" "}
        </Grid>
      </Grid>
    );
  }
);
