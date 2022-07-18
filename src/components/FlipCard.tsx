import {
  useState,
} from "react";
import styled from "styled-components";
import FlipArrow from "./FlipArrow";
import useElementSize from "./hooks/useElementSize";

const StyledFlipCard = styled.div`
  border-bottom: 1px white solid;
  margin-inline: auto;
  display: block;
  position: relative;
  color: #fff;
  .title {
    font-size: 24px;
    font-weight: 600;
    font-family: ${(props) => props.theme.fonts.nameTitleFont};
  }
  .more-detail-btn{
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
      background-color: ${(props) => props.theme.colors.primaryYellow};
      backface-visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      padding: 1rem 1.5rem .5rem;
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
type Color = RGB | RGBA | HEX;
type Props = { background?: Color, fontColor: Color; title: String; frontComponents: JSX.Element[]; backComponents: JSX.Element[] };

const FlipCard = (props: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [frontRef, [, frontCardHeight]] = useElementSize();
  const [backRef, [, backCardHeight]] = useElementSize();

  const handleDetailClick = () => {
    setIsFlipped(!isFlipped)
  };

  return (
    <StyledFlipCard>
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
          style={{ backgroundColor: `${props.background}` }}
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
          style={{ backgroundColor: `${props.background}` }}
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

