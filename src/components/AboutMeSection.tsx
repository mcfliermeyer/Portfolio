import styled from "styled-components";
import NewSection from "./NewSection";

const StyledAboutMeSection = styled.section`
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
`;

type Props = {};
const AboutMeSection = (props: Props) => {
  return (
    <StyledAboutMeSection>
      <NewSection title="I am" subtitle="a web developer" />
      <p className="about-me-summary">
        Hello, my name is Mark Meyer. I am a web developer. I have a passion for
        troubleshooting and problem solving. Web app development is filled with
        tiny puzzles for me to figure out every day. I recently decided to take
        my passion for problem solving and move it into a career. So here I am,
        searching for more puzzles to solve.
      </p>
    </StyledAboutMeSection>
  );
};
export default AboutMeSection;
