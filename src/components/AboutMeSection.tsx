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
        I am a mobile and web app developer with a well received iOS app I
        released in 2018. Hello, my name is Mark Meyer. I have a passion for
        troubleshooting and problem solving. Logic and troubleshooting is a
        skill I developed and sharpened in my current career as a
        telecommunications technician. I decided to take my passion for problem
        solving and move it into a career. So here I am, searching for more
        puzzles to solve.
      </p>
    </StyledAboutMeSection>
  );
};
export default AboutMeSection;
