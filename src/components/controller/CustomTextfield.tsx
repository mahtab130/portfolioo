import {
  DetailedHTMLProps,
  memo,
  TextareaHTMLAttributes,
  useRef,
  useState,
} from "react";

import {
  Grid,
  Theme,
  SxProps,
  TextField,
  TextFieldProps,
  TextFieldVariants,
} from "@mui/material";

import { CustomLabel } from "./CustomLabel";
import { SPACE_S4 } from "../../helper/constants/spaces";
import { COLOR_TEXT, COLOR_PRIMARY } from "../../helper/constants/colors";

export type TCustomTextfield =
  | {
      variant?: TextFieldVariants;
    } & Omit<TextFieldProps, "variant"> & {
        required?: boolean;
        customLabel?: string;
        type?: "password" | "textArea";
        setting?: {
          noBorder?: boolean;
          labelColor?: string;
          hasDelete?: boolean;
          customColor?: string;
          isIconButton?: boolean;
          labelSize?: ICustomLabel["size"];
        };
        endIcon?: JSX.Element;
        startIcon?: JSX.Element;
      };

export type TCustomTextarea = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  customLabel?: string;
};

export const CustomTextfield = memo<TCustomTextfield>(
  ({
    type,
    setting,
    endIcon,
    required,
    onChange,
    startIcon,
    customLabel,
    ...props
  }) => {
    const { noBorder, labelSize, hasDelete, labelColor, customColor } =
      setting ?? {};
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [, keyUp] = useState<HTMLDivElement>();

    const hasIcon = endIcon ? true : false;

    return (
      <Grid
        className="textfield-wrapper"
        sx={textfieldSX(hasIcon, customColor, noBorder)}
      >
        {customLabel && (
          <CustomLabel
            size={labelSize}
            color={labelColor}
            label={customLabel || ""}
            required={required}
          />
        )}
        <TextField
          placeholder={customLabel}
          inputRef={inputRef}
          onChange={onChange}
          onKeyUp={
            hasDelete && !onChange
              ? (e) => keyUp(e.target as HTMLDivElement)
              : undefined
          }
          {...props}
          InputProps={{
            startAdornment: <>{startIcon}</>,
            endAdornment: <>{endIcon}</>,
          }}
        />
      </Grid>
    );
  }
);

const textfieldSX = (
  hasIcon?: boolean,
  customColor?: string,
  noBorder?: boolean
): SxProps<Theme> => ({
  display: "flex",
  flexDirection: "column",
  "& .MuiTextField-root": {
    width: "100%",
    "& .MuiInputBase-root": {
      height: "50px",
      overflow: "hidden",
      pl: hasIcon ? "0px" : undefined,
      borderRadius: "8px",
      "& fieldset": {
        border: noBorder ? "none" : "1px solid " + "#C4C4C4" || customColor,
      },
      "& .MuiInputBase-input": {
        fontSize: "16px",
        fontWeight: "600",
        color: customColor || COLOR_TEXT,
        "&::placeholder": {
          opacity: "1",
          color: "#747474",
        },
      },
      "&.MuiInput-underline ": {
        "&:before": {
          borderColor: COLOR_PRIMARY,
          content: '""',
          bottom: "6px",
        },
        "&:after": {
          display: "none",
        },
      },
    },

    "& .pass-icon": {
      height: "18px",
      p: SPACE_S4,
      cursor: "pointer",
      "&:hover": {
        transition: "all 0.4s",
        transform: "scale(1.2)",
      },
    },
    "& .delete-icon": {
      height: "20px",
      cursor: "pointer",
      "&:hover": {
        transition: "all 0.4s",
        transform: "scale(1.2)",
      },
    },
  },
});

export const CustomTextarea = memo<TCustomTextarea>(
  ({ customLabel, ...props }) => {
    return (
      <Grid className="textfield-wrapper" sx={textareaSX}>
        {customLabel && <CustomLabel size="small" label={customLabel || ""} />}
        <textarea {...props} />
      </Grid>
    );
  }
);

const textareaSX: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  "& textarea": {
    p: "14px",
    fontSize: "16px",
    fontWeight: "600",
    color: COLOR_TEXT,
    minHeight: "190px",
    height: "190px !important",
    borderRadius: "8px",
    fontFamily: "Yekan Bakh",
    border: "1px solid #C4C4C4",
    "&:focus-visible": {
      outline: "1px solid #C4C4C4",
    },
    "&::placeholder": {
      opacity: "1",
      color: "#747474",
    },
  },
};
