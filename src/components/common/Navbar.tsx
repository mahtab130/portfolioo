import { memo, useRef, useState } from "react";

import { map } from "lodash";
import { Box, Grid, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import { navbarValues } from "../../data/other";
import { CustomButton } from "../controller/CustomButton";
import { navbarSX } from "../../helper/styleObjects/navbar";

import logo from "../../assets/images/vectors/logo.webp";
import { contactDialog } from "../../helper/styleObjects/common";
import { CustomDialog } from "../controller/CustomDialog";
import { CustomTextfield, CustomTextarea } from "../controller/CustomTextfield";
import { phoneCallingIcon, messageIcon } from "../other/SvgComponent";

export const Navbar = memo(() => {
  const ref = useRef(null);

  const [openContact, setopenContact] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;

  return (
    <Grid className="navbar-wrapper">
      <Grid className="navbar-container" sx={navbarSX}>
        <Box className="logo" component="img" src={logo} />
        <Grid className="nav-list-wrapper">
          {map(navbarValues, ({ name, url }, index) => {
            const isActive =
              currentPath === url ||
              (url.startsWith("/blogs") && currentPath.startsWith("/blogs")) ||
              (url.startsWith("/researches") &&
                currentPath.startsWith("/researches"));

            return (
              <Typography
                key={index}
                ref={name == "Category" ? ref : null}
                onClick={() => navigate(url)}
                className={
                  isActive ? "navbar-value-name active" : "navbar-value-name"
                }
              >
                {name}
              </Typography>
            );
          })}
        </Grid>
        <Grid className="actions-wrapper">
          <CustomButton
            text={"تماس بگیر"}
            variant="contained"
            onClick={() => setopenContact(true)}
          />
        </Grid>
      </Grid>
      <CustomDialog
        onclose={() => setopenContact(false)}
        title="با ما در تماس باشید"
        open={openContact}
        dialogContent={<ContactDialog />}
        dialogAction={{
          submitButton: {
            text: "ثبت تماس",
            variant: "contained",
            onClick: () => setopenContact(false),
          },
        }}
      />
    </Grid>
  );
});

const ContactDialog = memo(() => {
  return (
    <Grid sx={contactDialog}>
      <Typography className="text">
        لورم ایپسوم مــــتن ساختگــی با تولید سادگی نامـــفهوم از صنـــعت چاپ، و
        با همراه اسـتفاده از طراحان گرافیــــــک اســـت، چاپگرها و متون بلکه
        روزنامه است.
      </Typography>
      <CustomTextfield placeholder="نام و نام خانوادگی" />
      <CustomTextfield placeholder="ایمیل" />
      <CustomTextarea placeholder="پیام خود را اینجا بنویسید" />
      <Grid className="contact-info">
        <Typography>
          {phoneCallingIcon()} تلفـــن همــراه : 09810202020
        </Typography>
        <Typography>{messageIcon()} ایمیــل : persian@gmail.com</Typography>
      </Grid>
    </Grid>
  );
});
