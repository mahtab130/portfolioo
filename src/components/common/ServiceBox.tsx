import { memo } from "react";

import { Box, Grid, Typography } from "@mui/material";

import { serviceBoxSX } from "../../helper/styleObjects/common";

export const ServiceBox = memo<IServiceBox>(({ description, title, icon }) => {
  return (
    <Grid sx={serviceBoxSX}>
      <Box className="icon">{icon}</Box>
      <Typography className="title">{title}</Typography>
      <Typography className="description">{description}</Typography>
    </Grid>
  );
});
