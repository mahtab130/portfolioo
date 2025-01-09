import { FC } from "react";

import { map } from "lodash";
import { Grid } from "@mui/material";

import { HeadingPage } from "../../common/HeadingPage";

import { blogs } from "../../../data/blogs";
import { BlogCard } from "../../common/BlogCard";
import { blogSX } from "../../../helper/styleObjects/blog";
import { AnimationSlideIn } from "../../common/AnimateComponent";

import backgrounImage from "../../../assets/images/blogs/blog.webp";

const Blogs: FC = () => {
  return (
    <Grid sx={blogSX}>
      <HeadingPage
        title="بــــــلاگ"
        image={backgrounImage}
        description="لورم اسپیس متن ساختگی نا مفهوم با سابقه‌ای بیش از 5سال درحوزه مدیریت و رهبری
توانسته‌ام با ارتقاء عملکرد تیم و بهبودفرآیندهای کاری، به دفتر خود اعتبـــار و موفقیــت
 بیشتری بخشم."
      />

      <Grid container className="container-body">
        {map(blogs, ({ description, id, image, title }, index) => (
          <Grid item xs={12} md={4} key={index + id}>
            <AnimationSlideIn direction="left" className="animaiton">
              <BlogCard
                id={id}
                image={image}
                title={title}
                description={description}
                navigateString={`${id}`}
              />
            </AnimationSlideIn>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Blogs;
