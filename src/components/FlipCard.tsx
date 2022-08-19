import { useState } from "react";
import styled from "styled-components";
import FlipArrow from "./FlipArrow";
import useElementSize from "./hooks/useElementSize";
import TechStackIconWrapper from "./TechStackIconWrapper";

const StyledFlipCard = styled.div<FlipCardProps>`
  border-bottom: 1px white solid;
  margin-inline: auto;
  display: block;
  position: relative;
  color: #fff;

  @media (min-width: 425px) {
    max-width: 800px;
    margin-inline: auto;
  }
  .title {
    font-size: 1.5rem;
    font-weight: 600;
    font-family: ${(props) => props.theme.fonts.nameTitleFont};
  }
  .more-detail-btn {
    box-sizing: border-box;
    line-height: 1em;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primaryBlue};
    color: white;
    font-size: 1rem;
    font-weight: 600;
    font-family: ${(props) => props.theme.fonts.nameTitleFont};
    text-decoration: none;
    padding: 1em 2em;
    margin: 0.5em;
    border: none;
    box-shadow: 0 3px 2px 1px rgb(128, 128, 128, 0.3);
  }

  @media (min-width: 1200px) {
    .more-detail-btn {
      position: absolute;
      bottom: 15px;
      left: 20px;
      right: 20px;
    }
    ${TechStackIconWrapper.Styled} {
      position: absolute;
      left: 20px;
      right: 20px;
      bottom: 90px;
    }
  }

  /* css card flip logic  */
  perspective: 2000px;
  .flipper {
    transform: rotateY(180deg);
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
      padding: 1em 1.5em 0.5em;
      background-color: ${(props) => props.overload?.bg};
      border-top-left-radius: ${(props) => (props.overload?.isTop ? "1em" : 0)};
      border-top-right-radius: ${(props) =>
        props.overload?.isTop ? "1em" : 0};
      border-bottom-left-radius: ${(props) =>
        props.overload?.isBottom ? "1em" : 0};
      border-bottom-right-radius: ${(props) =>
        props.overload?.isBottom ? "1em" : 0};
    }
    .front {
      z-index: 2;
      transform: rotateY(0deg);
    }
    .back {
      transform: rotateY(180deg);
      /* padding: 1rem 1.5rem; */
      .back-arrow-container {
        position: absolute;
        top: -25px;
        left: -8px;
        padding: 10px;
        cursor: pointer;
      }
    }
  }
`;

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type Color = RGB | RGBA | HEX | string;
interface FlipCardProps {
  overload?: {
    isTop?: Boolean;
    isBottom?: Boolean;
    bg: Color;
    fontColor?: Color;
  };
}
interface Props extends FlipCardProps {
  title: String;
  frontComponents: JSX.Element[];
  backComponents: JSX.Element[];
}

const FlipCard = (props: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [frontRef, [, frontCardHeight]] = useElementSize();
  const [backRef, [, backCardHeight]] = useElementSize();

  const handleDetailClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <StyledFlipCard
      overload={{
        bg: props.overload?.bg || "#a168fe",
        isTop: props.overload?.isTop,
        isBottom: props.overload?.isBottom,
      }}
    >
      <div
        className={isFlipped ? "flipper" : "unflipper"}
        style={
          isFlipped
            ? { height: `${backCardHeight}px` }
            : { height: `${frontCardHeight}px` }
        }
      >
        <div
          className="front"
          ref={frontRef}
        >
          <h1 className="title">{props.title}</h1>
          {props.frontComponents}
          <button
            className="more-detail-btn"
            onClick={() => handleDetailClick()}
          >
            more detail
          </button>
        </div>
        <div
          className="back"
          ref={backRef}
        >
          <FlipArrow
            className="back-arrow-container"
            onClick={handleDetailClick}
          />
          {props.backComponents}
        </div>
      </div>
    </StyledFlipCard>
  );
};

FlipCard.Styled = StyledFlipCard;
export default FlipCard;

//to do figure out the difference between props in the styled componenet interface props and the normal props interface. no clue. just
//erased "background" from the interface of normal props and its yelling at me

//second update go to this site to fix component https://blog.devgenius.io/using-styled-components-and-props-with-typescript-react-a3c32a496f47
