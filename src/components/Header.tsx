import React from "react";
import { Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { blueGrey } from "@material-ui/core/colors";

interface Props {
  title: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerContainer: {
      padding: `${theme.spacing(5)}px 0px`,
      textAlign: "center",
      background: blueGrey[800],
      marginBottom: theme.spacing(3)
    },
    header: {
      color: theme.palette.background.paper,
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.h3.fontSize
      }
    }
  })
);

const Header = ({ title }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      <Typography className={classes.header} variant={"h2"}>
        {title}
      </Typography>
    </div>
  );
};

export default Header;
