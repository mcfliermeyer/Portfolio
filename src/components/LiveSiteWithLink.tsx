import styled from "styled-components";
import liveDemoIcon from "../resources/liveDemo.svg";
import {ReactComponent as DemoWriting} from "../resources/demo-writing.svg"
const StyledLiveSiteWithLink = styled.a`
  position: relative;
  .icon {
    width: 65px;
    height: auto;
    padding: 0.5rem;
    padding-inline: 1.2rem;
    transition: all 0.15s ease-in-out;
    cursor: pointer;
  }
  .icon:hover {
    transform: scale(1.15);
  }
  .demo-writing {
    position: absolute;
    width: 75px;
    top: -60px;
    right: -60px;
    transform: rotate3d(1, 4, 3, -40deg);
  }
`;

type Props = { link: string };
const LiveSiteWithLink = (props: Props) => {
  return (
    <StyledLiveSiteWithLink>
      <DemoWriting className="demo-writing"/>
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={liveDemoIcon} alt="github logo" className="icon" />
      </a>
    </StyledLiveSiteWithLink>
  );
};

LiveSiteWithLink.Styled = StyledLiveSiteWithLink;
export default LiveSiteWithLink;
