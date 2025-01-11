import { memo, useState } from "react";

import {
  Grid,
  Radio,
  Theme,
  SxProps,
  RadioProps,
  Typography,
} from "@mui/material";

import { SPACE_S2 } from "../../helper/constants/spaces";
import { FONT_LABEL_LARGE } from "../../helper/constants/fonts";

interface ICustomRadio extends RadioProps {
  label: string;
}

export const CustomRadio = memo<ICustomRadio>(({ label, ...props }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Grid sx={radioSX} onClick={() => setChecked(!checked)}>
      <Radio checked={checked} {...props} />
      <Typography className="label">{label}</Typography>
    </Grid>
  );
});

const radioSX: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  "& .label": {
    color: "#747474",
    fontSize: FONT_LABEL_LARGE,
    fontWeight: "600",
  },
  "& .MuiRadio-root": {
    p: SPACE_S2,
  },
};
