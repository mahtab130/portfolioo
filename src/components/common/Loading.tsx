import { Grid, SxProps, Theme } from "@mui/material";
import { CustomImage } from "../controller/CustomImage";

import loading from "../../assets/images/loading.gif";
import { COLOR_PRIMARY } from "../../helper/constants/colors";

export const Loading = () => {
  return (
    <Grid sx={laodingSX}>
      <CustomImage src={loading} />
    </Grid>
  );
};

const laodingSX: SxProps<Theme> = {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: COLOR_PRIMARY,
};
