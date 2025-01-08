import { memo } from "react";

import { Grid } from "@mui/material";

import { CustomTitle } from "../common/CustomTitle";
import { ResearchBox } from "../common/ResearchBox";
import { CustomButtonV2 } from "../controller/CustomButton";
import { researchSectionSX } from "../../helper/styleObjects/homeSection";

import imgOne from "../../assets/images/home/research1.webp";
import imgTwo from "../../assets/images/home/research2.webp";
import imgThree from "../../assets/images/home/research3.webp";

export const ResearchesSection = memo(() => {
  return (
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
        <Grid className="box-container">
          <ResearchBox
            url={""}
            title={"راهنمای دانشجو"}
            image={imgOne}
            description={
              "لورم ایپسوم متـــن ساختگی با تولـــید ســــــادگینامفـــــــــــهوم از صـــــنعت چـــاپ ، و با استــفاده از طــراحان گرافیک است"
            }
          />
          <ResearchBox
            url={""}
            title={"نوشتن مقالات علمی"}
            image={imgTwo}
            description={
              "لورم ایپسوم متـــن ساختگی با تولـــید ســــــادگینامفـــــــــــهوم از صـــــنعت چـــاپ ، و با استــفاده از طــراحان گرافیک است"
            }
          />
          <ResearchBox
            url={""}
            title={"راهنمای دانشجو"}
            image={imgThree}
            description={
              "لورم ایپسوم متـــن ساختگی با تولـــید ســــــادگینامفـــــــــــهوم از صـــــنعت چـــاپ ، و با استــفاده از طــراحان گرافیک است"
            }
          />
        </Grid>
      </Grid>
    </Grid>
  );
});
