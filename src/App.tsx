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
import { useRef } from "react";

const StyledApp = styled.div`
`;


function App() {
  const projectRef = useRef<HTMLInputElement>(null);
  const skillsRef = useRef<HTMLInputElement>(null);
  const aboutMeRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const overlayOffset = 62;

  const scrollToElement = (element: React.RefObject<HTMLDivElement>) => {
    const elHeight = element.current?.getBoundingClientRect().top || 0;
    const bodyHeight = document.body.getBoundingClientRect().top;
    const elPosition = elHeight - bodyHeight;
    const offset = elPosition - overlayOffset;
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }
  return (
    <Theme>
      <StyledApp>
        <GlobalStyle />
        <NavBar navToSkills={() => scrollToElement(skillsRef)}/>
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
      </StyledApp>
    </Theme>
  );
}

export default App;