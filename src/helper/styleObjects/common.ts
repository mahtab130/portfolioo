import { SxProps, Theme } from "@mui/material";

import {
  SPACE_H2,
  SPACE_D1,
  SPACE_M2,
  SPACE_M3,
  SPACE_XS1,
  SPACE_S2,
  SPACE_M4,
} from "../constants/spaces";
import {
  COLOR_TEXT,
  COLOR_GRAY,
  COLOR_WHITE,
  COLOR_PRIMARY,
  COLOR_SECEONDRY,
  COLOR_BACKGROUND,
  COLOR_TEXT_WHITE,
} from "../constants/colors";
import {
  FONT_LABEL_LARGE,
  FONT_WEIGHT_BLOD,
  FONT_BODY_MEDIUM2,
  FONT_BODY_MEDIUM1,
  FONT_CAPTION_LARGE,
  FONT_BODY_SMALL,
  FONT_TITLE_MEDIUM,
} from "../constants/fonts";
import { MAX_WIDTH } from "../constants/static";

export const categoryCardSX: SxProps<Theme> = {
  px: SPACE_D1,
  width: "100%",
  display: "flex",
  cursor: "pointer",
  maxHeight: "175px",
  overflow: "hidden",
  borderRadius: "16px",
  position: "relative",
  transition: "all 0.6s",
  justifyContent: "space-between",
  background:
    "linear-gradient(296.92deg, #568A9E 15.8%, #6A99AB 23.43%, #76A3B4 28.59%, #6D9FB1 35.91%, #6A9BAE 44.85%, #568A9E 59.37%, #568A9E 67.78%, #568A9E 75.24%, #568A9E 83.27%)",
  "&:hover": {
    transform: "translateY(-10px)",
  },
  "& .title-wrapper": {
    py: SPACE_D1,
    display: "flex",
    gap: SPACE_XS1,
    flexDirection: "column",
    "& .title": {
      fontSize: FONT_BODY_MEDIUM1,
      fontWeight: FONT_WEIGHT_BLOD,
      color: COLOR_WHITE,
    },
    "& .vector": {
      left: "-15px",
      width: "110px",
      height: "110px",
      bottom: "-15px",
      position: "absolute",
    },
  },
  "& .image": {
    height: "175px",
  },
};

export const productCardSX = (
  variant: IProductCard["variant"]
): SxProps<Theme> => ({
  width: "100%",
  height: "auto",
  overflow: "hidden",
  cursor: "pointer",
  borderRadius: "14px",
  boxShadow: variant == "cart" ? "none" : "0px 1px 2px 0px #1018280D  ",
  "&:hover": {
    "& .texts-wrapper": {
      "& .price-wrapper": {
        "& .add-to-cart": {
          "&:before": {
            width: "100%",
            height: "40px",
            borderRadius: "50px",
          },
        },
      },
    },
    "& .image-wrapper": {
      "& .image-product": {
        transform: "scale(1.13)",
      },
    },
  },
  "& .image-wrapper": {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    height:
      variant == "sale"
        ? "350px"
        : variant == "search" || variant == "cart"
        ? "320px"
        : " 370px",
    borderRadius:
      variant == "sale" || variant == "search" || variant == "cart"
        ? "14px"
        : "0px",
    background:
      variant == "category"
        ? "linear-gradient(154.68deg, #E7EDEF 24.32%, #E7EDEF 99.84%)"
        : " linear-gradient(154.68deg, #E7EDEF 24.32%, #FFFFFF 45.27%, #FFFFFF 56.96%, #E7EDEF 99.84%)",
    "& .image-product": {
      height: "300px",
      transition: "all .4s ease",
    },
  },
  "& .texts-wrapper": {
    p: SPACE_M3,
    width: "100%",
    display: "flex",
    textAlign: variant == "search" || variant == "cart" ? "center" : "unset",
    rowGap: variant == "sale" ? SPACE_S2 : SPACE_M3,
    flexDirection: "column",
    backgroundColor:
      variant == "sale" || variant == "search"
        ? COLOR_SECEONDRY
        : COLOR_BACKGROUND,
    "& .title": {
      color:
        variant == "sale" || variant == "search" ? COLOR_WHITE : COLOR_TEXT,
      fontWeight: FONT_WEIGHT_BLOD,
      fontSize: FONT_BODY_MEDIUM2,
    },
    "& .price-wrapper": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "& .add-to-cart": {
        pr: SPACE_M3,
        gap: SPACE_S2,
        display: "flex",
        fontWeight: FONT_WEIGHT_BLOD,
        cursor: "pointer",
        position: "relative",
        alignItems: "center",
        fontSize: FONT_CAPTION_LARGE,
        zIndex: "2",
        "& svg": {
          width: "12px",
          height: "12px",
        },
        "&:before": {
          top: "-11px",
          left: "-8px",
          zIndex: "-2",
          width: "40px",
          content: "''",
          height: "40px",
          display: "block",
          borderRadius: "50%",
          position: "absolute",
          transition: "all .4s ease",
          backgroundColor: COLOR_PRIMARY,
        },
      },
      "& .price": {
        color: variant == "sale" ? COLOR_WHITE : COLOR_TEXT,
        fontWeight: FONT_WEIGHT_BLOD,
        fontSize: FONT_LABEL_LARGE,
      },
    },
  },
});

export const blogCardSX: SxProps<Theme> = {
  width: "100%",
  height: "auto",
  maxWidth: "400px",
  cursor: "pointer",
  overflow: "hidden",
  borderRadius: "10px",
  "&:hover": {
    "& .image-wrapper": {
      "& .blog-image": {
        transform: "scale(1.1)",
      },
    },
  },
  boxShadow: "0px 4px 24px 4px #B5B5B51F , 0px 4px 24px 4px #B5B5B51F",
  "& .image-wrapper": {
    width: "100%",
    height: "225px",
    overflow: "hidden",
    "& .blog-image": {
      width: "100%",
      height: "225px",
      transition: "all 0.4s",
    },
  },
  "& .text-section": {
    p: SPACE_M2,
    display: "flex",
    rowGap: SPACE_H2,
    flexDirection: "column",
    justifyContent: "space-between",
    "& .text-wrapper": {
      display: "flex",
      rowGap: SPACE_M2,
      flexDirection: "column",
      "& .title": {
        fontWeight: FONT_WEIGHT_BLOD,
        fontSize: FONT_BODY_MEDIUM2,
      },
      "& .description": {
        color: COLOR_GRAY,
        fontSize: FONT_LABEL_LARGE,
      },
    },
    "& .button-wrapper": {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      "& .button": {
        p: "4px",
        width: "fit-content",
        fontSize: FONT_LABEL_LARGE,
        textTransform: "capitalize",
        "&:hover": {
          outline: "none",
        },
        "& .MuiButton-icon": {
          marginRight: "15px",
        },
      },
    },
  },
};

export const customTitle = (color?: string): SxProps<Theme> => ({
  gap: "8px",
  display: "flex",
  flexDirection: "column",
  width: "fit-content",
  "& .pre-title": {
    gap: "2px",
    display: "flex",
    fontWeight: "600",
    alignItems: "center",
    fontSize: FONT_BODY_MEDIUM2,
    color: color || "#727272",
  },
  "& .title": {
    gap: "8px",
    display: "flex",
    fontSize: FONT_TITLE_MEDIUM,
    fontWeight: "800 !important",
    flexDirection: "row",
  },
});

export const serviceBoxSX: SxProps<Theme> = {
  p: "20px",
  gap: "16px",
  width: "400px",
  display: "flex",
  maxWidth: "400px",
  flexDirection: "column",
  justifyContent: "space-between",
  borderBottomLeftRadius: "12px",
  borderBottomRightRadius: "12px",
  borderTop: `14px solid ${COLOR_PRIMARY}`,
  boxShadow: " 0px 8px 8px -4px #10182808 ,0px 20px 24px -4px #10182814",
  transition: "0.3s",
  "&:hover": {
    backgroundColor: COLOR_TEXT,
    "& .title": {
      color: COLOR_WHITE,
    },
    "& .description": {
      color: "#C4C4C4",
    },
    "& .icon": {
      borderColor: COLOR_WHITE,
      "& svg, svg path": {
        fill: COLOR_WHITE,
        stroke: COLOR_WHITE,
      },
    },
  },
  "& .icon": {
    width: "66px",
    height: "66px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: `1px solid ${COLOR_PRIMARY}`,
    "& svg": {
      width: "44px",
      height: "44px",
    },
  },
  "& .title": {
    fontSize: "26px",
    fontWeight: "700",
  },
  "& .description": {
    fontSize: "16px",
    fontWeight: "400",
    color: COLOR_TEXT_WHITE,
  },
};

export const awardBoxSX = (iconColor?: string): SxProps<Theme> => ({
  gap: "10px",
  width: "390px",
  display: "flex",
  maxWidth: "400px",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-between",
  "& .icon": {
    width: "70px",
    height: "70px",
    display: "flex",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: iconColor || COLOR_PRIMARY,
    boxShadow: "0px 0px 18px 0px #377DFF80",
    "& svg": {
      width: "30px",
      height: "30px",
    },
  },
  "& .title": {
    mt: "14px",
    fontSize: "24px",
    fontWeight: "700",
  },
  "& .description": {
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "400",
    color: "#848484",
  },
});

export const educationBoxSX: SxProps<Theme> = {
  gap: "34px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "& .title": {
    pb: "6px",
    width: "100%",
    fontSize: "28px",
    fontWeight: "700",
    color: COLOR_PRIMARY,
    borderBottom: "1px solid #CFCFCF",
  },
  "& .description": {
    // mt: "34px",
    gap: "34px",
    width: "100%",
    display: "flex",
    flexDirection: "column",

    "& .container": {
      width: "100%",
      display: "flex",
      alignItems: "start",
      flexDirection: "row",
      justifyContent: "space-between",
      "& .titles-wrapper": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "& .title-2": {
          fontSize: "24px",
          fontWeight: "700",
        },
        "& .subtitle": {
          fontSize: "18px",
          fontWeight: "600",
          color: "#777777",
        },
      },
      "& .years-wrapper": {
        py: "4px",
        gap: "2px",
        px: "18px",
        display: "flex",
        borderRadius: "6px",
        backgroundColor: "#F5F5F5",
        "& .year": {
          fontSize: "16px",
          fontWeight: "600",
        },
      },
    },
  },
};

export const researchBoxSX: SxProps<Theme> = {
  pt: "30px",
  pb: "12px",
  width: "100%",
  display: "flex",
  cursor: "pointer",
  transition: "0.3s",
  borderRadius: "34px",
  position: "relative",
  flexDirection: "column",
  justifyContent: "space-between",
  boxShadow: "1px 1px 20px 6px #1018280F",
  "&:hover": {
    backgroundColor: "#3D3F3C",
    borderBottomLeftRadius: "245px",
    "& .title": {
      color: COLOR_WHITE,
    },
    "& .description": {
      color: "#C4C4C4",
    },
    "& .divider": {
      color: "#7B7B7B",
    },
    "& .image": {
      borderBottomLeftRadius: "317px",
      boxShadow: "0px 0px 0px 6px #FFFFFF14",
    },
    "& .arrow-wrapper": {
      visibility: "visible",
    },
  },

  "& .title": {
    px: "30px",
    fontSize: "28px",
    fontWeight: "700",
    color: COLOR_PRIMARY,
  },
  "& .description": {
    px: "30px",
    gap: "34px",
    width: "100%",
    display: "flex",
    color: "#848484",
    flexDirection: "column",
  },
  "& .image": {
    mx: "12px",
    height: "260px",
    borderRadius: "32px",
    boxShadow: "0px 0px 0px 6px #377DFF14",
  },
  "& .divider": {
    my: "20px",
    height: "1px",
    backgroundColor: "#F1F1F1",
  },
  "& .arrow-wrapper": {
    left: "0",
    bottom: "0",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    visibility: "hidden",
    position: "absolute",
    backgroundColor: "#3D3F3C",
    boxShadow: "0px 0px 0px 14px #FFFFFF",
  },
};

export const contentProviderSX = (
  reverse?: boolean,
  imageWidth?: string
): SxProps<Theme> => ({
  mx: "auto",
  width: "100%",
  display: "flex",
  maxWidth: MAX_WIDTH,
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: reverse ? "row-reverse" : "row",
  "& .right-section": {
    display: "flex",
    rowGap: SPACE_M2,
    position: "relative",
    flexDirection: "column",
    "& .content": {
      width: "100%",
    },
    "& .vector": {
      width: "100px",
      top: "0px",
      position: "absolute",
      right: "0px",
      zIndex: 22000,
    },
  },
  "& .left-section": {
    display: "flex",
    position: "relative",
    justifyContent: reverse ? "start" : "end",
    "& .image": {
      width: imageWidth || "385px",
    },
  },
});

export const headingPageSX = (image?: string): SxProps<Theme> => ({
  width: "100%",
  height: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${image})`,
  "& .leaner": {
    height: "100vh",
    background:
      "linear-gradient(269.99deg, rgba(7, 7, 7, 0.94) 0.01%, rgba(7, 7, 7, 0.816088) 31.5%, rgba(7, 7, 7, 0.0117647) 93.4%, rgba(7, 7, 7, 0) 97.49%)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none",
  },
  "& .container": {
    mx: "80px",
    height: "100%",
    display: "flex",
    maxWidth: "800px",
    alignItems: "start",
    flexDirection: "column",
    justifyContent: "center",
    "& .title": {
      display: "flex",
      color: COLOR_PRIMARY,
      fontWeight: FONT_WEIGHT_BLOD,
      fontSize: "48px",
      alignItems: "end",
      gap: "16px",
      "& .vector": {
        height: "49px",
        width: "112px",
      },
    },
    "& .subtitle": {
      mt: "14px",
      color: COLOR_WHITE,
      fontSize: "18px",
      fontWeight: "400",
    },
  },
});

export const profileCardSX: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  gap: SPACE_XS1,
  alignItems: "center",
  "& .profile-image": {
    width: "80px",
    height: "80px",
    borderRadius: "10px",
    objectFit: "scale-down",
    background: "linear-gradient(154.68deg, #E7EDEF 24.32%, #E7EDEF 99.84%)",
  },
  "& .profile-name": {
    color: "#686868",
    fontSize: FONT_BODY_SMALL,
    fontWeight: FONT_WEIGHT_BLOD,
  },
};

export const dialogContentSX: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  alignItems: "center",
  mb: SPACE_D1,
  gap: SPACE_M4,
  "& .title": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: FONT_BODY_MEDIUM1,
    fontWeight: FONT_WEIGHT_BLOD,
    gap: SPACE_XS1,
  },
  "& .description": {
    textAlign: "center",
    fontSize: FONT_BODY_SMALL,
    fontWeight: FONT_WEIGHT_BLOD,
  },
};
