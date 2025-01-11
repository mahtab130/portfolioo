import { memo } from "react";

import { map } from "lodash";
import { Grid, Typography } from "@mui/material";

import { educationBoxSX } from "../../helper/styleObjects/common";

export const EducationBox = memo<IEducationBox>(({ description, title }) => {
  return (
    <Grid sx={educationBoxSX}>
      <Typography className="title">{title}</Typography>
      <Grid className="description">
        {map(description, ({ subtitle, title, years }) => (
          <Grid className="container">
            <Grid className="titles-wrapper">
              <Typography className="title-2">{title}</Typography>
              <Typography className="subtitle">{subtitle}</Typography>
            </Grid>
            <Grid className="years-wrapper">
              {map(years, (item, index) => (
                <Typography key={index + item} className="year">
                  {item} {index < years.length - 1 && " - "}
                </Typography>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
});
