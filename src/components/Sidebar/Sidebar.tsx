import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { AppBar, Hidden, IconButton, Toolbar } from "@material-ui/core";
import NavItems from "./NavItems";
import MenuIcon from "@material-ui/icons/Menu";

import { SIDEBAR_WIDTH } from "../../constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    drawer: {
      width: SIDEBAR_WIDTH,
      [theme.breakpoints.up("md")]: {
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

    menuButton: {
      [theme.breakpoints.up("md")]: {
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
      <Hidden mdUp>
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

        <Hidden smDown={true} implementation="css">
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
    </div>
  );
}
