import { memo } from "react";

import { Grid } from "@mui/material";

import { ServiceBox } from "../common/ServiceBox";
import { CustomTitle } from "../common/CustomTitle";
import { notebookIcon } from "../other/SvgComponent";
import { CustomButtonV2 } from "../controller/CustomButton";
import { servicesSectionSX } from "../../helper/styleObjects/homeSection";

export const ServicesSection = memo(() => {
  return (
    <Grid sx={servicesSectionSX}>
      <Grid className="container">
        <Grid className="title-wrapper">
          <CustomTitle
            pretitle="خــدمات"
            title={[
              { text: "فعالیت های", color: "blue" },
              { text: "مــن", color: "black" },
            ]}
          />
          <Grid className="button-wrapper">
            <CustomButtonV2 variant="contained" text={"دانلــود رزومــه"} />
          </Grid>
        </Grid>
        <Grid className="box-container">
          <ServiceBox
            icon={notebookIcon()}
            title={"مدرس در دانشگاه آزاد"}
            description={
              "لورم ایپسوم متـــن ساختگی با تولـــید سادگی نامفـــهوم از صـــــنعت چـــاپ ، و با استــفاده از طــراحان گرافیک است چاپگرها و مـتو نبلکه روزنامــــه و مجــله در ســتون و سطر آنچــــنانکـــــــــــه اســـــــــت."
            }
          />
          <ServiceBox
            icon={notebookIcon()}
            title={"مدرس در دانشگاه آزاد"}
            description={
              "لورم ایپسوم متـــن ساختگی با تولـــید سادگی نامفـــهوم از صـــــنعت چـــاپ ، و با استــفاده از طــراحان گرافیک است چاپگرها و مـتو نبلکه روزنامــــه و مجــله در ســتون و سطر آنچــــنانکـــــــــــه اســـــــــت."
            }
          />
          <ServiceBox
            icon={notebookIcon()}
            title={"مدرس در دانشگاه آزاد"}
            description={
              "لورم ایپسوم متـــن ساختگی با تولـــید سادگی نامفـــهوم از صـــــنعت چـــاپ ، و با استــفاده از طــراحان گرافیک است چاپگرها و مـتو نبلکه روزنامــــه و مجــله در ســتون و سطر آنچــــنانکـــــــــــه اســـــــــت."
            }
          />
        </Grid>
      </Grid>
    </Grid>
  );
});
