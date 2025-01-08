import { memo } from "react";

import { Grid } from "@mui/material";
import { aboutMeSectionSX } from "../../helper/styleObjects/homeSection";
import { CustomTitle } from "../common/CustomTitle";
import { EducationBox } from "../common/EducationBox";

export const AboutMe = memo(() => {
  return (
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
        </Grid>
        <Grid container md={12} className="box-container">
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
  );
});
