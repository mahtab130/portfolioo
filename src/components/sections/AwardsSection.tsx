import { memo } from "react";

import { Grid } from "@mui/material";
import { awardSectionSX } from "../../helper/styleObjects/homeSection";
import { CustomTitle } from "../common/CustomTitle";
import { AwardBox } from "../common/AwardBox";
import { diplomaIcon } from "../other/SvgComponent";
import { map } from "lodash";

export const AwardsSection = memo(() => {
  return (
    <Grid sx={awardSectionSX}>
      <Grid className="container">
        <Grid className="title-wrapper">
          <CustomTitle
            pretitle="جوایز"
            title={[
              { text: "دستاورد ها و جوایز", color: "blue" },
              { text: "مــن", color: "black" },
            ]}
          />
        </Grid>
        <Grid className="box-container">
          {map(data, ({ description, icon, title }) => (
            <AwardBox icon={icon} title={title} description={description} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
});

const data: IAwardBox[] = [
  {
    icon: diplomaIcon(),
    title: "تقدیر نامه بخاطر کیفیت آموزش",
    description:
      "لورم ایپسوم متـــن ساختگی با تولـــید سادگی نامفـــــهوم از صـــــنعت چـــاپ ، و با استــفاده از طــــــــــراحان گرافیک است چاپگرها و مـتونبلکه روزنامــــه و مجــــله در ســـتون و سطر آنچــــنان کـــــــــــه لازم اســـــــــت،",
  },
  {
    icon: diplomaIcon(),
    title: "تقدیر نامه بخاطر کیفیت آموزش",
    description:
      "لورم ایپسوم متـــن ساختگی با تولـــید سادگی نامفـــــهوم از صـــــنعت چـــاپ ، و با استــفاده از طــــــــــراحان گرافیک است چاپگرها و مـتونبلکه روزنامــــه و مجــــله در ســـتون و سطر آنچــــنان کـــــــــــه لازم اســـــــــت،",
  },
  {
    icon: diplomaIcon(),
    title: "تقدیر نامه بخاطر کیفیت آموزش",
    description:
      "لورم ایپسوم متـــن ساختگی با تولـــید سادگی نامفـــــهوم از صـــــنعت چـــاپ ، و با استــفاده از طــــــــــراحان گرافیک است چاپگرها و مـتونبلکه روزنامــــه و مجــــله در ســـتون و سطر آنچــــنان کـــــــــــه لازم اســـــــــت،",
  },
  {
    icon: diplomaIcon(),
    title: "تقدیر نامه بخاطر کیفیت آموزش",
    description:
      "لورم ایپسوم متـــن ساختگی با تولـــید سادگی نامفـــــهوم از صـــــنعت چـــاپ ، و با استــفاده از طــــــــــراحان گرافیک است چاپگرها و مـتونبلکه روزنامــــه و مجــــله در ســـتون و سطر آنچــــنان کـــــــــــه لازم اســـــــــت،",
  },
  {
    icon: diplomaIcon(),
    title: "تقدیر نامه بخاطر کیفیت آموزش",
    description:
      "لورم ایپسوم متـــن ساختگی با تولـــید سادگی نامفـــــهوم از صـــــنعت چـــاپ ، و با استــفاده از طــــــــــراحان گرافیک است چاپگرها و مـتونبلکه روزنامــــه و مجــــله در ســـتون و سطر آنچــــنان کـــــــــــه لازم اســـــــــت،",
  },
  {
    icon: diplomaIcon(),
    title: "تقدیر نامه بخاطر کیفیت آموزش",
    description:
      "لورم ایپسوم متـــن ساختگی با تولـــید سادگی نامفـــــهوم از صـــــنعت چـــاپ ، و با استــفاده از طــــــــــراحان گرافیک است چاپگرها و مـتونبلکه روزنامــــه و مجــــله در ســـتون و سطر آنچــــنان کـــــــــــه لازم اســـــــــت،",
  },
];
