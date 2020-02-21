import React from "react";
import withPage from "../Page/Page";
import { Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { blueGrey, pink } from "@material-ui/core/colors";

import CompanyList from "./CompanyList";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerContainer: {
      padding: `${theme.spacing(5)}px 0px`,
      background: blueGrey[900],
      textAlign: "center"
    },
    header: {
      color: theme.palette.background.paper,
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.h3.fontSize
      }
    }
  })
);

const Experience = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.headerContainer}>
        <Typography className={classes.header} variant={"h2"}>
          Experience
        </Typography>
      </div>

      <CompanyList />
    </div>
  );
};

export default withPage(Experience);
