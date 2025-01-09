import { memo } from "react";

import { Box, Grid, Typography } from "@mui/material";

import { CustomTitle } from "../common/CustomTitle";
import { CustomImage } from "../controller/CustomImage";
import { CustomButton } from "../controller/CustomButton";
import { AnimationSlideIn } from "../common/AnimateComponent";
import { homeSectionSX } from "../../helper/styleObjects/homeSection";

import ImageOfMe from "../../assets/images/home/home-man.webp";
import vector from "../../assets/images/vectors/arrow-home.webp";

export const HomeSection = memo(() => {
  return (
    <Grid sx={homeSectionSX} className="home-wrapper">
      <AnimationSlideIn direction="right">
        <Grid container className="container">
          <Grid item xs={12} md={6} className="texts-wrapper">
            <CustomTitle
              pretitle="ســـلام"
              title={[
                { color: "black", text: "مــن" },
                { color: "blue", text: "محمد معطر" },
                { color: "black", text: "هستم" },
              ]}
            />
            <Typography className="subtitle">
              لورم اسپیس متن ساختگی نا مفهوم با سابقه‌ای بیش از 5سال درحوزه
              مدیریت و رهبری توانسته‌ام با ارتقاء عملکرد تیم و بهبودفرآیندهای
              کاری، به دفتر خود اعتبـــار و موفقیــت بیشتری بخشم.
            </Typography>
            <Grid className="button-wrapper">
              <Grid>
                <CustomButton text="دریافت مشاوره" variant="contained" />
              </Grid>
              <CustomImage className="vector" src={vector} />
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} className="image-wrappper">
            <Box component="div">
              <Box component="img" src={ImageOfMe} />
            </Box>
          </Grid>
        </Grid>
      </AnimationSlideIn>
    </Grid>
  );
});
