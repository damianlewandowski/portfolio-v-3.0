import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    page: {
      height: "100vh"
    }
  })
);

export default function withPage<P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> {
  return ({ ...props }) => {
    const classes = useStyles();
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="flex-start"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <Component {...props} />
        </Grid>
      </Grid>
    );
  };
}
