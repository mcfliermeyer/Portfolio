import React from "react";
import styled from "styled-components";
import Theme from "./theme/Theme";
import { NavBar } from "./components/NavBar";
import SvgAndPhoto from "./components/SvgAndPhoto";
import NewSection from "./components/NewSection";
import GlobalStyle from "./theme/globalStyles";
import ProjectSection from "./components/ProjectSection";
import Projects from "./components/Projects";

const StyledApp = styled.div`
  .about-me-summary {
    margin-top: 1.5rem;
    max-width: 85%;
    margin-inline: auto;
    margin-bottom: 0%;
  }
`;

function App() {
  return (
    <Theme>
      <StyledApp>
        <GlobalStyle />
        <NavBar />
        <SvgAndPhoto />
        <NewSection title="I am" subtitle="a web developer" />
        <p className="about-me-summary">
          Hello, my name is Mark Meyer. I am a web developer. I have a passion for troubleshooting and
          problem solving. Web app development is filled with tiny puzzles for
          me to figure out every day. I recently decided to take my passion for
          problem solving and move it into a career. So here I am, searching for
          more puzzles to solve.
        </p>
        <Projects />
      </StyledApp>
    </Theme>
  );
}

export default App;
