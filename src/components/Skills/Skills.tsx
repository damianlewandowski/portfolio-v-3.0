import React from "react";
import withPage from "../Page/Page";
import Header from "../Header";
import SkillItem, { SkillItemProps } from "./SkillItem";
import { Grid } from "@material-ui/core";

import typescriptImg from "../../static/images/typescript.png";
import javascriptImg from "../../static/images/javascript.png";
import pythonImg from "../../static/images/python.jpeg";
import javaImg from "../../static/images/java.png";
import cssImg from "../../static/images/css.png";
import reactImg from "../../static/images/react.png";
import reduxImg from "../../static/images/redux.png";
import materialuiImg from "../../static/images/materialui.png";
import expressjsImg from "../../static/images/express.png";
import meteorjsImg from "../../static/images/meteorjs.png";
import mongodbImg from "../../static/images/mongodb.jpeg";
import postgresImg from "../../static/images/postgres.jpeg";
import mysqlImg from "../../static/images/mysql.jpeg";

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
    <div style={{ padding: 2, overflow: "hidden" }}>
      <Header title={"Skills"} />

      <Grid container spacing={1}>
        {skills.map(skill => (
          <SkillItem imgPath={skill.imgPath} name={skill.name} />
        ))}
      </Grid>
    </div>
  );
};

export default withPage(Skills);
