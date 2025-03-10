import { FC } from "react";

import { map } from "lodash";
import { Grid } from "@mui/material";

import { researches } from "../../../data/researches";
import { HeadingPage } from "../../common/HeadingPage";
import { ResearchBox } from "../../common/ResearchBox";
import { blogSX } from "../../../helper/styleObjects/blog";
import { AnimationSlideIn } from "../../common/AnimateComponent";

import backgrounImage from "../../../assets/images/researches/research.webp";

const Researches: FC = () => {
  return (
    <Grid sx={blogSX}>
      <HeadingPage
        title="پژوهش"
        image={backgrounImage}
        description="لورم اسپیس متن ساختگی نا مفهوم با سابقه‌ای بیش از 5سال درحوزه مدیریت و رهبری
توانسته‌ام با ارتقاء عملکرد تیم و بهبودفرآیندهای کاری، به دفتر خود اعتبـــار و موفقیــت
 بیشتری بخشم."
      />

      <Grid container className="container-body">
        {map(researches, ({ description, id, image, title }, index) => (
          <Grid item xs={12} md={3.8} key={index + id}>
            <AnimationSlideIn direction="left" className="animaiton">
              <ResearchBox
                id={id}
                title={title}
                image={image}
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

export default Researches;
