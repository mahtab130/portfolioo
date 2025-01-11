import { FC, memo } from "react";

import { find, map } from "lodash";
import { useParams } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";

import { blogs } from "../../../data/blogs";
import { BlogCard } from "../../common/BlogCard";
import { CommentField } from "../../common/Other";
import { CustomImage } from "../../controller/CustomImage";
import { AnimationSlideIn } from "../../common/AnimateComponent";
import { CustomBreadcrumbs } from "../../controller/CustomBreadcrumbs";
import { blogDetailSX, contentBlogSX } from "../../../helper/styleObjects/blog";

import vector from "../../../assets/images/vectors/orange-arrow.webp";
import image1 from "../../../assets/images/blogs/blog-detail1.webp";
import image2 from "../../../assets/images/blogs/blog-detail2.webp";

export const BlogDetail: FC = () => {
  const { id: currentId } = useParams();

  const { image, title } =
    find(blogs, ({ id }) => id == Number(currentId)) ?? {};

  return (
    <AnimationSlideIn direction={"left"}>
      <Grid container sx={blogDetailSX}>
        <Grid item md={8}>
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
            <ContentBlog image={image || ""} />
          </Grid>
        </Grid>
        <Grid item md={3.7} className="blogs-related">
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
                  navigateString={`/blogs/${id}`}
                />
              </Grid>
            )
          )}
        </Grid>
      </Grid>
    </AnimationSlideIn>
  );
};

const ContentBlog = memo<{ image: string }>(({ image }) => {
  return (
    <Grid sx={contentBlogSX}>
      <Grid className="bullet-point-wrapper">
        <Typography className="text black">
          1. برنامه‌ریزی و زمان‌بندی
        </Typography>
        <Typography className="text">
          <Typography>تعیین اهداف مشخص:</Typography>
          اهداف SMART (خاص، قابل اندازه‌گیری، قابل دستیابی، مرتبط و
          زمان‌بندی‌شده) را تعیین کنید. به عنوان مثال، "من می‌خواهم در این ماه
          دو فصل از کتاب را مطالعه کنم."
          <Typography>ایجاد برنامه مطالعه:</Typography>
          از تقویم یا اپلیکیشن‌های مدیریت زمان استفاده کنید. زمان‌های خاصی را
          برای مطالعه هر درس اختصاص دهید و به آن پایبند باشید.
        </Typography>
      </Grid>
      <Grid className="bullet-point-wrapper">
        <Typography className="text black">2. یادداشت‌برداری مؤثر</Typography>
        <Typography className="text">
          <Typography>استفاده از روش‌های مختلف یادداشت‌برداری:</Typography>روش
          Cornell شامل تقسیم صفحه به سه بخش (نکات کلیدی، توضیحات و خلاصه) است که
          به سازماندهی اطلاعات کمک می‌کند.
          <Typography>خلاصه‌نویسی:</Typography>
          پس از مطالعه هر فصل، یک خلاصه بنویسید. این کار به درک بهتر و یادآوری
          مطالب کمک می‌کند.
        </Typography>
      </Grid>
      <Grid container xs={12} className="image-wrapper">
        <CustomImage className="image" src={image} />
      </Grid>
      <Grid className="bullet-point-wrapper">
        <Typography className="text black">3. تمرین فعال</Typography>
        <Typography className="text">
          <Typography>
            <Box component="span"></Box>
            حل مسائل و تمرینات:
          </Typography>
          به جای تکیه بر خواندن، به حل مسائل و انجام تمرینات بپردازید. این کار
          به تسلط بر مفاهیم کمک می‌کند.
          <Typography>آزمون‌های خودسنجی:</Typography>
          از منابع آنلاین برای آزمون‌های خودسنجی استفاده کنید. این کار به شما
          کمک می‌کند تا نقاط قوت و ضعف خود را شناسایی کنید.
        </Typography>
      </Grid>
      <Grid className="bullet-point-wrapper">
        <Typography className="text black">4. تکرار و مرور</Typography>
        <Typography className="text">
          <Typography>
            <Box component="span"></Box>
            تکرار spaced:
          </Typography>
          به جای مرور یکباره، مطالب را در فواصل زمانی مختلف مرور کنید. این روش
          به تقویت حافظه کمک می‌کند.
          <Typography>مرور مطالب قبلی:</Typography>
          قبل از شروع مطالب جدید، به مرور مطالب قبلی بپردازید. این کار به
          یادآوری بهتر اطلاعات کمک می‌کند.
        </Typography>
      </Grid>
      <Grid className="bullet-point-wrapper">
        <Typography className="text black">5. یادگیری همکاری</Typography>
        <Typography className="text">
          <Typography>
            <Box component="span"></Box>
            گروه‌های مطالعه:
          </Typography>
          با همکلاسی‌ها گروه‌های مطالعه تشکیل دهید. این کار به تبادل نظر و
          یادگیری از تجربیات دیگران کمک می‌کند.
          <Typography>آموزش به دیگران:</Typography>
          سعی کنید مطالب را به دیگران آموزش دهید. این کار به شما کمک می‌کند تا
          خودتان نیز بهتر یاد بگیرید.
        </Typography>
      </Grid>
      <Grid className="bullet-point-wrapper">
        <Typography className="text black">
          6. استفاده از منابع چندرسانه‌ای
        </Typography>
        <Typography className="text">
          <Typography>
            <Box component="span"></Box>
            ویدیوهای آموزشی:
          </Typography>
          از ویدیوهای آموزشی یوتیوب یا دوره‌های آنلاین استفاده کنید. این منابع
          می‌توانند به درک بهتر مفاهیم کمک کنند.
          <Typography>نرم‌افزارهای آموزشی:</Typography>
          از اپلیکیشن‌هایی مانند Quizlet یا Anki برای یادگیری و مرور استفاده
          کنید.
        </Typography>
      </Grid>
      <Grid container xs={12} className="image2-wrapper">
        <Grid item xs={12} md={3.9}>
          <CustomImage className="image" src={image2} />
        </Grid>
        <Grid item xs={12} md={7.9}>
          <CustomImage className="image" src={image1} />
        </Grid>
      </Grid>
      <Grid className="conclusion">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیــــــک اســـت، چاپگرها و متون بلکه روزنامه و مجله در
        ستون و سطرآنچنان که لازم است، و بـــــــــرای شرایط فعلی تکنولوژی مورد
        نیاز، و کاربردهای متنوع با هدف بهبود ابزارهـــــای کاربردی مــــی باشد،
        کتابهای زیادی در شصت و ســـــه درصد گذشته حال و آینده، شناخت فراوان
        جامعه و متخصصان را می طلبد، تا با نرم افزارها شنــــاخت بیشتری را
        بــــرای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
        فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در
        ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
        حروفچینی دستاوردهای اصلی، و جـــــوابگوی سوالات پیوسته اهل دنیای موجود
        طراحی اساسا مورد استفاده قرار گیرد.
      </Grid>
      <CommentField />
    </Grid>
  );
});
