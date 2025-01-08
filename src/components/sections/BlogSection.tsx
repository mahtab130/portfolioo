import { memo } from "react";

import { Grid } from "@mui/material";

import { blogs } from "../../data/blogs";
import { CustomTitle } from "../common/CustomTitle";
import { CustomSwiperBlog } from "../controller/CustomSwiper";
import { blogSX } from "../../helper/styleObjects/homeSection";

export const BlogSection = memo(() => {
  return (
    <Grid sx={blogSX}>
      <CustomTitle
        title={[{ color: "blue", text: "بلاگ و موارد آموزشی" }]}
        pretitle="بلاگ"
      />
      <CustomSwiperBlog data={blogs} />
    </Grid>
  );
});
