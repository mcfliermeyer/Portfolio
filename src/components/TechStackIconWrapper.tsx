import styled from "styled-components";

const StyledTechStackIconWrapper = styled.div`
  padding-bottom: 0.5rem;
  padding-top: 0.3rem;
  .icon {
    width: 40px;
    height: auto;
    padding: 0.5rem;
  }
  @media (min-width: 1200px) {
    .icon {
      width: 65px;
      padding: 1rem;
    }
  }
`;

type Props = {
  icons: string[];
  className?: string;
};
const TechStackIconWrapper = (props: Props) => {
  return (
    <StyledTechStackIconWrapper>
      <h1 className="card-title">Tech Stack Used</h1>
      {props.icons.map((icon) => (
        <img className="icon" alt="tech icon" src={icon} key={icon} />
      ))}
    </StyledTechStackIconWrapper>
  );
};
TechStackIconWrapper.Styled = StyledTechStackIconWrapper
export default TechStackIconWrapper;
