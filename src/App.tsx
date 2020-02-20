import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import {
  Grid,
} from "@material-ui/core";
import Profile from "./components/Profile/Profile";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div>
      <Grid container>
        <Grid item xs={6} md={5} lg={4}>
          <Grid item xs={6}>
            <Sidebar />
          </Grid>
        </Grid>

        <Grid item xs={6} md={7} lg={8}>
          <Profile/>
          <Experience/>
          <Projects/>
          <Skills/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
