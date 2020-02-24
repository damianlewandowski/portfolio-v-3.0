import React from "react";
import withPage from "../Page/Page";
import Header from "../Header";

import ProjectItem from "./ProjectItem";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import projectsJson from "../../static/projects.json";
import { Grid, List } from "@material-ui/core";

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
        <Grid container justify={"center"}>
          {projects.map(project => (
            <Grid key={project.whatLearnt} item md={10}>
              <ProjectItem {...project} />
            </Grid>
          ))}
        </Grid>
      </List>
    </div>
  );
};

export default withPage(Projects);
