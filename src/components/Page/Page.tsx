import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, GridProps } from "@material-ui/core";
import { SIDEBAR_WIDTH } from "../../constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    page: {
      minHeight: "100vh",
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
        marginLeft: SIDEBAR_WIDTH
      }
    }
  })
);

export default function withPage<P extends object>(
  Component: React.ComponentType<P>,
  imageUrl?: string,
  gridProps?: GridProps
): React.FC<P> {
  return ({ ...props }) => {
    const classes = useStyles();
    return (
      <Grid
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
        container
        direction="column"
        className={classes.page}
        {...gridProps}
      >
        <Component {...props} />
      </Grid>
    );
  };
}
