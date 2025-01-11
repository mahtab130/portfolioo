import { memo } from "react";

import { map } from "lodash";
import { Typography, Grid, Box } from "@mui/material";

import { straightLineIcon } from "../other/SvgComponent";
import { customTitle } from "../../helper/styleObjects/common";
import { COLOR_PRIMARY, COLOR_TEXT } from "../../helper/constants/colors";

export const CustomTitle = memo<ICustomTitle>(
  ({ title, pretitle, setting }) => {
    const { color, iconColor } = setting ?? {};
    return (
      <Grid sx={customTitle(color)}>
        <Typography className="pre-title">
          {straightLineIcon(iconColor)}
          {pretitle}
        </Typography>
        <Typography className="title">
          {map(title, ({ text, color }, index) => (
            <Box
              key={index}
              component="span"
              sx={{ color: color == "blue" ? COLOR_PRIMARY : COLOR_TEXT }}
            >
              {text}
            </Box>
          ))}
        </Typography>
      </Grid>
    );
  }
);
