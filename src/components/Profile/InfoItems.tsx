import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import { IconItem } from "../../interfaces";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listLine: {
      borderLeft: `3px solid ${theme.palette.divider}`
    },

    link: {
      textDecoration: "none",
      color: "inherit",
      "&:hover": {
        color: theme.palette.primary.main,
        cursor: "pointer"
      }
    }
  })
);

const InfoItems = () => {
  const classes = useStyles();

  return (
    <List className={classes.listLine}>
      <ListItem>
        <ListItemIcon>
          <Link
            className={classes.link}
            href={"https://github.com/damianlewandowski"}
            target={"_blank"}
          >
            <GitHubIcon fontSize={"large"} />
          </Link>
        </ListItemIcon>

        <ListItemIcon>
          <Link
            className={classes.link}
            href={"https://linkedin.com/in/damian-lewandowski"}
            target={"_blank"}
          >
            <LinkedInIcon fontSize={"large"} />
          </Link>
        </ListItemIcon>
      </ListItem>
    </List>
  );
};

export default InfoItems;
