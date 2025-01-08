import { Box, Grid, Typography } from "@mui/material";
import { memo } from "react";
import { researchBoxSX } from "../../helper/styleObjects/common";
import { CustomImage } from "../controller/CustomImage";

export const ResearchBox = memo<IResearchBox>(
  ({ description, title, image }) => {
    return (
      <Grid sx={researchBoxSX}>
        <Typography className="title">{title}</Typography>
        <Grid className="description">{description}</Grid>
        <Box className="divider"></Box>
        <CustomImage className="image" src={image} />
      </Grid>
    );
  }
);
