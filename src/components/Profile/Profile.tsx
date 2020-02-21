import React from "react";
import { Typography } from "@material-ui/core";
import withPage from "../Page/Page";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InfoItems from "./InfoItems";
import backgroundImg from "../../static/images/profile.jpg";
import classnames from "classnames";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "1rem",
      [theme.breakpoints.up("sm")]: {
        marginLeft: 150
      }
    },
    header: {
      textTransform: "capitalize"
    },
    name: {
      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.h3.fontSize
      }
    },
    title: {
      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.h4.fontSize
      }
    }
  })
);

const Profile = () => {
  const classes = useStyles();

  const nameClasses = classnames(classes.header, classes.name);
  const titleClasses = classnames(classes.header, classes.title);

  return (
    <div className={classes.root}>
      <Typography color={"textPrimary"} className={nameClasses} variant="h2">
        damian lewandowski
      </Typography>
      <Typography
        color={"textSecondary"}
        className={titleClasses}
        variant="h4"
        gutterBottom
      >
        fullstack developer
      </Typography>
      <InfoItems />
    </div>
  );
};

export default withPage(Profile, backgroundImg, { justify: "center" });
