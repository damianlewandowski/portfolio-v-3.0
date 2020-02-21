import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import PersonIcon from "@material-ui/icons/Person";
import UpdateIcon from "@material-ui/icons/Update";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { blueGrey, green, purple } from "@material-ui/core/colors";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import { IconItem } from "../../interfaces";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface Props {
  onClick?: () => void;
}

interface Item extends IconItem {
  href: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    resume: {
      color: theme.palette.text.primary,
      fontSize: `${theme.typography.h5.fontSize}`
    },
    link: {
      textDecoration: "none",
      color: "inherit"
    }
  })
);

const NavItems = ({ onClick }: Props) => {
  const classes = useStyles();
  const items: Item[] = [
    {
      text: "Profile",
      icon: <PersonIcon color={"primary"} />,
      href: "#profile"
    },
    {
      text: "Experience",
      icon: <UpdateIcon style={{ color: blueGrey[800] }} />,
      href: "#experience"
    },
    {
      text: "Projects",
      icon: <ListAltIcon style={{ color: purple[500] }} />,
      href: "#projects"
    },
    {
      text: "Skills",
      icon: <EqualizerIcon style={{ color: green[500] }} />,
      href: "#skills"
    }
  ];

  return (
    <List disablePadding={true}>
      <ListItem divider selected>
        <ListItemText
          classes={{ primary: classes.resume }}
          primary={"Resume"}
        />
      </ListItem>
      {items.map(item => (
        <a key={item.text} className={classes.link} href={item.href}>
          <ListItem button onClick={onClick}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        </a>
      ))}
    </List>
  );
};

export default NavItems;
