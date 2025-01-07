import { memo } from "react";

import { map } from "lodash";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";

import {
  sendIcon,
  twitterIcon,
  youtubeIcon,
  faceBookIcon,
  instagramIcon,
  messengerIcon,
} from "../other/SvgComponent";
import { navbarValues } from "../../data/other";
import { AnimationSlideIn } from "./AnimateComponent";
import { CustomImage } from "../controller/CustomImage";
import { footerSX } from "../../helper/styleObjects/footer";
import { CustomTextfield } from "../controller/CustomTextfield";

import logo from "../../assets/images/vectors/logo.webp";

export const Footer = memo(() => {
  const navigate = useNavigate();

  return (
    <Grid sx={footerSX}>
      <Grid container className="content">
        <Grid item md={3.3} className="social-content">
          <AnimationSlideIn direction="left">
            <CustomImage src={logo} className="logo" />
          </AnimationSlideIn>
          <AnimationSlideIn direction="left">
            <Typography className="description">
              لورم اسپیس با تجربه و الهام ‌بخش. باسـابقــه ای بیش از 5سال درحوزه
              مدیریت بیشتری بــرای شــما بخشم. 5ســـال درحوزه مدیریـــت بیشتری
              بــرای شــــما بخشـــم. 5ســــال در حوزه مدیریت بیشتری بــرای شما
            </Typography>
          </AnimationSlideIn>
          <AnimationSlideIn direction="left">
            <Grid className="socail-boxes">
              {map(socailIcons, (item, index) => (
                <Box key={index} component="div" className="social-box">
                  {item}
                </Box>
              ))}
            </Grid>
          </AnimationSlideIn>
        </Grid>
        <Grid item md={2} className="navigation-content">
          <AnimationSlideIn direction="left" className="navigation-content">
            <>
              <Typography className="title">دسترسی سریع</Typography>
              {map(navbarValues, ({ name, url }, index) => (
                <Typography
                  key={index}
                  onClick={() => navigate(url)}
                  className="text"
                >
                  {name}
                </Typography>
              ))}
            </>
          </AnimationSlideIn>
        </Grid>
        <Grid item md={2} className="navigation-content">
          <AnimationSlideIn direction="right" className="navigation-content">
            <>
              <Typography className="title">راه های ارتباطی</Typography>
              <Typography className="text">+989383823445</Typography>
              <Typography className="text">WWW.abc.com</Typography>
              <Typography className="text">abc@gmail.com</Typography>
            </>
          </AnimationSlideIn>
        </Grid>
        <Grid item md={3} className="send-email-content">
          <AnimationSlideIn className="send-email-content" direction="right">
            <>
              <Typography className="title">
                ایمیل خود را وارد و از اطلاعات ما با خبر شوید
              </Typography>
              <CustomTextfield
                className="email-input"
                placeholder="ایمیل آدرس...."
                endIcon={sendIcon()}
                setting={{ noBorder: true, isIconButton: true }}
              />
            </>
          </AnimationSlideIn>
        </Grid>
      </Grid>
      <Grid className="copyright-text">
        <Typography className="text">تمامی حقوق محفوظ است.</Typography>
      </Grid>
    </Grid>
  );
});

const socailIcons = [
  instagramIcon(),
  faceBookIcon(),
  twitterIcon(),
  messengerIcon(),
  youtubeIcon(),
];
