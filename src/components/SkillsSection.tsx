import styled from "styled-components";
import FlipCard from "./FlipCard";
import NewSection from "./NewSection";
import TechStackIconWrapper from "./TechStackIconWrapper";
import tailwindLogo from "../resources/tailwindcss.svg";
import reactLogo from "../resources/react.svg";
import typescriptLogo from "../resources/typescript.svg";
// import javaLogo from './resources/java.svg'
import swiftLogo from "../resources/swift.svg";
import androidLogo from "../resources/androidLogo.svg";
// import pythonLogo from './resources/python.svg'
import javascriptLogo from "../resources/javascriptLogo.svg";
import nodeLogo from "../resources/nodejs-icon.svg";
import htmlLogo from "../resources/html-1.svg";
import cssLogo from "../resources/css-3.svg";
import styledComponentsLogo from "../resources/styledComponents.svg";
import appDownloads from "../resources/appDownloads.jpg";

const StyledSkillsSection = styled.section`
  .img-container {
    width: 80%;
    margin-inline: auto;
    img {
      width: 100%;
    }
  }
  .card-title {
    font-size: 1.25rem;
    font-weight: 600;
    font-family: ${(props) => props.theme.fonts.nameTitleFont};
    margin: 0 0 0.2rem;
  }
  @media (min-width: 1200px) {
    .large-screen-flex {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      grid-gap: 20px;
      ${FlipCard.Styled} {
        min-width: 90%;
        .front,
        .back {
          border-radius: 1em;
          min-height: 420px;
        }
      }
    }
  }
`;

const SkillsSection = () => {
  return (
    <StyledSkillsSection>
      <NewSection title={"Skills"} />
      <div className="large-screen-flex">
        <FlipCard
          overload={{
            bg: "#ffc753",
            isTop: true,
          }}
          title={"Web"}
          frontComponents={[
            <p>
              Web development has a wide variety of languages and technologies to
              use. I have mostly focused on HTML, Javascript, and Css with their
              various frameworks and libraries. These are the ones I've used so
              far.
            </p>,
            <WebSkillIcons key={1} />,
          ]}
          backComponents={[
            <p>
              I dove in head first with web developement in December of 2021. I
              was lucky enough to have found a welcoming and eager to learn
              community at scrimba.com There I learned the basics of HTML CSS and
              Javascript. After that, I was stumbling through the woods and
              picking up all different web technologies along the way. The more I
              learned, the more I realized how vast the amount of web tech there
              was. I will be forever learning as a web developer and I couldn't be
              more excited.
            </p>,
          ]}
        />
        <FlipCard
          overload={{
            bg: "#ffc753",
            isBottom: true,
          }}
          title={"Mobile"}
          frontComponents={[
            <p>
              Mobile app development is something I started as a hobby and
              eventually released an app for iOS. I learned Swift and Android
              along the way.
            </p>,
            <MobileSkillIcons key={2} />,
          ]}
          backComponents={[
            <p>
              Writing iOS apps with Swift was a great experience. I had an app on
              the app store for 2 years and recieved a few messages about how it
              helped people. That was a great feeling. It is still being used
              today, although I am no longer paying to keep it on the app store.
            </p>,
            <div className="img-container">
              <img
                src={appDownloads}
                alt="apple analytics"
                className="app-download-img"
              />
            </div>,
            <p>
              This app is something I am really proud of, and I look forward to
              doing more native app development.
            </p>,
          ]}
        />
      </div>
    </StyledSkillsSection>
  );
};
export default SkillsSection;

function WebSkillIcons() {
  return (
    <TechStackIconWrapper
      className="tech-stack-icons"
      icons={[
        javascriptLogo,
        typescriptLogo,
        reactLogo,
        nodeLogo,
        htmlLogo,
        cssLogo,
        styledComponentsLogo,
        tailwindLogo,
      ]}
    />
  );
}
function MobileSkillIcons() {
  return <TechStackIconWrapper icons={[swiftLogo, androidLogo]} />;
}
