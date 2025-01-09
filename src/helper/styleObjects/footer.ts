import { SxProps, Theme } from "@mui/material";

import { COLOR_WHITE, COLOR_PRIMARY } from "../constants/colors";
import { FONT_LABEL_LARGE, FONT_BODY_MEDIUM2 } from "../constants/fonts";
import {
  SPACE_H2,
  SPACE_D2,
  SPACE_M1,
  SPACE_H3,
  SPACE_H1,
} from "../constants/spaces";

export const footerSX: SxProps<Theme> = {
  pt: SPACE_H3,
  pb: SPACE_D2,
  mt: SPACE_H2,
  px: SPACE_H3,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: COLOR_PRIMARY,
  "& .content": {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    "& .social-content": {
      gap: "26px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      "& .logo": {
        width: "150px",
      },
      "& .name": {
        fontSize: "20px",
        color: COLOR_WHITE,
        fontWeight: "700",
      },
      "& .description": {
        fontWeight: "400",
        color: "#ECECEC",
        fontSize: FONT_LABEL_LARGE,
      },
      "& .socail-boxes": {
        width: "230px",
        display: "flex",
        "& .social-box": {
          m: "auto",
          width: "40px",
          height: "40px",
          display: "flex",
          cursor: "pointer",
          borderRadius: "50%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#5A94FF",
          "&:hover": {
            "& svg": {
              transition: "all 0.4s",
              transform: "scale(1.2)",
            },
          },
        },
      },
    },
    "& .navigation-content": {
      gap: "14px",
      display: "flex",
      flexDirection: "column",
      "& .title": {
        lineHeight: SPACE_H1,
        fontWeight: "600",
        color: COLOR_WHITE,
        fontSize: FONT_BODY_MEDIUM2,
      },
      "& .text": {
        cursor: "pointer",
        fontWeight: "400",
        transition: "all 0.4s",
        color: "#F1F1F1",
        fontSize: FONT_LABEL_LARGE,
        "&:hover": {
          color: COLOR_WHITE,
        },
      },
    },

    "& .send-email-content": {
      "& .title": {
        mb: SPACE_M1,
        fontWeight: "400",
        color: "#F1F1F1",
        fontSize: "16px",
      },
      "& .email-input": {
        "& .MuiInputBase-root": {
          backgroundColor: COLOR_WHITE,
        },
      },
      "& .logo-content": {
        mt: "35px",
        width: "100%",
        display: "flex",
        justifyContent: "end",
        "& .logo-wrapper": {
          width: "110px",
          height: "110px",
          backgroundColor: COLOR_WHITE,
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      },
    },
  },
  "& .copyright-text": {
    mt: SPACE_D2,
    pt: SPACE_D2,
    width: "100%",
    borderTop: "1px solid #88B2FF",
    "& .text": {
      fontWeight: "600",
      textAlign: "center",
      color: "#F1F1F1",
      fontSize: "14px",
    },
  },
};
