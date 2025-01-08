import { Grid, Typography } from "@mui/material";
import { memo } from "react";
import { educationBoxSX } from "../../helper/styleObjects/common";
import { map } from "lodash";

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
              {map(years, (item) => (
                <Typography className="year">{item}</Typography>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
});
