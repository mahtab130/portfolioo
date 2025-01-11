import { Grid, Typography } from "@mui/material";
import { memo } from "react";
import { commentFieldSX } from "../../helper/styleObjects/common";
import { CustomImage } from "../controller/CustomImage";
7;

import vector from "../../assets/images/vectors/orange-arrow.webp";
import { CustomTextarea, CustomTextfield } from "../controller/CustomTextfield";
import { CustomButtonV2 } from "../controller/CustomButton";

export const CommentField = memo<ICommentField>(() => {
  return (
    <Grid sx={commentFieldSX}>
      <Typography className="title-comment">
        دیدگاه تان را بنویسید <CustomImage className="vector" src={vector} />
      </Typography>
      <Grid className="text-area-wrapper">
        <CustomTextarea customLabel="دیدگاه" />
      </Grid>
      <Grid container className="field-wrapper">
        <Grid item md={5.8}>
          <CustomTextfield customLabel="نام" />
        </Grid>
        <Grid item md={5.8}>
          <CustomTextfield customLabel="ایمیل" />
        </Grid>
      </Grid>
      <Grid className="button-wrapper">
        <CustomButtonV2 variant="contained" text={"فرستادن دیدگاه"} />
      </Grid>
    </Grid>
  );
});
