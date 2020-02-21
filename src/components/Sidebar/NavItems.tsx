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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    resume: {
      color: theme.palette.text.primary,
      fontSize: `${theme.typography.h5.fontSize}`
    }
  })
);

const NavItems = ({ onClick }: Props) => {
  const classes = useStyles();
  const items: IconItem[] = [
    { text: "Profile", icon: <PersonIcon color={"primary"} /> },
    {
      text: "Experience",
      icon: <UpdateIcon style={{ color: blueGrey[800] }} />
    },
    {
      text: "Projects",
      icon: <ListAltIcon style={{ color: purple[500] }} />
    },
    {
      text: "Skills",
      icon: <EqualizerIcon style={{ color: green[500] }} />
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
        <ListItem button key={item.text} onClick={onClick}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );
};

export default NavItems;
