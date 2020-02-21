import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import { AppBar, Box, Hidden, IconButton, Toolbar } from "@material-ui/core";
import NavItems from "./NavItems";
import MenuIcon from "@material-ui/icons/Menu";

import { SIDEBAR_WIDTH } from "../../constants";
import App from "../../App";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    drawer: {
      width: SIDEBAR_WIDTH,
      [theme.breakpoints.up("sm")]: {
        width: SIDEBAR_WIDTH,
        flexShrink: 0
      }
    },
    drawerPaper: {
      width: SIDEBAR_WIDTH
    },
    sideNav: {
      height: "100vh"
    },
    textContainer: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      textTransform: "capitalize"
    },

    appBar: {
      // [theme.breakpoints.up("sm")]: {
      //   width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
      //   marginLeft: SIDEBAR_WIDTH
      // }
    },

    menuButton: {
      [theme.breakpoints.up("sm")]: {
        display: "none"
      }
    }
  })
);

export default function Sidebar() {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div className={classes.root}>
      <Hidden smUp>
        <AppBar>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Hidden>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            className={classes.drawer}
            variant="temporary"
            classes={{
              paper: classes.drawerPaper
            }}
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <NavItems onClick={() => handleDrawerToggle()} />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper
            }}
            anchor="left"
            open
          >
            <NavItems />
          </Drawer>
        </Hidden>
      </nav>

      {/*<Drawer*/}
      {/*  className={classes.drawer}*/}
      {/*  variant="permanent"*/}
      {/*  classes={{*/}
      {/*    paper: classes.drawerPaper*/}
      {/*  }}*/}
      {/*  anchor="left"*/}
      {/*  open={mobileOpen}*/}
      {/*>*/}
      {/*  <Box*/}
      {/*    className={classes.box}*/}
      {/*    bgcolor="primary.main"*/}
      {/*    color="primary.contrastText"*/}
      {/*  >*/}
      {/*    <Typography className={classes.textContainer} variant="h5">*/}
      {/*      portfolio*/}
      {/*    </Typography>*/}
      {/*  </Box>*/}

      {/*  <NavItems />*/}
      {/*</Drawer>*/}
    </div>
  );
}
