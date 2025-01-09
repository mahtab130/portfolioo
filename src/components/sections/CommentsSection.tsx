import { memo } from "react";

import { Grid } from "@mui/material";

import { usersComment } from "../../data/users";
import { CustomTitle } from "../common/CustomTitle";
import { MAX_WIDTH } from "../../helper/constants/static";
import { AnimationSlideIn } from "../common/AnimateComponent";
import { CustomSwiperComment } from "../controller/CustomSwiper";

export const CommentsSection = memo(() => {
  return (
    <AnimationSlideIn direction={"right"}>
      <Grid
        sx={{
          m: "auto",
          width: "100%",
          height: "100vh",
          display: "flex",
          maxWidth: MAX_WIDTH,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CustomTitle
          title={[
            { color: "blue", text: "نظرات بیان شده در رابطه با" },
            { color: "black", text: "مـــن" },
          ]}
          pretitle="نظرات"
        />
        <CustomSwiperComment data={usersComment} />
      </Grid>
    </AnimationSlideIn>
  );
});
