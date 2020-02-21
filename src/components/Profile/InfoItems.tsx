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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listLine: {
      borderLeft: `3px solid ${theme.palette.divider}`
    },
    text: {
      color: theme.palette.text.primary
    }
  })
);

const InfoItems = () => {
  const classes = useStyles();

  const items: IconItem[] = [
    { text: "516-155-260", icon: <PhoneIcon color={"primary"} /> },
    {
      text: "damian.lewandow@gmail.com",
      icon: <MailIcon color={"primary"} />
    },
    {
      text: "Poland, Sopot",
      icon: <HomeIcon color={"primary"} />
    }
  ];
  return (
    <List className={classes.listLine}>
      {items.map(item => (
        <ListItem key={item.text}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText className={classes.text} primary={item.text} />
        </ListItem>
      ))}
    </List>
  );
};

export default InfoItems;
