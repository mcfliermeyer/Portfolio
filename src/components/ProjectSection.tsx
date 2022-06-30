import { title } from "process";
import styled from "styled-components";

const StyledProjectSection = styled.section`
  background-color: ${(props) => props.theme.colors.primaryPinkish};
  color: white;
  padding: 1.5rem 1.6rem;

  .title {
    font-size: 24px;
    font-weight: 600;
    font-family: ${(props) => props.theme.fonts.nameTitleFont};
  }

  .summary {
  }

  .tech-stack {
    font-size: 17px;
    font-weight: 600;
  }

  .more-detail-btn {
    background-color: ${(props) => props.theme.colors.primaryBlue};
    color: white;
    font-size: 16px;
    font-weight: 600;

    padding: 1rem 2rem;
    margin: auto auto 50px;
    border: none;

    box-shadow: 0 3px 2px 1px rgb(128, 128, 128, 0.3);
  }
`;

type Props = {
  title: String;
  summary: String;
  techStack: String;
  // techIcons: [SVGElement]; todo, make component to hold icons and links to tech maybe??
};
const ProjectSection = ({ title, summary, techStack }: Props) => {
  return (
    <StyledProjectSection>
      <h1 className="title">{title}</h1>
      <p className="summary">{summary}</p>
      <h3 className="tech-stack">{techStack}</h3>
      <button className="more-detail-btn">more detail</button>
      <div className="tech-icon-container">
        <svg className="css"></svg>
      </div>
    </StyledProjectSection>
  );
};

ProjectSection.Styled = StyledProjectSection;
export default ProjectSection;
