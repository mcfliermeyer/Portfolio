import styled from "styled-components";

//components
import NewSection from "./NewSection";
import FlipCard from "./FlipCard";
import TechStackIconWrapper from "./TechStackIconWrapper";
import GithubIconWithLink from "./GithubIconWithLink";
import LiveSiteWithLink from "./LiveSiteWithLink";

//logos and svgs
import htmlLogo from "../resources/html-1.svg";
import nodeLogo from "../resources/nodejs-icon.svg";
import tailwindLogo from "../resources/tailwindcss.svg";
import reactLogo from "../resources/react.svg";
import typescriptLogo from "../resources/typescript.svg";
import styledComponentsLogo from "../resources/styledComponents.svg";

const StyledProjects = styled.div`
  .card-title {
    font-size: 1.25rem;
    font-weight: 600;
    font-family: ${(props) => props.theme.fonts.nameTitleFont};
    margin: 0 0 0.2rem;
  }
  p {
    margin: 0 0 1rem;
  }
`;

const Projects = () => {
  return (
    <StyledProjects>
      <NewSection title={"Projects"} />
      <FlipCard
        background={"#FE7868"}
        fontColor={"#ffffff"}
        title={"Manager Locator"}
        frontComponents={[
          <p className="">
            This app was created to help my team keep my managers exact location
            up to date. I did not deploy this app but the code is on my github.
            This was a fun backend project to learn NodeJs.
          </p>,
          <TechStackIconWrapper icons={[tailwindLogo, nodeLogo, htmlLogo]} />,
        ]}
        backComponents={[
          <GithubIconWithLink link="https://github.com/mcfliermeyer/FieldTechBossAlert" />,
          <h1 className="card-title">NodeJs</h1>,
          <p>
            Every project teaches me something new. This project specifically
            taught me some backend technologies. Specifically NodeJs and how to
            use Node to create API paths that can then make an outside API call.
            Server side rendering was also a new concept to me before this
            project. Node was a lot of fun to play with and I look forward to
            using it again for future projects.
          </p>,
          <p>
            Tailwind was the other technology I decided to use and learn. At
            first I was very hesitant, but I quickly saw a dramatic increase in
            my productivity. Tailwind uses inline prebuilt classes that were
            much more intuitive than I had thought they would be. Tailwind is at
            the top of my list for any quick personal projects. Although a large
            project could start to look messy with too many inline classes I
            think.
          </p>,
        ]}
      />
      <FlipCard
        background={"#FE7868"}
        fontColor={"#ffffff"}
        title={"Quizzical"}
        frontComponents={[
          <p className="">
            The Quizzical app is from Scrimba.com. It hooks into a RESTful API
            which contains questions and answers. At the end, the quiz shows all
            right and wrong answers.
          </p>,
          <TechStackIconWrapper
            icons={[reactLogo, styledComponentsLogo, htmlLogo]}
          />,
        ]}
        backComponents={[
          <GithubIconWithLink link="https://github.com/mcfliermeyer/Quizzical" />,
          <LiveSiteWithLink link="https://flier-quizzical-app.netlify.app/" />,
          <h1 className="card-title">General Learning</h1>,
          <p>
            This project was my first large scale project with no real guidance
            to follow from a tutorial standpoint. I cannot understate how much
            this project taught me. I had learned and interacted with API's
            previously to building this. However, using this API felt more "real
            world" than the learning API's I had used previously. Learning and
            destructuring and restructuring data to my own needs was an eye
            opener. I also dove into and learned how to use new techniques and
            styles. I say often that "each project teaches me something new."
            WELL, this project taught me a whole new world of web and app
            development exist, I just need to know how to find it.
          </p>,
          <h1 className="card-title">React</h1>,
          <p>
            This was my first solo React project. I learned a lot about React
            Hooks. Styled-components was a big eye opener for me. Using React to
            encapsulate logic and components made sense to me. Before using
            styled-components, having to jump between each component and scroll
            through the css really didn't sit right. React with hooks and
            styled-components is a really enjoyable way for make projects.
          </p>,
        ]}
      />
      <FlipCard
        background={"#FE7868"}
        fontColor={"#ffffff"}
        title={"This Portfolio"}
        frontComponents={[
          <p className="">
            Of course this portfolio. I decided to try out TypeScript for this
            portfolio along with an old favorite of styled-components.
          </p>,
          <TechStackIconWrapper
            icons={[typescriptLogo, styledComponentsLogo, htmlLogo]}
          />,
        ]}
        backComponents={[
          <GithubIconWithLink link="https://github.com/mcfliermeyer/Portfolio" />,
          <h1 className="card-title">TypeScript</h1>,
          <p>
            This is my first Typescript project. So far I have learned
            TypeScript is a great way to catch errors before runtime. It does
            seem much more time inefficient to write, however I think the
            efficieny of catching bugs before compile time will more than make
            up for it with larger projects that have multiple contributers.
            Having come from a strongly typed programming language, Typescript
            has a familiar feel to it and I do enjoy using the features it
            provides.
          </p>,
        ]}
      />
    </StyledProjects>
  );
};
export default Projects;
