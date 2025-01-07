import { memo, useRef } from "react";

import { map } from "lodash";
import { Box, Grid, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import { navbarValues } from "../../data/other";
import { navbarSX } from "../../helper/styleObjects/navbar";

import logo from "../../assets/images/vectors/logo.webp";
import { CustomButton } from "../controller/CustomButton";

export const Navbar = memo(() => {
  const ref = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Grid className="navbar-wrapper">
      <Grid className="navbar-container" sx={navbarSX(undefined)}>
        <Grid className="logo-wrapper">
          <Box className="logo" component="img" src={logo} />
        </Grid>
        <Grid className="nav-list-wrapper">
          {map(navbarValues, ({ name, url }, index) => (
            <Typography
              key={index}
              ref={name == "Category" ? ref : null}
              onClick={() => navigate(url)}
              className={
                location.pathname == url
                  ? "navbar-value-name active"
                  : "navbar-value-name"
              }
            >
              {name}
            </Typography>
          ))}
        </Grid>
        <Grid className="actions-wrapper">
          <CustomButton text={"تماس بگیر"} />
        </Grid>
      </Grid>
    </Grid>
  );
});
