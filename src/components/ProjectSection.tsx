import styled from "styled-components";
import TechStackIconWrapper from "./TechStackIconWrapper";
import { useState, useRef, useLayoutEffect } from "react";

const StyledProjectSection = styled.section`
  background-color: ${(props) => props.theme.colors.primaryPinkish};
  color: white;
  border-bottom: 0.1px white solid;
  margin-inline: auto;
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
    margin: auto auto 5px;
    border: none;
    box-shadow: 0 3px 2px 1px rgb(128, 128, 128, 0.3);
  }
  /* css card flip logic  */
  perspective: 2000px;
  min-height: max-content;
  .flipper {
    transform: rotateY(180deg);
  }
  #flipper {
    position: relative;
  }
  .flipper,
  .unflipper {
    transition: 0.6s;
    transform-style: preserve-3d;
    .front,
    .back {
      backface-visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin-inline: auto;
      background-color: ${(props) => props.theme.colors.primaryPinkish};
      padding: 1.5rem 1.6rem;
    }
    .front {
      z-index: 2;
      transform: rotateY(0deg);
    }
    .back {
      transform: rotateY(180deg);
    }
  }
`;
function convertRemToPixels(rem: number) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
type Props = {
  title: String;
  summary: String;
  techStack: string[];
};
const ProjectSection = ({ title, summary, techStack }: Props) => {
  const [isFlipped, setIsFlipped] = useState(true);
  const [cardHeight, setCardHeight] = useState(0);
  const cardEl = useRef<HTMLDivElement>();

  const handleDetailClick = () => {
    setIsFlipped(!isFlipped);
    if (cardEl.current) {
      setCardHeight(() => {//hacked up way, looked at padding in styled then converted rem to px to get actual height
        if (cardEl.current) {
          return cardEl.current.clientHeight - convertRemToPixels(1.5 * 2);
        } else return 0;
      });
    }
  };

  return (
    <StyledProjectSection>
      <div
        className={isFlipped ? "unflipper" : "flipper"}
        id="flipper"
        style={{ minHeight: { cardHeight } + "px" }}
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
          style={{ maxHeight: `${cardHeight}px`, minHeight: `${cardHeight}px` }}
        >
          <h1 className="">this is the bak</h1>
          <button
            className="more-detail-btn"
            onClick={() => handleDetailClick()}
          >
            more detail
          </button>
        </div>
      </div>
    </StyledProjectSection>
  );
};

ProjectSection.Styled = StyledProjectSection;
export default ProjectSection;
