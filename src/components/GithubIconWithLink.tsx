import styled from "styled-components";
import githubIcon from "../resources/githubLogo.svg";
import { ReactComponent as GithubWriting } from "../resources/github-writing.svg";

const StyledGithubIconWithLink = styled.a`
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
  .github-writing {
    position: absolute;
    width: 80px;
    top: -60px;
    left: -60px;
    transform: rotate3d(1, 4, 3, -40deg);
  }
`;

type Props = { link: string };
const GithubIconWithLink = (props: Props) => {
  return (
    <StyledGithubIconWithLink>
      <GithubWriting className="github-writing"/>
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={githubIcon} alt="github logo" className="icon" />
      </a>
    </StyledGithubIconWithLink>
  );
};

GithubIconWithLink.Styled = StyledGithubIconWithLink;
export default GithubIconWithLink;
