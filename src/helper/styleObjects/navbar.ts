import { SxProps, Theme } from "@mui/material";

import {
  COLOR_WHITE,
  COLOR_PRIMARY,
  COLOR_SECEONDRY,
  COLOR_TEXT_GRAY,
} from "../constants/colors";
import { MAX_WIDTH } from "../constants/static";
import { SPACE_H2, SPACE_S1, SPACE_XS1 } from "../constants/spaces";
import { FONT_BODY_SMALL, FONT_CAPTION_LARGE } from "../constants/fonts";

export const navbarSX: SxProps<Theme> = {
  mx: "auto",
  px: SPACE_XS1,
  py: SPACE_XS1,
  top: SPACE_H2,
  zIndex: "3000",
  display: "flex",
  width: MAX_WIDTH,
  position: "fixed",
  alignItems: "center",
  borderRadius: "34px",
  animation: "fadeIn 1s",
  backgroundColor: COLOR_WHITE,
  justifyContent: "space-between",
  boxShadow: " 1px 1px 20px 6px #10182808",

  "& .logo": {
    width: "95px",
    height: "45px",
  },
  "& .nav-list-wrapper": {
    gap: "60px",
    display: "flex",

    "& .navbar-value-name": {
      zIndex: "20",
      cursor: "pointer",
      position: "relative",
      color: COLOR_TEXT_GRAY,
      fontSize: FONT_BODY_SMALL,
      fontWeight: "600",
      "&.active": {
        color: COLOR_PRIMARY,
        "&:before": {
          transform: " scaleX(1)",
          transformOrigin: "bottom right",
        },
      },
      "&:hover ": {
        "&:before": {
          transform: " scaleX(1)",
          transformOrigin: "bottom right",
        },
      },
      "&:before": {
        content: "''",
        width: "100%",
        height: "1.5px",
        display: "block",
        position: "absolute",
        left: 0,
        bottom: "-5px",
        zIndex: "-1",
        transform: " scaleX(0)",
        background: COLOR_PRIMARY,
        transition: "transform .3s ease",
        transformOrigin: "bottom left",
      },
    },
  },
  "& .actions-wrapper": {
    gap: SPACE_S1,
    display: "flex",
    position: "relative",
    alignItems: "flex-start",
    "& .icon-navbar": {
      zIndex: "33",
      cursor: "pointer",
      position: "relative",
      transition: "transform 0.4s",
      "&:hover": {
        transform: "scale(1.2)",
      },
      "& span": {
        top: "-4px",
        right: "-4px",
        width: "14px",
        height: "14px",
        display: "flex",
        borderRadius: "50%",
        position: "absolute",
        alignItems: "center",
        color: COLOR_SECEONDRY,
        background: COLOR_WHITE,
        justifyContent: "center",
        fontSize: FONT_CAPTION_LARGE,
      },
    },
  },
};
