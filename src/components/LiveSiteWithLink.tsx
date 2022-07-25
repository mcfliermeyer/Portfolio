import styled from "styled-components";
import liveDemoIcon from "../resources/liveDemo.svg";
const StyledLiveSiteWithLink = styled.a`
  cursor: pointer;
  .icon {
    width: 65px;
    height: auto;
    padding: 0.5rem;
  }
`;

type Props = { link: string };
const LiveSiteWithLink = (props: Props) => {
  return (
    <StyledLiveSiteWithLink>
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={liveDemoIcon} alt="github logo" className="icon" />
      </a>
    </StyledLiveSiteWithLink>
  );
};

LiveSiteWithLink.Styled = StyledLiveSiteWithLink;
export default LiveSiteWithLink;
