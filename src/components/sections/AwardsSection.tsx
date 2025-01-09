import { memo } from "react";

import { map } from "lodash";
import { Grid } from "@mui/material";

import { AwardBox } from "../common/AwardBox";
import { CustomTitle } from "../common/CustomTitle";
import { AnimationSlideIn } from "../common/AnimateComponent";
import { diplomaIcon, medalStarIcon } from "../other/SvgComponent";
import { awardSectionSX } from "../../helper/styleObjects/homeSection";

export const AwardsSection = memo(() => {
  return (
    <AnimationSlideIn direction={"right"}>
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
            {map(data, ({ description, icon, title, iconColor }) => (
              <AwardBox
                iconColor={iconColor}
                icon={icon}
                title={title}
                description={description}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </AnimationSlideIn>
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
    icon: medalStarIcon(),
    iconColor: "#3D3F3C",
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
    iconColor: "#3D3F3C",
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
    iconColor: "#3D3F3C",
    title: "تقدیر نامه بخاطر کیفیت آموزش",
    description:
      "لورم ایپسوم متـــن ساختگی با تولـــید سادگی نامفـــــهوم از صـــــنعت چـــاپ ، و با استــفاده از طــــــــــراحان گرافیک است چاپگرها و مـتونبلکه روزنامــــه و مجــــله در ســـتون و سطر آنچــــنان کـــــــــــه لازم اســـــــــت،",
  },
];
