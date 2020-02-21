import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { Grid } from "@material-ui/core";
import Profile from "./components/Profile/Profile";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div>
      <Sidebar />

      <Profile />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
