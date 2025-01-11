import { memo } from "react";

import { Grid } from "@mui/material";

import { CustomTitle } from "../common/CustomTitle";
import { EducationBox } from "../common/EducationBox";
import { CustomImage } from "../controller/CustomImage";
import { AnimationSlideIn } from "../common/AnimateComponent";
import { aboutMeSectionSX } from "../../helper/styleObjects/homeSection";

import vector1 from "../../assets/images/vectors/vector-blue.webp";
import vector2 from "../../assets/images/vectors/vector-orange.webp";

export const AboutMe = memo(() => {
  return (
    <AnimationSlideIn direction={"right"}>
      <Grid sx={aboutMeSectionSX}>
        <Grid className="container">
          <Grid className="title-wrapper">
            <CustomTitle
              pretitle="تحصیلات و کار"
              title={[
                { text: "تحصیــلات و تجربــه کــاری", color: "blue" },
                { text: "مــن", color: "black" },
              ]}
            />
            <Grid className="vectors-wrapper">
              <CustomImage src={vector1} />
              <CustomImage src={vector2} />
            </Grid>
          </Grid>
          <Grid container item md={12} className="box-container">
            <Grid item md={5.5}>
              <EducationBox
                title={"تحصیــلات"}
                description={[
                  {
                    subtitle: "دکتـــرای بـــرق",
                    title: "دانشـــگاه آزاد اسلامی مشهد",
                    years: ["1400", "1403"],
                  },
                  {
                    subtitle: "لیسانــس بـــرق",
                    title: "دانشـــگاه آزاد اسلامی",
                    years: ["1400", "1403"],
                  },
                  {
                    subtitle: "دیپلـــم ریاضــــی",
                    title: "مدرســـه شهید دلشاد",
                    years: ["1400", "1403"],
                  },
                ]}
              />
            </Grid>
            <Grid item md={5.5}>
              <EducationBox
                title={"تجربــه کـــاری"}
                description={[
                  {
                    subtitle: "دکتـــرای بـــرق",
                    title: "دانشـــگاه آزاد اسلامی مشهد",
                    years: ["1400", "1403"],
                  },
                  {
                    subtitle: "لیسانــس بـــرق",
                    title: "دانشـــگاه آزاد اسلامی",
                    years: ["1400", "1403"],
                  },
                  {
                    subtitle: "دیپلـــم ریاضــــی",
                    title: "مدرســـه شهید دلشاد",
                    years: ["1400", "1403"],
                  },
                ]}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AnimationSlideIn>
  );
});
