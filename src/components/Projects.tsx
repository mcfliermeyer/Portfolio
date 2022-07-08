import NewSection from "./NewSection";
import ProjectSection from "./ProjectSection";
import cssLogo from "../resources/css-3.svg";
import htmlLogo from "../resources/html-1.svg";
import nodeLogo from "../resources/nodejs-icon.svg";
import tailwindLogo from "../resources/tailwindcss.svg";
import reactLogo from "../resources/react.svg";
import typescriptLogo from "../resources/typescript.svg";
import styledComponentsLogo from "../resources/styledComponents.svg";
import styled from "styled-components"

const StyledProjects = styled.div`
  /* display: flex;
  flex-direction: column; */
`

const Projects = () => {
  return (
    <StyledProjects>
      <NewSection title={"Projects"} />
      <ProjectSection
        title={"Manager Locator"}
        summary={
          "This app was created to help my team keep my managers exact location up to date. I did not deploy this app but the code is on my github. This was a fun backend project to learn NodeJs."
        }
        techStack={[tailwindLogo, nodeLogo, htmlLogo]}
      />
      <ProjectSection
        title={"Quizzical"}
        summary={
          "The Quizzical app is from Scrimba.com. It hooks into a RESTful API which contains questions and answers. At the end, the quiz shows all right and wrong answers."
        }
        techStack={[reactLogo, cssLogo, htmlLogo]}
      />
      <ProjectSection
        title={"This Portfolio"}
        summary={
          "Of course this portfolio. I think every project exposes a web developer to new tech, and new ways of doing things. This portfolio is not an exception."
        }
        techStack={[typescriptLogo, styledComponentsLogo]}
      />
    </StyledProjects>
  );
};
export default Projects;
