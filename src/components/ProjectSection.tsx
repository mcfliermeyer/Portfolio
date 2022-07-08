import styled from "styled-components";
import TechStackIconWrapper from "./TechStackIconWrapper";
import { useState, useRef, useEffect } from "react";

const StyledProjectSection = styled.section`
  color: white;
  border-bottom: 0.1px white solid;
  margin-inline: auto;
  display: block;
  min-width: 100%;
  .title {
    font-size: 24px;
    font-weight: 600;
    font-family: ${(props) => props.theme.fonts.nameTitleFont};
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
    border: none;
    box-shadow: 0 3px 2px 1px rgb(128, 128, 128, 0.3);
  }
  /* css card flip logic  */
  perspective: 2000px;
  .flipper {
    position: relative;
    transform: rotateY(180deg);
  }
  .flipper,
  .unflipper {
    transition: 0.6s;
    transform-style: preserve-3d;
    background-color: ${(props) => props.theme.colors.primaryPinkish};
    .front,
    .back {
      backface-visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin-inline: auto;
    }
    .front {
      z-index: 2;
      transform: rotateY(0deg);
      padding: 1.5rem 1.6rem;
    }
    .back {
      transform: rotateY(180deg);
      padding: 1.5rem 1.6rem;
    }
  }
`;

type Props = {
  title: String;
  summary: String;
  techStack: string[];
  projectDetails: String;
};
const ProjectSection = ({ title, summary, techStack, projectDetails }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardHeight, setCardHeight] = useState(0);
  const cardEl = useRef<HTMLDivElement>();

  const handleDetailClick = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    if (cardEl.current) {
      setCardHeight(() => {
        if (cardEl.current) {
          return cardEl.current.clientHeight + convertRemToPixels(1.5 * 2);
        } else return 0;
      });
    }
  },[]);

  return (
    <StyledProjectSection>
      <div
        className={isFlipped ? "flipper" : "unflipper"}
        style={{ height: `${cardHeight}px` }}
      >
        <div
          ref={(el) => {
            if (el) cardEl.current = el;
          }}
          className="front"
        >
          <h1 className="title">{title}</h1>
          <p className="summary">{summary}</p>
          <h3 className="tech-stack">Tech Stack Used</h3>
          <TechStackIconWrapper icons={techStack} />
          <button
            className="more-detail-btn"
            onClick={() => handleDetailClick()}
          >
            more detail
          </button>
        </div>
        <div
          className="back"
        >
          <h1 className="project-details-title title">Project Details</h1>
          <p className="project-details summary">{projectDetails}</p>
          <button
            className="more-detail-btn"
            onClick={() => handleDetailClick()}
          >
            go back
          </button>
        </div>
      </div>
    </StyledProjectSection>
  );
};

ProjectSection.Styled = StyledProjectSection;
export default ProjectSection;

function convertRemToPixels(rem: number) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
