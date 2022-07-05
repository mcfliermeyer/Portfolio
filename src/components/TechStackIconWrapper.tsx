import styled from "styled-components";

const StyledTechStackIconWrapper = styled.div`
  padding-bottom: 1rem;
  padding-top: .3rem;
  .icon {
    width: 40px;
    height: auto;
    padding: .5rem;
  }
`;

type Props = {
  icons: string[];
};
const TechStackIconWrapper = (props: Props) => {
  return (
    <StyledTechStackIconWrapper>
      {props.icons.map((icon) => (
        <img className="icon" alt="tech icon" src={icon} />
      ))}
    </StyledTechStackIconWrapper>
  );
};
export default TechStackIconWrapper;
