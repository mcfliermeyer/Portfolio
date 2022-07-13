import NewSection from "./NewSection";
import ProjectSection from "./ProjectSection";
import cssLogo from "../resources/css-3.svg";
import htmlLogo from "../resources/html-1.svg";
import nodeLogo from "../resources/nodejs-icon.svg";
import tailwindLogo from "../resources/tailwindcss.svg";
import reactLogo from "../resources/react.svg";
import typescriptLogo from "../resources/typescript.svg";
import styledComponentsLogo from "../resources/styledComponents.svg";
import styled from "styled-components";
import FlipCard from "./FlipCard";
import TechStackIconWrapper from "./TechStackIconWrapper";

const StyledProjects = styled.div`
`;

function quizLiveDemo() {
  return <a
            className=""
            href="www.yahoo.com"
          >live site</a>
}

const Projects = () => {
  return (
    <StyledProjects>
      <FlipCard
        background={"#FE7868"}
        fontColor={"#ffffff"}
        title={"Manager Locator"}
        components={[
          <p className="about-me-summary">
            This app was created to help my team keep my managers exact location
            up to date. I did not deploy this app but the code is on my github.
            This was a fun backend project to learn NodeJs.
          </p>,
          <TechStackIconWrapper icons={[tailwindLogo, nodeLogo, htmlLogo]} />,
        ]}
      />
      <ProjectSection
        title={"Quizzical"}
        summary={
          "The Quizzical app is from Scrimba.com. It hooks into a RESTful API which contains questions and answers. At the end, the quiz shows all right and wrong answers."
        }
        techStack={[reactLogo, styledComponentsLogo, htmlLogo]}
        projectDetails={
          "This was my first solo React project. It included API calls and required a large data destructure from the API call. I also used Styled Components with React for the first time. I learned a lot. You can view the deployed project here: "
        }
        liveDemo={quizLiveDemo}
      />
      <ProjectSection
        title={"This Portfolio"}
        summary={
          "Of course this portfolio. I think every project exposes a web developer to new tech, and new ways of doing things. This portfolio is not an exception."
        }
        techStack={[typescriptLogo, styledComponentsLogo, htmlLogo]}
        projectDetails={
          "This is my first Typescript project. So far I have learned, TypeScript is a great way to catch errors before runtime. It does seem much more time inefficient, however I can see it being very useful in large projects."
        }
      />
    </StyledProjects>
  );
};
export default Projects;
