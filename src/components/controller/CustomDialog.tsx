import { memo } from "react";

import {
  Theme,
  Dialog,
  SxProps,
  DialogProps,
  DialogContent,
  DialogActions,
  DialogTitle,
  Box,
} from "@mui/material";

import { CustomButton, TCustomButton } from "./CustomButton";
import { COLOR_TEXT, COLOR_WHITE } from "../../helper/constants/colors";
import { SPACE_M4 } from "../../helper/constants/spaces";
import { closeIcon } from "../other/SvgComponent";

interface IButton
  extends Pick<TCustomButton, "variant" | "customColor" | "onClick"> {
  text?: string;
}

interface ICustomDialog extends DialogProps {
  title: string;
  dialogAction: {
    submitButton?: IButton;
  };
  dialogContent: JSX.Element;
  onclose: () => void;
}

export const CustomDialog = memo<ICustomDialog>(
  ({ dialogAction, dialogContent, open, title, onclose }) => {
    const { submitButton } = dialogAction;
    return (
      <Dialog sx={dialogSX} open={open}>
        <DialogTitle>
          {title}
          <Box component="span" onClick={onclose}>
            {closeIcon()}
          </Box>
        </DialogTitle>
        <DialogContent>{dialogContent}</DialogContent>
        {dialogAction && (
          <DialogActions>
            <CustomButton
              text={submitButton?.text || "Submit"}
              {...submitButton}
            />
          </DialogActions>
        )}
      </Dialog>
    );
  }
);

const dialogSX: SxProps<Theme> = {
  width: "100%",
  zIndex: 22222,
  "& .MuiPaper-root": {
    width: "640px",
    minHeight: "240px",
    borderRadius: "14px",
    backgroundColor: COLOR_WHITE,
    p: "28px",
    "& .MuiDialogContent-root": {
      p: "0px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "end",
      alignItems: "center",
    },
    "& .MuiDialogActions-root": {
      display: "flex",
      px: "80px",
      justifyContent: "space-between",
      py: "0",
      "& button": {
        width: "100%",
        px: SPACE_M4,
        fontSize: "16px",
        fontWeight: "600",
        borderRadius: "24px",
        "&.MuiButton-outlined": {
          color: COLOR_TEXT,
        },
      },
    },
    "& .MuiDialogTitle-root ": {
      p: "0px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: COLOR_TEXT,
      fontWeight: "700",
      fontSize: "24px",
      "& span": {
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
          scale: "1.2",
        },
      },
    },
  },
};
