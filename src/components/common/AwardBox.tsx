import { Box, Grid, Typography } from "@mui/material";
import { memo } from "react";
import { awardBoxSX } from "../../helper/styleObjects/common";

export const AwardBox = memo<IAwardBox>(({ description, title, icon }) => {
  return (
    <Grid sx={awardBoxSX}>
      <Box className="icon">{icon}</Box>
      <Typography className="title">{title}</Typography>
      <Typography className="description">{description}</Typography>
    </Grid>
  );
});
