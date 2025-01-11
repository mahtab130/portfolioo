import { memo, useState } from "react";

import { Box, Grid, Typography } from "@mui/material";

import { CustomTitle } from "../common/CustomTitle";
import { CustomImage } from "../controller/CustomImage";
import { CustomButtonV2 } from "../controller/CustomButton";
import { AnimationSlideIn } from "../common/AnimateComponent";
import { homeSectionSX } from "../../helper/styleObjects/homeSection";

import { CustomRadio } from "../controller/CustomRadio";
import { CustomDialog } from "../controller/CustomDialog";
import { consultaionDialog } from "../../helper/styleObjects/common";
import { CustomTextarea, CustomTextfield } from "../controller/CustomTextfield";

import ImageOfMe from "../../assets/images/home/home-man.webp";
import vector from "../../assets/images/vectors/arrow-home.webp";

export const HomeSection = memo(() => {
  const [openconsultation, setopenconsultation] = useState(false);
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
                <CustomButtonV2
                  text="دریافت مشاوره"
                  variant="contained"
                  onClick={() => setopenconsultation(true)}
                />
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

      <CustomDialog
        onclose={() => setopenconsultation(false)}
        title="دریافت مشاوره رایگان"
        open={openconsultation}
        dialogContent={<ConsultaionDialog />}
        dialogAction={{
          submitButton: {
            text: "ارســـــال",
            variant: "contained",
            onClick: () => setopenconsultation(false),
          },
        }}
      />
    </Grid>
  );
});

const ConsultaionDialog = memo(() => {
  return (
    <Grid sx={consultaionDialog}>
      <Typography className="text">
        لورم ایپسوم مــــتن ساختگــی با تولید سادگی نامـــفهوم از صنـــعت چاپ، و
        با همراه اسـتفاده از طراحان گرافیــــــک اســـت، چاپگرها و متون بلکه
        روزنامه است.
      </Typography>
      <CustomTextfield placeholder="نام و نام خانوادگی" />
      <CustomTextfield placeholder="ایمیل" />
      <CustomTextarea placeholder="پیام خود را اینجا بنویسید" />
      <Grid className="radio-wrapper">
        <Typography className="label-radio">
          در چه زمانی با شما تماس بگیریم؟
        </Typography>
        <Grid className="radios">
          <CustomRadio label={"اسرع وقت"} />
          <CustomRadio label={"۹ الی ۱۲"} />
          <CustomRadio label={"۱۴ الی ۲۰"} />
        </Grid>
      </Grid>
    </Grid>
  );
});
