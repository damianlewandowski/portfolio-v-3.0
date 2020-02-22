import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div>
      <Sidebar />

      <div id={"profile"}>
        <Profile />
      </div>
      <div id={"experience"}>
        <Experience />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </div>
  );
}

export default App;
