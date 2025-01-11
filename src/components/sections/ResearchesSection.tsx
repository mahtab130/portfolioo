import { memo } from "react";

import { map, slice } from "lodash";
import { Grid } from "@mui/material";

import { researches } from "../../data/researches";
import { CustomTitle } from "../common/CustomTitle";
import { ResearchBox } from "../common/ResearchBox";
import { CustomButtonV2 } from "../controller/CustomButton";
import { AnimationSlideIn } from "../common/AnimateComponent";
import { researchSectionSX } from "../../helper/styleObjects/homeSection";

export const ResearchesSection = memo(() => {
  return (
    <AnimationSlideIn direction={"right"}>
      <Grid sx={researchSectionSX}>
        <Grid className="container">
          <Grid className="title-wrapper">
            <CustomTitle
              pretitle="پژوهــش"
              title={[
                { text: "پژوهــش های", color: "blue" },
                { text: "مــن", color: "black" },
              ]}
            />
            <Grid className="button-wrapper">
              <CustomButtonV2 variant="contained" text={"مشاهده همه"} />
            </Grid>
          </Grid>
          <Grid container className="box-container">
            {map(slice(researches, 3), ({ description, id, image, title }) => (
              <Grid item md={3.9}>
                <ResearchBox
                  key={id}
                  id={id}
                  title={title}
                  image={image}
                  description={description}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </AnimationSlideIn>
  );
});
