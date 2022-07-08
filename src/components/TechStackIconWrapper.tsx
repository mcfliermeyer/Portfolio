import styled from "styled-components";

const StyledTechStackIconWrapper = styled.div`
  padding-bottom: 1rem;
  padding-top: 0.3rem;
  .icon {
    width: 40px;
    height: auto;
    padding: 0.5rem;
  }
`;

type Props = {
  icons: string[];
};
const TechStackIconWrapper = (props: Props) => {
  return (
    <StyledTechStackIconWrapper>
      {props.icons.map((icon) => (
        <img className="icon" alt="tech icon" src={icon} key={icon} />
      ))}
    </StyledTechStackIconWrapper>
  );
};
export default TechStackIconWrapper;
