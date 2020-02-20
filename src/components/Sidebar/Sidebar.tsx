import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import NavItems from "./NavItems";

const drawerWidth = 250;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    sideNav: {
      height: "100vh"
    },
    box: {
      position: "relative",
      width: "100%",
      "&::after": {
        content: "''",
        display: "block",
        paddingBottom: "100%"
      }
    },
    textContainer: {
      position: "absolute",
      left: "10%",
      top: "50%",
      textTransform: "capitalize"
    }
  })
);

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
      anchor="left"
    >
      <Box
        className={classes.box}
        bgcolor="primary.main"
        color="primary.contrastText"
      >
        <Typography className={classes.textContainer} variant="h5">
          damian
          <br /> <strong>lewandowski</strong>
        </Typography>
      </Box>

      <NavItems />
    </Drawer>
  );
}
