import { memo, useCallback } from "react";

import { map } from "lodash";
import { Box, Grid, SxProps, Theme, Typography } from "@mui/material";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import {
  lineIcon,
  qouteIcon,
  arrowLeftIcon,
  arrowRight2Icon,
  arrowRightIcon,
} from "../other/SvgComponent";
import {
  SPACE_D1,
  SPACE_M2,
  SPACE_XM1,
  SPACE_XS1,
} from "../../helper/constants/spaces";
import {
  FONT_BODY_MEDIUM1,
  FONT_BODY_MEDIUM2,
  FONT_WEIGHT_BLOD,
} from "../../helper/constants/fonts";
import { BlogCard } from "../common/BlogCard";
import { ContentSection } from "../common/ContentSection";
import { CustomRating } from "../controller/CustomRating";
import { COLOR_PRIMARY, COLOR_WHITE } from "../../helper/constants/colors";
import { CustomImage } from "./CustomImage";

import vector1 from "../../assets/images/vectors/vector-blue.webp";
import vector2 from "../../assets/images/vectors/vector-orange.webp";

export const CustomSwiperComment = memo<ICustomSwiperComment>(({ data }) => {
  const imageComponent = useCallback(
    (src: string) => <Box component="img" className="image" src={src} />,
    []
  );

  return (
    <Grid sx={SwiperSectionSx}>
      <Swiper
        onChange={(swiper) => console.log(swiper + "swiper")}
        className="swiper"
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
          disabledClass: "disabled-button",
        }}
        slidesPerView={1}
      >
        {map(data, ({ comment, id, image, name, rate }) => (
          <SwiperSlide key={id} className="swiper-slide">
            <ContentSection
              image={imageComponent(image)}
              content={
                <>
                  <ContentComment
                    name={name}
                    rate={rate}
                    comment={comment}
                    classNames={{ next: "swiper-next", prev: "swiper-prev" }}
                  />
                  <Grid className="vectors-wrapper">
                    <CustomImage src={vector1} />
                    <CustomImage src={vector2} />
                  </Grid>
                </>
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Grid>
  );
});

const ContentComment = memo<IContentComment>(
  ({ comment, name, rate, classNames: { next, prev } }) => {
    return (
      <Grid className="content">
        <Grid className="personal-info">
          <Typography className="name">
            {name}
            {lineIcon()}
            {qouteIcon()}
          </Typography>
        </Grid>
        <Typography className="description">{comment}</Typography>
        <CustomRating readOnly value={rate} />
        <Grid className="swip-buttons">
          <Box component="div" className={prev}>
            {arrowLeftIcon()}
          </Box>
          <Box component="div" className={next}>
            {arrowRightIcon()}
          </Box>
        </Grid>
      </Grid>
    );
  }
);

export const CustomSwiperBlog = memo<{ data: IBlogCard[] }>(({ data }) => {
  return (
    <Grid sx={customSwiperBlogSX}>
      <Swiper
        loop
        className="swiper"
        spaceBetween={20}
        slidesPerView={3}
        slidesPerGroup={1}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Navigation, Pagination]}
        navigation={{ prevEl: ".swiper-prev", nextEl: ".swiper-next" }}
      >
        {map(data, ({ description, id, image, title }) => (
          <SwiperSlide key={id} className="swiper-slide">
            <BlogCard
              id={id}
              image={image}
              title={title}
              description={description}
              navigateString={`blogs/${id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Box className="swiper-prev">{arrowRight2Icon(COLOR_WHITE)}</Box>
      <Box className="swiper-next">{arrowRight2Icon(COLOR_WHITE)}</Box>
    </Grid>
  );
});

const SwiperSectionSx: SxProps<Theme> = {
  width: "100%",
  height: "auto",
  "& .swiper": {
    width: "100%",
    // display: "flex",
    "& .swiper-slide": {
      width: "100% !important",
      mr: "0px !important",

      "& .vector-wrapper": {
        top: "45%",
        right: "0px",
        width: "100px",
        height: "100px",
        position: "absolute",
      },
      "& .content": {
        mt: SPACE_M2,
        width: "100%",
        display: "flex",
        rowGap: SPACE_XM1,
        flexDirection: "column",
        "& .description": {
          fontSize: "16px",
          color: "#848484",
        },
        "& .personal-info": {
          display: "flex",
          flexDirection: "column",
          "& .name": {
            fontSize: FONT_BODY_MEDIUM1,
            fontWeight: FONT_WEIGHT_BLOD,
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            "& svg:last-child": {
              mt: "12px",
            },
          },
          "& .job": {
            fontSize: FONT_BODY_MEDIUM2,
          },
        },
        "& .swip-buttons": {
          display: "flex",
          gap: SPACE_XS1,
          mt: "18px",
          mr: "2px",
          "& .swiper-prev, .swiper-next": {
            p: "10px",
            height: "18px",
            cursor: "pointer",
            borderRadius: "50%",
            transition: "all 0.4s",
            backgroundColor: COLOR_PRIMARY,
            "& svg path": {
              fill: COLOR_WHITE,
            },
            "&:hover": {
              transform: "scale(1.1)",
            },
            "&.disabled-button": {
              cursor: "default",
              backgroundColor: "#E9E9E9",
              "& svg path": {
                fill: "#818181",
              },
              "&:hover": {
                transform: "scale(1)",
              },
            },
          },
        },
        "& .vectors-wrapper": {
          position: "absolute",
          left: "-250px",
          bottom: 0,
          width: "115px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          "& img": {
            width: "60px",
            height: "60px",
            "&:last-child": {
              mr: "60px",
            },
          },
        },
      },
    },
  },
};

const customSwiperBlogSX: SxProps<Theme> = {
  mt: SPACE_D1,
  mr: SPACE_XS1,
  width: "100%",
  position: "relative",
  "& .swiper": {
    width: "1240px",
    display: "flex",
    justifyContent: "center",
    "& .swiper-wrapper": {
      height: "500px",
      justifyContent: "space-around",
    },
    "& .swiper-slide": {
      width: "fit-content !important",
    },
  },
  "& .swiper-prev ,.swiper-next": {
    zIndex: "33",
    width: "50px",
    height: "50px",
    display: "flex",
    cursor: "pointer",
    borderRadius: "50%",
    alignItems: "center",
    position: "absolute",
    transition: "all 0.4s",
    justifyContent: "center",
    backgroundColor: COLOR_PRIMARY,
    "& svg": {
      ml: "2px",
    },
    "&.swiper-disabled": {
      opacity: "1",
      cursor: "pointer",
      pointerEvents: "auto",
    },
    "&:hover": {
      "& svg": {
        transform: "scale(1.2)",
      },
    },
  },
  "& .swiper-prev": {
    left: "30px",
    bottom: "50%",
    transform: "rotate(180deg)",
  },
  "& .swiper-next": {
    right: "30px",
    bottom: "50%",
  },
  "& .swiper-pagination": {
    left: "50%",
    bottom: "0px",
    position: "absolute",
    "& .swiper-pagination-bullet": {
      width: "8px",
      height: "8px",
      transform: "scale(1) !important",
      "&.swiper-pagination-bullet-active": {
        backgroundColor: COLOR_PRIMARY,
      },
      "& .swiper-pagination-bullet-active-next , .swiper-pagination-bullet-active-prev":
        {
          backgroundColor: COLOR_PRIMARY + "47",
        },
    },
  },
};
