import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import { IconItem } from "../interfaces";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";

const InfoItems = () => {
  const items: IconItem[] = [
    { text: "516-155-260", icon: <PhoneIcon color={"secondary"} /> },
    {
      text: "damian.lewandow@gmail.com",
      icon: <MailIcon color={"secondary"} />
    },
    {
      text: "Poland, Sopot",
      icon: <HomeIcon color={"secondary"} />
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

export default InfoItems;
