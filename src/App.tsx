import React from "react";
import styled from "styled-components";
import Theme from "./theme/Theme";
import { NavBar } from "./components/NavBar";
import SvgAndPhoto from "./components/SvgAndPhoto";
import NewSection from "./components/NewSection";
import GlobalStyle from "./theme/globalStyles";
import Projects from "./components/Projects";
import FlipCard from "./components/FlipCard";
import TechStackIconWrapper from "./components/TechStackIconWrapper";
import tailwindLogo from "./resources/tailwindcss.svg";
import reactLogo from "./resources/react.svg";
import typescriptLogo from "./resources/typescript.svg";
import javaLogo from './resources/java.svg'
import swiftLogo from './resources/swift.svg'
import androidLogo from './resources/androidLogo.svg'
import pythonLogo from './resources/python.svg'
import javascriptLogo from './resources/javascriptLogo.svg'
import nodeLogo from './resources/nodejs-icon.svg'
import htmlLogo from './resources/html-1.svg'
import cssLogo from './resources/css-3.svg'
import styledComponentsLogo from './resources/styledComponents.svg'

const StyledApp = styled.div`
  .about-me-summary {
    margin: 1rem;
    margin-inline: auto;
    padding-inline: 1.5rem;
  }
  .highlighted-text {
    color: #bf46b7;
    font-weight: 700;
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
        <NewSection title={"Projects"} />
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
        <FlipCard
          fontColor={"#ffffff"}
          title={"Web"}
          frontComponents={[
            <p>Web development has a wide variety of languages and technologies to use. 
              I have mostly focused on HTML, Javascript, and Css with their various 
              frameworks and libraries. These are the ones I've used so far.
            </p>,
            <WebSkillIcons key={1} />
          ]}
          backComponents={[]}
        />
        <FlipCard
          fontColor={"#ffffff"}
          title={"Mobile"}
          frontComponents={[
            <p>Mobile app development is something I started as a hobby and eventually 
              released an app for iOS. I learned Swift and Android along the way. 
            </p>,
            <MobileSkillIcons key={2} 
          />]}
          backComponents={[
            <p>Writing iOS apps with Swift was a great experience. I had an app on the app 
              store for 2 years and recieved a few messages about how it helped people. That was 
              a great feeling. It is still being used today, although I am no longer paying to 
              keep it on the app store. 
            </p>
          ]}
        />
        {/* <FlipCard
          fontColor={"#ffffff"}
          title={"Soft Skills"}
          frontComponents={[<SkillIcons key={2} />]}
          backComponents={[]}
        /> */}
      </StyledApp>
    </Theme>
  );
}

export default App;

function WebSkillIcons() {
  return (
    <TechStackIconWrapper className="tech-stack-icons" icons={[javascriptLogo, typescriptLogo, reactLogo, nodeLogo, htmlLogo, cssLogo, styledComponentsLogo, tailwindLogo]} />
  )
}
function MobileSkillIcons() {
  return (
    <TechStackIconWrapper icons={[swiftLogo, androidLogo]} />
  )
}