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

const StyledApp = styled.div`
`;

function App() {
  return (
    <Theme>
      <StyledApp>
        <GlobalStyle />
        <NavBar />
        <SvgAndPhoto />
        <AboutMeSection />
        <Projects />
        <ILoveSection />
        <SkillsSection />
        <Contact />
      </StyledApp>
    </Theme>
  );
}

export default App;