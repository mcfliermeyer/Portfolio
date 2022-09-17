import styled, { useTheme } from "styled-components";
import FlipCard from "./FlipCard";
import NewSection from "./NewSection";
import TechStackIconWrapper from "./TechStackIconWrapper";
import { ReactComponent as TailwindLogo } from "../resources/tailwindcss.svg";
import { ReactComponent as ReactLogo } from "../resources/react.svg";
import { ReactComponent as TypescriptLogo } from "../resources/typescript.svg";
import { ReactComponent as SwiftLogo } from "../resources/swift.svg";
import { ReactComponent as AndroidLogo } from "../resources/androidLogo.svg";
import { ReactComponent as AppleLogo } from "../resources/appleLogo.svg";
import { ReactComponent as JavascriptLogo } from "../resources/javascriptLogo.svg";
import { ReactComponent as NodeLogo } from "../resources/nodejs-icon.svg";
import { ReactComponent as HtmlLogo } from "../resources/html-1.svg";
import { ReactComponent as CssLogo } from "../resources/css-3.svg";
import { ReactComponent as StyledComponentsLogo } from "../resources/styledComponents.svg";
import { MyTheme } from "../theme/globalStyles";
import Tooltip from "./Tooltip";

const StyledAndroidLogo = styled(AndroidLogo)`
  width: 60px;
  height: auto;
  margin: 0.5rem;
`;

const StyledSwiftLogo = styled(SwiftLogo)`
  width: 60px;
  height: auto;
  margin: 0.5rem;
`;

const StyledAppleLogo = styled(AppleLogo)`
  width: 60px;
  height: auto;
  margin: 0.5rem;
`;
const StyledTailwindLogo = styled(TailwindLogo)`
  width: 50px;
  height: auto;
  margin: 0.5rem;
`;
const StyledReactLogo = styled(ReactLogo)`
  width: 50px;
  height: auto;
  margin: 0.5rem;
`;
const StyledTypescriptLogo = styled(TypescriptLogo)`
  width: 50px;
  height: auto;
  margin: 0.5rem;
`;
const StyledJavascriptLogo = styled(JavascriptLogo)`
  width: 50px;
  height: auto;
  margin: 0.5rem;
`;
const StyledNodeLogo = styled(NodeLogo)`
  width: 50px;
  height: auto;
  margin: 0.5rem;
`;
const StyledHtmlLogo = styled(HtmlLogo)`
  width: 50px;
  height: auto;
  margin: 0.5rem;
`;
const StyledCssLogo = styled(CssLogo)`
  width: 50px;
  height: auto;
  margin: 0.5rem;
`;
const StyledStyledComponentsLogo = styled(StyledComponentsLogo)`
  width: 50px;
  height: auto;
  margin: 0.5rem;
`;

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
          min-height: 450px;
        }
      }
    }
  }
  .mobile-icons {
    width: 100%;
  }
  .subtitle {
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(p) => p.theme.colors.darkerPurple};
    font-weight: 600;
    margin: 0;
    margin-bottom: 1rem;
    letter-spacing: -0.5px;
  }
  @media (min-width: 1200px) {
    .bottom-anchor {
      position: absolute;
      bottom: 15px;
      left: 0;
      right: 0;
    }
  }
  .web-dev-icons {
    /* width: 80%; */
    margin-inline: auto;
  }
  @media (min-width: 1200px) {
    .web-dev-icons {
      width: 50%;
      margin-bottom: 1rem;
    }
  }
`;

const SkillsSection = () => {
  const theme = useTheme() as MyTheme;
  const cardFontColor = "#000000";
  const cardColor = theme.colors.primaryYellow;
  const ctaColor = theme.colors.darkerPinkish;
  return (
    <StyledSkillsSection>
      <NewSection title={"Skills"} />
      <div className="large-screen-flex">
        <FlipCard
          overload={{
            fontColor: cardFontColor,
            backgroundColor: cardColor,
            ctaColor: ctaColor,
            isTop: true,
          }}
          title={"Web"}
          frontComponents={[
            <p>
              I am experienced in web design and coding web pages from design
              programs like Figma. Web development has many technologies to work
              with, below are the additional frameworks and libraries I
              currently and comfortable with.
            </p>,
            <h1 className="card-title">Web Tech</h1>,
            <h2 className="subtitle">I am comfortable with</h2>,
            <div className="web-dev-icons">
              <Tooltip content="Typescript">
                <StyledTypescriptLogo />
              </Tooltip>
              <Tooltip content="React">
                <StyledReactLogo />
              </Tooltip>
              <Tooltip content="NodeJS">
                <StyledNodeLogo />
              </Tooltip>
              <Tooltip content="Tailwind Css">
                <StyledTailwindLogo />
              </Tooltip>
            </div>,
          ]}
          backComponents={[
            <p>
              I dove in head first with web developement in December of 2021. I
              was lucky enough to have found a welcoming and eager to learn
              community at scrimba.com There I learned the basics of HTML CSS
              and Javascript. After that, I was stumbling through the woods and
              picking up all different web technologies along the way. The more
              I learned, the more I realized how vast the amount of web tech
              there was. I will be forever learning as a web developer and I
              couldn't be more excited.
            </p>,
          ]}
        />
        <FlipCard
          overload={{
            fontColor: cardFontColor,
            backgroundColor: cardColor,
            ctaColor: ctaColor,
            isBottom: true,
          }}
          title={"Mobile"}
          frontComponents={[
            <p>
              Mobile app development is something I started as a hobby and
              eventually released an app for iOS. I personally released the iOS
              version of my app and I helped my friend with his Android release.
              I am comfortable with iOS and familiar with Android operating
              systems.
            </p>,
            <h1 className="card-title">Mobile Platforms</h1>,
            <div className="mobile-icons">
              <Tooltip content="Android">
                <StyledAndroidLogo />
              </Tooltip>
              <Tooltip content="Apple">
                <StyledAppleLogo />
              </Tooltip>
            </div>,
          ]}
          backComponents={[
            <p>
              Writing iOS apps with the apple programming language "Swift" was a
              great experience. I had an app on the app store for two years and
              received a messages about how it helped people. I made the app
              specifically to help my co-workers in telecommunications. It was
              not meant to be something to make money or really do anything
              except help with a very specific problem. The fact that the app
              ended up with almost 4,000 downloads and I was being contacted
              from across the country, was such a great feeling. It is
              still being used today, although I am no longer paying to keep it
              on the app store.
            </p>,
          ]}
        />
      </div>
    </StyledSkillsSection>
  );
};
export default SkillsSection;
