import styled from "styled-components";
import Theme from "./theme/Theme";
import { NavBar } from "./components/NavBar";
import SvgAndPhoto from "./components/SvgAndPhoto";
import GlobalStyle from "./theme/globalStyles";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AboutMeSection from "./components/AboutMeSection";
import ILoveSection from "./components/ILoveSection";
import SkillsSection from "./components/SkillsSection";
import { useRef, useEffect } from "react";

const StyledApp = styled.div`
  .btn {
    width: 200px;
    height: 100px;
  }
`;


function App() {
  const projectRef = useRef<HTMLInputElement>(null);
  const skillsRef = useRef<HTMLInputElement>(null);
  const aboutMeRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    const elHeight = projectRef.current?.getBoundingClientRect().top
    const bodyHeight = document.body.getBoundingClientRect().top;
    const elPosition = Number(elHeight) - bodyHeight;
    const offset = elPosition - 62;
    console.log(offset);
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }
  return (
    <Theme>
      <StyledApp>
        <GlobalStyle />
        <NavBar />
        <SvgAndPhoto />
        <div ref={aboutMeRef}></div>
        <AboutMeSection />
        <div ref={projectRef}></div>
        <Projects />
        <div ref={skillsRef}></div>
        <SkillsSection />
        <ILoveSection />
        <div ref={contactRef}></div>
        <Contact />
        <button className="btn" onClick={handleClick}>
          Project
        </button>
      </StyledApp>
    </Theme>
  );
}

export default App;