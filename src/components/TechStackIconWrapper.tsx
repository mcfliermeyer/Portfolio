import styled from "styled-components";

const StyledTechStackIconWrapper = styled.div`
  padding-bottom: 0.5rem;
  padding-top: 0.3rem;
  width: 80%;
  margin-inline: auto;
  .icon {
    width: 40px;
    height: auto;
    padding: 0.5rem;
  }
  @media (min-width: 1200px) {
    .icon {
      width: 50px;
      padding: 1rem;
    }
  }
  .subtitle {
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(p) => p.theme.colors.darkerPurple};
    font-weight: 600;
    margin: 0;
    letter-spacing: -0.5px;
  }
`;

type Props = {
  icons: React.FunctionComponent<React.SVGProps<SVGSVGElement>>[];
  className?: string;
};
const TechStackIconWrapper = (props: Props) => {
  return (
    <StyledTechStackIconWrapper>
      <h1 className="card-title">Web Tech</h1>
      <h2 className="subtitle">I am comfortable with</h2>
      {/* {props.icons} */}
    </StyledTechStackIconWrapper>
  );
};
TechStackIconWrapper.Styled = StyledTechStackIconWrapper
export default TechStackIconWrapper;
