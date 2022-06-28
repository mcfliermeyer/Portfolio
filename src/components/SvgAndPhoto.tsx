import styled from "styled-components";
import Photo from "./Photo";
import ThatsMe from "./ThatsMe";

const StyledSvgAndPhoto = styled.div`
  position: relative;
  width: min-content;
  margin-inline: auto;
  ${ThatsMe.Styled} {
    position: absolute;
    bottom: -70px;
    left: -80px;
  }
  
`;

const SvgAndPhoto = () => {
  return (
    <StyledSvgAndPhoto>
      <Photo
        profilePic={require("/Users/markmeyer/code/Portfolio/src/resources/portfolio-pic.jpg")}
      />
      <ThatsMe />
    </StyledSvgAndPhoto>
  );
};
export default SvgAndPhoto;
