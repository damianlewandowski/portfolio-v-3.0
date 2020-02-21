import React from "react";
import { Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import classNames from "classnames";

interface CompanyListItemProps {
  companyName: string;
  startDate: number;
  endDate: number;
  titles: string[];
  accomplishments: string[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    experienceItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      marginTop: theme.spacing(3),
      [theme.breakpoints.up("sm")]: { paddingLeft: 50 }
    },
    leftBorder: {
      borderLeft: `2px solid grey`
    },
    borderPadding: {
      padding: "0 2px"
    }
  })
);

const CompanyListItem = ({
  companyName,
  startDate,
  endDate,
  titles,
  accomplishments
}: CompanyListItemProps) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.experienceItem} divider>
      <div style={{ display: "flex" }}>
        <Typography variant={"h4"}>{companyName}</Typography>

        <List
          style={{
            display: "flex"
          }}
        >
          {titles.map((title, i) => {
            const leftBorder = classNames({
              [classes.leftBorder]: i !== 0,
              [classes.borderPadding]: true
            });
            return (
              <ListItemText
                className={leftBorder}
                key={`CompanyListItem-${title}`}
                primary={<Typography variant={"body1"}>{title}</Typography>}
              />
            );
          })}
        </List>
      </div>

      <Typography color={"textSecondary"} variant={"body1"}>
        {startDate} - {endDate}
      </Typography>

      <List>
        {accomplishments.map((accomplishment, i) => (
          <ListItem key={`Accomplishment-${companyName}-${i}`}>
            <ListItemIcon>
              <ChevronRightIcon fontSize={"small"} />
            </ListItemIcon>
            {accomplishment}
          </ListItem>
        ))}
      </List>
    </ListItem>
  );
};

export default CompanyListItem;
