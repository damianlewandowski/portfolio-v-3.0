import React from "react";
import { Grid, ListItemIcon, ListItemText } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export interface SkillItemProps {
  imgPath: string;
  name: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      width: 150,
      height: 150,
      [theme.breakpoints.down("md")]: {
        width: 100,
        height: 100
      }
    }
  })
);

const SkillItem = ({ imgPath, name }: SkillItemProps) => {
  const classes = useStyles();
  return (
    <Grid item xs={6} md={4} lg={2} style={{ padding: 12 }}>
      <div
        style={{
          width: 150,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#fff",
          textAlign: "center",
          boxShadow: "1px 1px 4px #000"
        }}
      >
        <ListItemIcon>
          <img alt={"skill-icon"} className={classes.image} src={imgPath} />
        </ListItemIcon>
        <ListItemText primary={name} />
      </div>
    </Grid>
  );
};

export default SkillItem;
