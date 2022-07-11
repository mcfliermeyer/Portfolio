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
    margin-inline: auto;
    margin-bottom: 2rem;
    padding-inline: 1.5rem;
  }
  .highlighted-text {
    color: #bf46b7;
    font-weight: 700;
  }
  .skills-container {
    /* background-color: ${(props) => props.theme.colors.primaryBlue}; */
    /* margin-top: -1rem; */
    padding: 0;
    background-color: #ffc753;
  }
  .skills-subtitle {
    /* color: #ffc753; */
    color: white;
    font-weight: 700;
    font-size: 1.2rem;
  }
  ul {
    list-style-type: none;
    margin: 1rem;
    padding: 0;
    line-height: 30px;
    letter-spacing: 0.3px;
    font-weight: 600;
    vertical-align: middle;
    /* display: table-cell; */
    li {
      margin-bottom: 0.4rem;
      display: block;
      .list-item {
        /* background-color: #bf46b7; */
        background-color: ${(props) => props.theme.colors.primaryBlue};
        color: white;
        padding: 0.3rem 2rem;
        border-radius: 2rem;
      }
    }
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
          Hello, my name is Mark Meyer. I am a web developer. I have a passion
          for troubleshooting and problem solving. Web app development is filled
          with tiny puzzles for me to figure out every day. I recently decided
          to take my passion for problem solving and move it into a career. So
          here I am, searching for more puzzles to solve.
        </p>
        <Projects />
        <NewSection title="I love" subtitle="inuitive user experience" />
        <p className="about-me-summary">
          Intuitive and pleasant <span className="highlighted-text">U</span>ser
          e<span className="highlighted-text">X</span>perience is what I do
          best. An over-complicated or technical looking website/app can make a
          users experience incredibly frustrating.{" "}
          <span className="highlighted-text">U</span>ser e
          <span className="highlighted-text">X</span>perience or{" "}
          <span className="highlighted-text">UX</span> is a major focus point
          for me.
        </p>
        <NewSection title={"Skills"} />
        <div className="skills-container">
          <span className="skills-subtitle">Languages I Speak</span>
          <ul>
            <li>
              <span className="list-item">javascript</span>
            </li>
            <li>
              <span className="list-item">typescript</span>
            </li>
            <li>
              <span className="list-item">css</span>
            </li>
            <li>
              <span className="list-item">html</span>
            </li>
            <li>
              <span className="list-item">swift(iOS)</span>
            </li>
            <li>
              <span className="list-item">java</span>
            </li>
          </ul>
          <span className="skills-subtitle">Tools I Use</span>
          <ul>
            <li>
              <span className="list-item">visual studio code</span>
            </li>
            <li>
              <span className="list-item">codepen</span>
            </li>
          </ul>
          <span className="skills-subtitle">Librarys/Frameworks I Know</span>
          <ul>
            <li>
              <span className="list-item">react</span>
            </li>
            <li>
              <span className="list-item">tailwind css</span>
            </li>
          </ul>
        </div>
      </StyledApp>
    </Theme>
  );
}

export default App;
