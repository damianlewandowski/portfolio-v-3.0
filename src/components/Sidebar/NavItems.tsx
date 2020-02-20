import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import PersonIcon from "@material-ui/icons/Person";
import UpdateIcon from "@material-ui/icons/Update";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { green, purple } from "@material-ui/core/colors";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import { IconItem } from "../interfaces";

const NavItems = () => {
  const items: IconItem[] = [
    { text: "Profile", icon: <PersonIcon color={"primary"} /> },
    { text: "Experience", icon: <UpdateIcon color={"secondary"} /> },
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
    <List>
      {items.map(item => (
        <ListItem button key={item.text}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );
};

export default NavItems;
