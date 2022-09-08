import styled from "styled-components";

const StyledHamburgerMenuButton = styled.button`
  border: none;
  background-color: transparent;
  .hamburger-lines {
    display: block;
    width: 3rem;
    height: 3px;
    background-color: white;
    position: relative;
    transition: 0.25s ease-in-out;
  }
  .hamburger-lines.open {
    background-color: transparent;
    transform: rotate(90deg);
  }
  .hamburger-lines::before {
    content: "";
    width: 3rem;
    height: 3px;
    background-color: white;
    position: absolute;
    left: 0;
    right: 0;
    top: var(--before-line-top);
    transform: var(--before-line-transform);
    transition: 0.25s ease-in-out;
  }
  .hamburger-lines::after {
    content: "";
    width: 3rem;
    height: 3px;
    background-color: white;
    position: absolute;
    left: 0;
    right: 0;
    top: var(--after-line-top);
    transform: var(--after-line-transform);
    transition: 0.25s ease-in-out;
  }
  @media (min-width: 1200px) {
    .hamburger-lines {
      width: 4rem;
      height: 4px;
    }
    .hamburger-lines::before {
      width: 4rem;
      height: 4px;
    }
    .hamburger-lines::after {
      width: 4rem;
      height: 4px;
    }
  }
`;

interface HamburgerMenuProps {
  toggleMenu: () => void;
  menuIsClosed: boolean;
  hamburgerRef: React.RefObject<HTMLSpanElement>;
}

const HamburgerMenu = (props: HamburgerMenuProps) => {
  const handleClick = () => {
    props.toggleMenu();
  };
  return (
    <StyledHamburgerMenuButton
      className="hambuger-menu-button"
      onClick={() => handleClick()}
    >
      <span ref={props.hamburgerRef} className="hamburger-lines"></span>
    </StyledHamburgerMenuButton>
  );
};

HamburgerMenu.Styled = StyledHamburgerMenuButton; //so component style is available in other component

export default HamburgerMenu;
