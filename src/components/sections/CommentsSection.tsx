import { memo } from "react";

import { usersComment } from "../../data/users";
import { CustomSwiperComment } from "../controller/CustomSwiper";
import { Grid } from "@mui/material";
import { CustomTitle } from "../common/CustomTitle";
import { MAX_WIDTH } from "../../helper/constants/static";

export const CommentsSection = memo(() => {
  return (
    <Grid
      sx={{
        m: "auto",
        width: "100%",
        height: "100vh",
        display: "flex",
        maxWidth: MAX_WIDTH,
        flexDirection: "column",
        justifyContent: "end",
      }}
    >
      <CustomTitle
        title={[
          { color: "blue", text: "نظرات بیان شده در رابطه با" },
          { color: "black", text: "مـــن" },
        ]}
        pretitle="نظرات"
      />
      <CustomSwiperComment data={usersComment} />;
    </Grid>
  );
});
