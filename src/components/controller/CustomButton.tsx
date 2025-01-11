import { DOMAttributes, memo } from "react";

import { merge } from "lodash";
import {
  Box,
  Grid,
  Theme,
  Button,
  SxProps,
  ButtonTypeMap,
  ButtonBaseProps,
} from "@mui/material";

import {
  COLOR_WHITE,
  COLOR_PRIMARY,
  COLOR_TEXT_GRAY,
  COLOR_TEXT_WHITE,
} from "../../helper/constants/colors";
import {
  FONT_WEIGHT_BLOD,
  FONT_LABEL_MEDIUM,
} from "../../helper/constants/fonts";
import { arrowLeftCrookedIcon } from "../other/SvgComponent";
import { SPACE_D1, SPACE_XS1, SPACE_M2 } from "../../helper/constants/spaces";

export type TCustomButton = ButtonTypeMap<
  {
    text: string;
    customColor?: string;
  },
  "button"
>["props"] &
  ButtonBaseProps &
  DOMAttributes<unknown>;

export const CustomButton = memo<TCustomButton>(
  ({ text, sx, customColor, ...props }) => {
    const mergeSx = merge({}, buttonSX(customColor), sx);

    return (
      <Button sx={mergeSx} {...props}>
        {text}
      </Button>
    );
  }
);

const buttonSX = (customColor?: string): SxProps<Theme> => ({
  px: SPACE_D1,
  py: SPACE_XS1,
  fontWeight: FONT_WEIGHT_BLOD,
  lineHeight: SPACE_M2,
  boxShadow: "none",
  borderRadius: "24px",
  fontSize: FONT_LABEL_MEDIUM,
  textTransform: "capitalize",
  outline: "1px solid transparent",
  "&.MuiButton-contained": {
    transition: "0.3s",
    color: COLOR_WHITE,
    background: customColor,
    border: `1px solid transparent`,
    "&:hover": {
      boxShadow: "none",
      color: customColor ?? COLOR_PRIMARY,
      backgroundColor: "transparent",
      outline: "1px solid " + (customColor ?? COLOR_PRIMARY),
    },
  },
  "&.MuiButton-outlined": {
    color: customColor,
    backgroundColor: COLOR_WHITE,
    border: `1px solid ${
      customColor == COLOR_TEXT_GRAY ? COLOR_TEXT_WHITE : customColor
    }`,
    "& .MuiButton-icon": {
      marginRight: "20px",
    },
    "&:hover": {
      backgroundColor: `${customColor}10`,
    },
  },
});

export const CustomButtonV2 = memo<TCustomButton>(({ text, ...props }) => {
  return (
    <Grid sx={customButtonV2SX}>
      <Grid className="arrow">
        <Box component="span">{arrowLeftCrookedIcon()}</Box>
      </Grid>
      <CustomButton text={text} {...props} />
    </Grid>
  );
});

const customButtonV2SX: SxProps<Theme> = {
  height: "40px",
  display: "flex",
  width: "fit-content",
  alignItems: "center",
  position: "relative",
  "& .arrow": {
    p: "6px",
    width: "120px",
    height: "100%",
    borderRadius: "24px",
    position: "absolute",
    backgroundColor: "#3D3F3C",
    "& span": {
      width: "28px",
      height: "28px",
      display: "flex",
      borderRadius: "50%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: COLOR_WHITE,
    },
  },
  "& .MuiButton-contained": {
    mr: "40px",
    px: "15px",
    height: "100%",
    "&:hover": {
      outline: "none",
      color: COLOR_WHITE,
      backgroundColor: COLOR_PRIMARY,
    },
  },
};
