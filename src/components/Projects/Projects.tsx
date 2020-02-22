import React from "react";
import withPage from "../Page/Page";
import Header from "../Header";
import { Grid, List } from "@material-ui/core";

import ProjectItem from "./ProjectItem";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import projectsJson from "../../static/projects.json";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      display: "flex"
    }
  })
);

const Projects = () => {
  const classes = useStyles();

  const projects = [...projectsJson];

  return (
    <div>
      <Header title={"Projects"} />

      <List className={classes.list}>
        <Grid container spacing={3}>
          {projects.map(project => (
            <Grid key={`Project-${project.title}`} item xs={12} lg={6}>
              <ProjectItem {...project} />
            </Grid>
          ))}
        </Grid>
      </List>
    </div>
  );
};

export default withPage(Projects);
