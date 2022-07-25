import styled from 'styled-components'
import githubIcon from '../resources/githubLogo.svg'

const StyledGithubIconWithLink = styled.a`
  cursor: pointer;
  .icon {
    width: 65px;
    height: auto;
    padding: 0.5rem;
  }
`;

type Props = {link: string}
const GithubIconWithLink = (props: Props) => {
  return (
    <StyledGithubIconWithLink>
      <a href={props.link} target="_blank" rel="noreferrer">
      <img src={githubIcon} alt="github logo" className="icon" />
      </a>
    </StyledGithubIconWithLink>
  );
}

GithubIconWithLink.Styled = StyledGithubIconWithLink
export default GithubIconWithLink