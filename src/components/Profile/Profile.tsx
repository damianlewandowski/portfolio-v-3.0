import React from "react";
import { Typography } from "@material-ui/core";
import withPage from "../Page/Page";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InfoItems from "./InfoItems";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    name: {
      textTransform: "capitalize"
    }
  })
);

const Profile = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.name} variant="h2" gutterBottom>
        damian lewandowski
      </Typography>
      <InfoItems />
    </div>
  );
};

export default withPage(Profile);
