import { FunctionComponent } from "react";
import styled from "styled-components";
import { LogoIconSVG } from "../resources/LogoIcon";
import HamburgerMenu from "./HamburgerMenu";

interface NavProps {
  className?: String;
  logo?: String;
}

const StyledNavBar = styled.nav`
  background-color: ${(props) => props.theme.colors.primaryBlue};
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: center;

  min-height: 75px;
  min-width: max-content;
  position: sticky;
  top: 0;
  z-index: 1;
  border-bottom: 1px black solid;
  svg {
    position: absolute;
    top: 5px;
    left: 10px;
  }
  h1 {
    margin: 0;
  }
  .name-container {
    margin-top: 0.5rem;
  }
  .first-name {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 36px;
    color: ${(props) => props.theme.colors.primaryPinkish};
    letter-spacing: -1px;
    margin-bottom: -20px;
  }
  .last-name {
    font-family: "Italianno";
    color: white;
    font-weight: normal;
    font-size: 32px;
    letter-spacing: 1px;
    margin-bottom: 0.3rem;
  }
  ${HamburgerMenu.Styled} {
    position: absolute;
    top: 0;
    right: 0.75rem;
    bottom: 0;
  }
  ${HamburgerMenu.Styled}:hover {
    cursor: pointer;
  }
`;

export const NavBar: FunctionComponent<NavProps> = ({}) => {
  return (
    <StyledNavBar>
      <LogoIconSVG height={130} width={130} viewBox="-5 -5 320 320" />
      <div className="name-container">
        <h1 className="first-name">MARK</h1>
        <h1 className="last-name">Meyer</h1>
      </div>
      <HamburgerMenu />
    </StyledNavBar>
  );
};
