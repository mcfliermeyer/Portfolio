import styled from "styled-components";

const StyledHamburgerMenuButton = styled.button`
  border: none;
  background-color: transparent;
  .hamburger-menu-button {
  }
  .hamburger-lines {
    display: block;
    width: 4rem;
    height: 4px;
    background-color: white;
    position: relative;
  }
  .hamburger-lines::before {
    content: "";
    width: 4rem;
    height: 4px;
    background-color: white;
    position: absolute;
    left: 0;
    right: 0;
    top: -13px;
  }
  .hamburger-lines::after {
    content: "";
    width: 4rem;
    height: 4px;
    background-color: white;
    position: absolute;
    left: 0;
    right: 0;
    top: 13px;
  }
`;

const HamburgerMenu = () => {
  return (
    <StyledHamburgerMenuButton className="hambuger-menu-button">
      <span className="hamburger-lines"></span>
    </StyledHamburgerMenuButton>
  );
};

HamburgerMenu.Styled = StyledHamburgerMenuButton;

export default HamburgerMenu;
