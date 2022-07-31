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
  .about-me-summary {
    margin: 1rem;
    margin-inline: auto;
    padding-inline: 1.5rem;
  }
  @media (min-width: 425px) {
    .about-me-summary {
      max-width: 700px;
    }
  }
  .highlighted-text {
    color: #bf46b7;
    font-weight: 700;
  }
  .app-download-img {
    width: 100%;
  }
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