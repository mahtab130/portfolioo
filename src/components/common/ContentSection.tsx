import { memo } from "react";

import { isString, merge } from "lodash";
import { Box, Grid, SxProps, Theme } from "@mui/material";

import { contentProviderSX } from "../../helper/styleObjects/common";

export const ContentSection = memo<IContentSection<SxProps<Theme>>>(
  ({ content, image, setting }) => {
    const { reverse, imageWidth, sx } = setting ?? {};

    const mergeSx = merge({}, contentProviderSX(reverse, imageWidth), sx);

    return (
      <Grid container sx={mergeSx} className="content-provider">
        <Grid item xs={12} md={5.5} className="right-section">
          <>
            <Grid className="content">{content}</Grid>
          </>
        </Grid>
        <Grid item xs={12} md={6} className="left-section">
          {isString(image) ? (
            <Box component="img" className="image" src={image} />
          ) : (
            image
          )}
        </Grid>
      </Grid>
    );
  }
);
