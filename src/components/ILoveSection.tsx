import styled from "styled-components"
import NewSection from "./NewSection";

const StyledILoveSection = styled.section`
  .what-i-love-summary {
    margin: 1rem;
    margin-inline: auto;
    padding-inline: 1.5rem;
  }
  @media (min-width: 425px) {
    .what-i-love-summary {
      max-width: 700px;
    }
  }
`;

type Props = {}
const ILoveSection = (props: Props) => {
  return (
    <StyledILoveSection>
      <NewSection title="I love" subtitle="inuitive user experience" />
      <p className="what-i-love-summary">
        Intuitive and pleasant <span className="highlighted-text">U</span>ser e
        <span className="highlighted-text">X</span>perience is what I do best.
        An over-complicated or technical looking website/app can make a users
        experience incredibly frustrating.{" "}
        <span className="highlighted-text">U</span>ser e
        <span className="highlighted-text">X</span>perience or{" "}
        <span className="highlighted-text">UX</span> is a major focus point for
        me.
      </p>
    </StyledILoveSection>
  );
}
export default ILoveSection