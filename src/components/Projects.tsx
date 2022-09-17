import { useState } from "react";
import styled, { useTheme } from "styled-components";

//components
import NewSection from "./NewSection";
import FlipCard from "./FlipCard";
import GithubIconWithLink from "./GithubIconWithLink";
import LiveSiteWithLink from "./LiveSiteWithLink";

//logos and svgs
import { ReactComponent as NodeLogo } from "../resources/nodejs-icon.svg";
import { ReactComponent as TailwindLogo } from "../resources/tailwindcss.svg";
import { ReactComponent as ReactLogo } from "../resources/react.svg";
import { ReactComponent as TypescriptLogo } from "../resources/typescript.svg";
import { ReactComponent as StyledComponentsLogo } from "../resources/styledComponents.svg";
import { ReactComponent as SwiftLogo } from "../resources/swift.svg";
import { ReactComponent as AppleLaptopLogo } from "../resources/appleLaptopLogo.svg";
import { ReactComponent as ScreenShotArrow } from "../resources/screen-shot-arrow.svg";
import appDownloads from "../resources/appDownloads.jpg";
import { FunctionComponent } from "react";
import { MyTheme } from "../theme/globalStyles";
import LogoWithPositioning from "./LogoWithPositioning";

const StyledProjects = styled.div`
  .card-title {
    position: relative;
    font-size: 1.25rem;
    font-weight: 600;
    font-family: ${(props) => props.theme.fonts.nameTitleFont};
    margin: 0.7rem 0 0.2rem;
    width: fit-content;
    margin-inline: auto;
  }
  @media (min-width: 1200px) {
    .large-screen-flex {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      grid-gap: 20px;
      ${FlipCard.Styled} {
        min-width: 90%;
        .front,
        .back {
          border-radius: 1em;
          min-height: 370px;
        }
      }
    }
  }
  .img-container {
    position: fixed;
    top: 0%;
    left: 0%;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: rgb(226, 101, 77, 0.85);
    img {
      width: 100%;
      border-radius: 0.4rem;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%); //centers img
      opacity: 1;
    }
    @media (min-width: 1200px) {
      img {
        width: 80%;
      }
    }
  }
  .links {
    /* margin-top: 2rem; */
  }
  .apple {
    width: 80px;
    margin-inline: auto;
    transition: all 0.2s ease-in-out;
  }
  .apple:hover {
    transform: scale(1.2);
  }
  .apple-wrapper {
    position: relative;
    width: 80px;
    /* margin-bottom: 2rem; */
    margin-inline: auto;
  }
  .screen-shot-arrow {
    position: absolute;
    top: -14px;
    left: -70px;
    width: 90px;
    transform: rotate3d(1, 2, 4, -30deg);
    stroke: ${(p) => p.theme.colors.primaryBlue};
  }
`;

interface ProjectProps {
  ref?: React.RefObject<HTMLInputElement>;
}

const Projects: FunctionComponent<ProjectProps> = () => {
  const [showModal, setShowModal] = useState(false);
  const theme = useTheme() as MyTheme;
  const cardColor = theme.colors.darkerPinkish;
  const ctaColor = theme.colors.primaryYellow;
  const ctaFontColor = "#000000";
  return (
    <StyledProjects>
      {showModal && (
        <div className="img-container" onClick={() => setShowModal(false)}>
          <img
            src={appDownloads}
            alt="apple analytics"
            className="app-download-img"
          />
        </div>
      )}
      <NewSection title={"Projects"} />
      <div className="large-screen-flex">
        <FlipCard
          overload={{
            backgroundColor: cardColor,
            ctaColor: ctaColor,
            ctaFontColor: ctaFontColor,
            isTop: true,
          }}
          title={"This Portfolio"}
          frontComponents={[
            <p className="">
              Of course this portfolio. I decided to try out{" "}
              <span className="highlight-text">typescript</span> for this
              portfolio. Each component is custom made using typescript with
              styled-components.
            </p>,
            <div className="links">
              <GithubIconWithLink link="https://github.com/mcfliermeyer/Portfolio" />
            </div>,
          ]}
          backComponents={[
            <h1 className="card-title">
              <LogoWithPositioning top={"-16px"} left={"-60px"} width={"50px"}>
                <TypescriptLogo />
              </LogoWithPositioning>
              TypeScript
            </h1>,
            <p>
              This is my first Typescript project. I have learned TypeScript is
              a great way to catch errors before runtime. Having come from a
              strongly typed programming language (iOS's Swift), Typescript has
              a familiar feel to it and I do enjoy using the features it
              provides.
            </p>,
          ]}
        />
        <FlipCard
          overload={{
            backgroundColor: cardColor,
            ctaColor: ctaColor,
            ctaFontColor: ctaFontColor,
          }}
          title={"Manager Locator"}
          frontComponents={[
            <p className="">
              This app was created with NodeJs to help my team keep my managers
              exact location up to date. I did not deploy this app but the code
              is on my github.
            </p>,
            <div className="links">
              <GithubIconWithLink link="https://github.com/mcfliermeyer/FieldTechBossAlert" />
            </div>,
          ]}
          backComponents={[
            <h1 className="card-title">
              <LogoWithPositioning top="-18px" left="-60px" width="50px">
                <NodeLogo />
              </LogoWithPositioning>
              NodeJs
            </h1>,
            <p>
              I used NodeJs along with Express for this backend project. I
              learned about RESTful API paths and server side rendering.
            </p>,
            <h1 className="card-title">
              <LogoWithPositioning top={"-10px"} left={"-64px"} width={"55px"}>
                <TailwindLogo />
              </LogoWithPositioning>
              TailwindCss
            </h1>,
            <p>
              Tailwind was a really quick way to markup my html. It was very
              intuitive and easy to learn.
            </p>,
          ]}
        />
        <FlipCard
          overload={{
            backgroundColor: cardColor,
            ctaColor: ctaColor,
            ctaFontColor: ctaFontColor,
          }}
          title={"Quizzical"}
          frontComponents={[
            <p className="">
              The Quizzical app is from Scrimba.com. It hooks into a RESTful API
              which contains questions and answers. At the end, the quiz
              highlights all right and wrong answers.
            </p>,
            <div className="links">
              <GithubIconWithLink link="https://github.com/mcfliermeyer/Quizzical" />
              <LiveSiteWithLink link="https://flier-quizzical-app.netlify.app/" />
            </div>,
          ]}
          backComponents={[
            <h1 className="card-title">General Learning</h1>,
            <p>
              This project was my first large scale web project with no real
              guidance to follow from a tutorial standpoint. I learned about
              RESTfull API's.
            </p>,
            <h1 className="card-title">
              <LogoWithPositioning top={"-20px"} left={"-70px"} width={"70px"}>
                <ReactLogo />
              </LogoWithPositioning>
              React
            </h1>,
            <p>
              This was my first solo React project. I learned a lot about React
              and React Hooks. Using React to encapsulate logic and components
              makes sense to me and helps me organize projects.
            </p>,
            <h1 className="card-title">
              <LogoWithPositioning top={"-13px"} left={"-65px"} width={"60px"}>
                <StyledComponentsLogo />
              </LogoWithPositioning>
              Styled-Components
            </h1>,
            <p>
              Styled-components allows for even better encapsulation and
              organization of css logic. It allows for quick changes to css
              without having to dig through a large style-sheet. Themes and
              global styles makes styling of components a breeze.
            </p>,
          ]}
        />
        <FlipCard
          overload={{
            backgroundColor: cardColor,
            ctaColor: ctaColor,
            ctaFontColor: ctaFontColor,
            isBottom: true,
          }}
          title={"Color Code Finder"}
          frontComponents={[
            <p className="">
              This was an iOS app I made to help my co-workers with
              telecommunication's color code. I no longer pay to keep it on the
              app store. However I do have a screen shot of the app statistics.
            </p>,
            <div className="apple-wrapper">
              <AppleLaptopLogo
                className="apple"
                onClick={() => setShowModal(true)}
              />
              <ScreenShotArrow className="screen-shot-arrow" />
            </div>,
          ]}
          backComponents={[
            <h1 className="card-title">
              <LogoWithPositioning top={"-20px"} left={"-70px"} width={"60px"}>
                <SwiftLogo />
              </LogoWithPositioning>
              Swift
            </h1>,
            <p>
              Color Code Finder was the first app I deployed anywhere. People at
              work were having a hard time with telecommunication color code. I
              had just started to learn Swift. I recognized a problem, and this
              app was my solution. It got a great reception. Although I really
              only told maybe 20 co-workers about it. I eventually got messages
              from all across the country about it. For a niche app, it did
              pretty well.
            </p>,
          ]}
        />
      </div>
    </StyledProjects>
  );
};
export default Projects;
