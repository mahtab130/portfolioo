import { FC, memo } from "react";

import { find, map } from "lodash";
import { useParams } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";

import { blogs } from "../../../data/blogs";
// import { CustomImage } from "../../controller/CustomImage";
import { AnimationSlideIn } from "../../common/AnimateComponent";
import { CustomBreadcrumbs } from "../../controller/CustomBreadcrumbs";
import { blogDetailSX, contentBlogSX } from "../../../helper/styleObjects/blog";
import { CustomImage } from "../../controller/CustomImage";
import vector from "../../../assets/images/vectors/orange-arrow.webp";
import { BlogCard } from "../../common/BlogCard";

// import image1 from "../../../assets/images/blogs/blog-detail-1.webp";
// import image2 from "../../../assets/images/blogs/blog-detail-2.webp";
// import image3 from "../../../assets/images/blogs/blog-detail-3.webp";

export const BlogDetail: FC = () => {
  const { id: currentId } = useParams();

  const { image, title } =
    find(blogs, ({ id }) => id == Number(currentId)) ?? {};

  return (
    <AnimationSlideIn direction={"left"}>
      <Grid container sx={blogDetailSX}>
        <Grid md={8}>
          <CustomBreadcrumbs
            breadcrumbs={[
              { name: "خانــه", link: "/" },
              { name: "بـــــلاگ", link: "/blogs" },
              { name: title || "", link: "/" },
            ]}
          />
          <Grid className="container">
            <Typography className="title">
              استراتژی‌های مؤثر برای یادگیری بهتر
            </Typography>
            <CustomImage className="image" src={image || ""} />
            <ContentBlog />
          </Grid>
        </Grid>
        <Grid md={3.7} className="blogs-related">
          <Typography className="title-blog">
            مقالات مرتبط <CustomImage className="vector" src={vector} />
          </Typography>
          {map(
            blogs.slice(0, 3),
            ({ description, id, image, title }, index) => (
              <Grid key={index + id}>
                <BlogCard
                  id={id}
                  image={image}
                  title={title}
                  description={description}
                  navigateString={`${id}`}
                />
              </Grid>
            )
          )}
        </Grid>
      </Grid>
    </AnimationSlideIn>
  );
};

const ContentBlog = memo(() => {
  return (
    <Grid sx={contentBlogSX}>
      <Grid className="bullet-point-wrapper">
        <Typography className="text black">
          1. برنامه‌ریزی و زمان‌بندی
        </Typography>
        <Typography className="text">
          <Box component="span"></Box>
          تعیین اهداف مشخص: اهداف SMART (خاص، قابل اندازه‌گیری، قابل دستیابی،
          مرتبط و زمان‌بندی‌شده) را تعیین کنید. به عنوان مثال، "من می‌خواهم در
          این ماه دو فصل از کتاب را مطالعه کنم." ایجاد برنامه مطالعه: از تقویم
          یا اپلیکیشن‌های مدیریت زمان استفاده کنید. زمان‌های خاصی را برای مطالعه
          هر درس اختصاص دهید و به آن پایبند باشید
        </Typography>
      </Grid>
      <Grid className="bullet-point-wrapper">
        <Typography className="text black">2. یادداشت‌برداری مؤثر</Typography>
        <Typography className="text">
          استفاده از روش‌های مختلف یادداشت‌برداری: روش Cornell شامل تقسیم صفحه
          به سه بخش (نکات کلیدی، توضیحات و خلاصه) است که به سازماندهی اطلاعات
          کمک می‌کند. خلاصه‌نویسی: پس از مطالعه هر فصل، یک خلاصه بنویسید. این
          کار به درک بهتر و یادآوری مطالب کمک می‌
        </Typography>
      </Grid>
      <Grid container xs={12} className="image2-wrapper">
        <Grid item xs={12} md={5.9}>
          {/* <CustomImage className="image" src={image2} /> */}
        </Grid>
        <Grid item xs={12} md={5.9}>
          {/* <Custommage className="image" src={image3} /> */}
        </Grid>
      </Grid>
    </Grid>
  );
});
