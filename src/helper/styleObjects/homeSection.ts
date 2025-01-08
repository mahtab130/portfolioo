import { SxProps, Theme } from "@mui/material";

import { SPACE_H2, SPACE_XS1, SPACE_D2 } from "../constants/spaces";
import {
  COLOR_WHITE,
  COLOR_BACKGROUND,
  COLOR_TEXT_WHITE,
} from "../constants/colors";
import {
  FONT_WEIGHT_BLOD,
  FONT_BODY_MEDIUM2,
  FONT_HEADING_LARGE,
} from "../constants/fonts";

// import backgroundImage from "../../assets/images/home/background-image.webp";
import { MAX_WIDTH } from "../constants/static";

export const homeSectionSX: SxProps<Theme> = {
  width: "100%",
  height: "100vh",
  display: "flex",
  position: "relative",
  justifyContent: "center",
  backgroundColor: COLOR_BACKGROUND,
  "& .background-image": {
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundSize: "cover",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    // backgroundImage: `url(${backgroundImage})`,
  },
  "& .container": {
    mx: "auto",
    my: SPACE_H2,
    zIndex: "100",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "space-between",
    maxWidth: MAX_WIDTH,
    position: "relative",
    "& .texts-wrapper": {
      pt: SPACE_H2,
      display: "flex",
      height: "100%",
      position: "relative",
      flexDirection: "column",
      justifyContent: "center",
      "& .back-image": {
        position: "absolute",
        top: "-60px",
        right: "120px",
        width: "250px",
        height: "250px",
      },
      "& .title": {
        lineHeight: "90px",
        color: COLOR_WHITE,
        animation: "1s ease-out 0s 1 slideInLeft",
        fontWeight: FONT_WEIGHT_BLOD,
        fontSize: FONT_HEADING_LARGE,
      },
      "& .subtitle": {
        mt: SPACE_XS1,
        color: COLOR_TEXT_WHITE,
        fontSize: FONT_BODY_MEDIUM2,
      },
      "& .button-wrapper": {
        mt: SPACE_D2,
        zIndex: "22",
      },
      "& .vector-arrow-img": {
        left: "70px",
        width: "470px",
        bottom: "-160px",
        position: "absolute",
      },
    },
    "& .image-wrappper": {
      width: "50%",
      position: "relative",

      "& div": {
        left: "0",
        top: "-50px",
        height: "100%",
        width: "530px",
        display: "flex",
        alignItems: "end",
        position: "absolute",
        backgroundColor: "#EFF5FF",
      },
      "& img": {
        mx: "auto",
        width: "425px",
        height: "630px",
      },
    },
  },
};

export const servicesSectionSX: SxProps<Theme> = {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& .container": {
    width: "100%",
    display: "flex",
    maxWidth: MAX_WIDTH,
    flexDirection: "column",
    gap: "46px",
    "& .title-wrapper": {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      "& .button-wrapper": {
        display: "flex",
        alignItems: "end",
      },
    },
    "& .box-container": {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
  },
};

export const aboutMeSectionSX: SxProps<Theme> = {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& .container": {
    width: "100%",
    display: "flex",
    maxWidth: MAX_WIDTH,
    flexDirection: "column",
    gap: "46px",
    "& .title-wrapper": {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      "& .button-wrapper": {
        display: "flex",
        alignItems: "end",
      },
    },
    "& .box-container": {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
  },
};

export const researchSectionSX: SxProps<Theme> = {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& .container": {
    width: "100%",
    display: "flex",
    maxWidth: MAX_WIDTH,
    flexDirection: "column",
    gap: "46px",
    "& .title-wrapper": {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      "& .button-wrapper": {
        display: "flex",
        alignItems: "end",
      },
    },
    "& .box-container": {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
  },
};

export const awardSectionSX: SxProps<Theme> = {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#EFF5FF",
  "& .container": {
    width: "100%",
    display: "flex",
    maxWidth: MAX_WIDTH,
    flexDirection: "column",
    gap: "46px",
    "& .title-wrapper": {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      "& .button-wrapper": {
        display: "flex",
        alignItems: "end",
      },
    },
    "& .box-container": {
      gap: "80px",
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
  },
};

export const blogSX: SxProps<Theme> = {
  m: "auto",
  width: "100%",
  height: "100vh",
  display: "flex",
  maxWidth: MAX_WIDTH,
  flexDirection: "column",
  justifyContent: "center",
};
