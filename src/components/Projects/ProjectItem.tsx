import React from "react";
import {
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography
} from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import GitHubIcon from "@material-ui/icons/GitHub";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      textAlign: "center",
      marginBottom: "2rem"
    },
    image: {
      maxWidth: "100%",
      maxHeight: "100%"
    },
    paper: {
      width: "100%",
      textAlign: "center",
      padding: "12px"
    }
  })
);

export interface ProjectItemProps {
  title: string;
  imgName: string;
  description: string;
  technologiesUsed: string[];
  whatLearnt: string;
  appUrl: string;
  githubUrl: string;
}

const ProjectItem = ({
  title,
  imgName,
  description,
  technologiesUsed,
  whatLearnt,
  appUrl,
  githubUrl
}: ProjectItemProps) => {
  const classes = useStyles();
  return (
    <ListItem>
      <Paper className={classes.paper} elevation={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography className={classes.title} variant={"h3"}>
              {title}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <img
              alt={"project"}
              className={classes.image}
              src={require(`../../static/images/projects/${imgName}`)}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant={"body1"}>{description}</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant={"h4"}>Technologies:</Typography>
            <Typography variant={"body1"}>
              {technologiesUsed.join(", ")}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant={"h4"}>What I learnt</Typography>
            <Typography variant={"body1"}>{whatLearnt}</Typography>
          </Grid>

          <Grid item xs={12}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <LanguageIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Link href={appUrl} target={"_blank"}>
                      Application
                    </Link>
                  }
                />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <GitHubIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Link href={githubUrl} target={"_blank"}>
                      Github
                    </Link>
                  }
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Paper>
    </ListItem>
  );
};

export default ProjectItem;
