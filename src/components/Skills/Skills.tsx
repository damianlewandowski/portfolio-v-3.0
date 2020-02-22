import React from "react";
import withPage from "../Page/Page";
import Header from "../Header";
import SkillItem, { SkillItemProps } from "./SkillItem";
import { Grid } from "@material-ui/core";

import typescriptImg from "../../static/images/skills/typescript.png";
import javascriptImg from "../../static/images/skills/javascript.png";
import pythonImg from "../../static/images/skills/python.jpeg";
import javaImg from "../../static/images/skills/java.png";
import cssImg from "../../static/images/skills/css.png";
import reactImg from "../../static/images/skills/react.png";
import reduxImg from "../../static/images/skills/redux.png";
import materialuiImg from "../../static/images/skills/materialui.png";
import expressjsImg from "../../static/images/skills/express.png";
import meteorjsImg from "../../static/images/skills/meteorjs.png";
import mongodbImg from "../../static/images/skills/mongodb.jpeg";
import postgresImg from "../../static/images/skills/postgres.jpeg";
import mysqlImg from "../../static/images/skills/mysql.jpeg";

const Skills = () => {
  const skills: SkillItemProps[] = [
    {
      imgPath: typescriptImg,
      name: "Typescript"
    },
    {
      imgPath: javascriptImg,
      name: "Javascript"
    },
    {
      imgPath: pythonImg,
      name: "Python"
    },
    {
      imgPath: javaImg,
      name: "Java"
    },
    {
      imgPath: cssImg,
      name: "Css3"
    },
    {
      imgPath: reactImg,
      name: "React"
    },
    {
      imgPath: reduxImg,
      name: "Redux"
    },
    {
      imgPath: materialuiImg,
      name: "Material-UI"
    },
    {
      imgPath: expressjsImg,
      name: "ExpressJS"
    },
    {
      imgPath: meteorjsImg,
      name: "MeteorJS"
    },
    {
      imgPath: mongodbImg,
      name: "MongoDB"
    },
    {
      imgPath: mysqlImg,
      name: "MySQL"
    },
    {
      imgPath: postgresImg,
      name: "PostgreSQL"
    }
  ];

  return (
    <div style={{ overflow: "hidden" }}>
      <Header title={"Skills"} />

      <Grid container spacing={1}>
        {skills.map(skill => (
          <SkillItem
            key={`Skill-${skill.name}`}
            imgPath={skill.imgPath}
            name={skill.name}
          />
        ))}
      </Grid>
    </div>
  );
};

export default withPage(Skills);
