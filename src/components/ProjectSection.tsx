import styled from "styled-components";
import TechStackIconWrapper from "./TechStackIconWrapper";
import { useState, useRef, useEffect } from "react";

const StyledProjectSection = styled.section`
  color: white;
  border-bottom: 0.1px white solid;
  margin-inline: auto;
  display: block;
  min-width: 100%;
  position: relative;
  .title {
    font-size: 24px;
    font-weight: 600;
    font-family: ${(props) => props.theme.fonts.nameTitleFont};
  }
  .tech-stack {
    font-size: 17px;
    font-weight: 600;
  }
  .more-detail-btn,
  a {
    box-sizing: border-box;
    line-height: 1rem;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primaryBlue};
    color: white;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    padding: 1rem 2rem;
    margin: 0.5rem;
    border: none;
    box-shadow: 0 3px 2px 1px rgb(128, 128, 128, 0.3);
  }
  .flex {
    margin-inline: auto;
    width: fit-content;
    display: flex;
    flex-direction: column;
  }

  /* css card flip logic  */
  perspective: 2000px;
  .flipper {
    /* position: relative; */
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
      .back-arrow-container {
        position: absolute;
        top: 5px;
        left: 0px;
        cursor: pointer;
      }
    }
  }
`;

type Props = {
  title: string;
  summary: string;
  techStack: string[];
  projectDetails: string;
  liveDemo?: Function;
};
const ProjectSection = ({
  title,
  summary,
  techStack,
  projectDetails,
  liveDemo,
}: Props) => {
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
          return cardEl.current.clientHeight + convertRemToPixels(1.5 * 1.3);
        } else return 0;
      });
    }
  }, []);

  return (
    <StyledProjectSection>
      <div
        className={isFlipped ? "flipper" : "unflipper"}
        style={{ height: `${cardHeight}px`, maxHeight: `${cardHeight}px` }}
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
        <div className="back">
          <div
            className="back-arrow-container"
            onClick={() => handleDetailClick()}
          >
            <svg
              viewBox="-1.226 -2.624 23.803 22.849"
              width="62"
              height="62"
              fill="none"
            >
              <path
                d="M 1.207 6.839 C 11.331 18.867 15.398 18.134 14.153 9.206 C 14.056 8.51 14.289 1.733 13.775 1.483 C 11.646 0.448 11.167 5.765 10.88 6.7780000000000005 C 10.697 7.422 11.361 5.557 11.654 4.982 C 12.025 4.254 12.54 1.268 14.129 1.71 C 15.792 2.174 19.075 5.788 20.063 7.2940000000000005"
                stroke="#34CACE"
                strokeWidth="1"
                transform="matrix(0.809017, -0.587786, 0.587786, 0.809017, -2.996215, 8.076933)"
              ></path>
            </svg>
          </div>
          <h1 className="project-details-title title">Project Details</h1>
          <p className="project-details summary">{projectDetails}</p>
          <div className="flex">
            <a href="www.yahoo.com" className="github-link">
              github repo
            </a>
            {liveDemo?.()}
          </div>
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
