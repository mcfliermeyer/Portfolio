import styled from "styled-components";

const StyledPhoto = styled.div`
  max-width: min-content;
  height: auto;
  margin: 75px;
  margin-inline: auto;
  background-color: green;
  transform: rotate(5deg);

  box-shadow: 0 0 0.3rem grey;
  /* 	x,y,blur,spread,color */
  /* box-shadow: -8px 12px 12px -12px grey, 8px 12px 12px -12px grey,
    8px -8px 12px -12px #8080807f, -8px -8px 12px -12px #8080807f; */
  /* border-bottom-right-radius: 20% 5px;
  border-bottom-left-radius: 20% 5px; */
  /* filter: drop-shadow(0 0 0.5rem grey); */
  /* drop-shadow(offset-x offset-y blur-radius color) */
  position: relative;
  .psuedo {
    background-color: white;
  }
  /* transform-style: preserve-3d; */
  .psuedo::before {
    content: "";
    position: absolute;
    background-color: white;
    border-bottom-left-radius: 100% 100%;
    border-top-left-radius: 100% 100%;
    bottom: 3px;
    left: 3px;
    height: 20px;
    width: 50px;
    z-index: -1;
    filter: drop-shadow(5px 0rem 0.5rem black);
    transform: rotate(-12deg);
  }
  .psuedo::after {
    content: "";
    position: absolute;
    background-color: white;
    border-bottom-right-radius: 100% 100%;
    border-top-right-radius: 100% 100%;
    bottom: 3px;
    right: 3px;
    height: 20px;
    width: 50px;
    z-index: -1;
    filter: drop-shadow(-5px 0rem 0.5rem black);
    transform: rotate(12deg);
  }

  .picture-frame {
    width: 140px;
    border-radius: 11px;
    padding: 1rem 1.5rem;
  }
  picture {
  }
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 11px;
  }
`;

type Props = {
  profilePic: "";
};
const Photo = (props: Props) => {
  return (
    <StyledPhoto>
      <div className="psuedo">
        <div className="picture-frame">
          <picture>
            {/*todo add srcset and diff resolutions for pic */}
            <source srcSet="" />
            <img src={props.profilePic} alt="face of handsome man smiling" />
          </picture>
        </div>
      </div>
    </StyledPhoto>
  );
};
Photo.Styled = StyledPhoto
export default Photo;
