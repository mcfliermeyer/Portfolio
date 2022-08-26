import { useState, useRef } from "react";
import styled from "styled-components";

const StyledHamburgerMenuButton = styled.button`
  border: none;
  background-color: transparent;

  :root {
    //setting starting variables for pseudo selectors to be changed on open in js
    --before-line-transform: rotate(0deg);
    --before-line-top: -13px;
    --after-line-transform: rotate(0deg);
    --after-line-top: 13px;
  }
  .hamburger-menu-button {
  }
  .hamburger-lines {
    display: block;
    width: 4rem;
    height: 4px;
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
    width: 4rem;
    height: 4px;
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
    width: 4rem;
    height: 4px;
    background-color: white;
    position: absolute;
    left: 0;
    right: 0;
    top: var(--after-line-top);
    transform: var(--after-line-transform);
    transition: 0.25s ease-in-out;
  }
`;

interface HamburgerMenuProps {
  navToSkills: () => void;
}

const HamburgerMenu = (props: HamburgerMenuProps) => {
  const [menuIsClosed, setMenuIsOpen] = useState(true);
  const hamburgerRef = useRef<HTMLSpanElement>(null);
  const root = document.documentElement;
  //before psuedo element
  const [beforeLineTransform, setBeforeLineTransform] = useState("rotate(0deg)");
  root.style.setProperty("--before-line-transform", beforeLineTransform);
  const [beforeLineTop, setBeforeLineTop] = useState("-13px");
  root.style.setProperty("--before-line-top", beforeLineTop);
  //after psuedo element
  const [afterLineTransform, setAfterLineTransform] = useState("rotate(0deg)");
  root.style.setProperty("--after-line-transform", afterLineTransform);
  const [afterLineTop, setAfterLineTop] = useState("13px");
  root.style.setProperty("--after-line-top", afterLineTop);

  

  const handleClick = () => {
    if (menuIsClosed) {
      hamburgerRef.current?.classList.toggle("open");
      setMenuIsOpen((prev) => !prev);
      setBeforeLineTransform((prev) => "rotate(40deg)");
      setBeforeLineTop((prev) => "0px");
      setAfterLineTransform((prev) => "rotate(-40deg)");
      setAfterLineTop((prev) => "0px");
    } else {
      hamburgerRef.current?.classList.toggle("open");
      setMenuIsOpen((prev) => !prev);
      setBeforeLineTransform((prev) => "rotate(0deg)");
      setBeforeLineTop((prev) => "-13px");
      setAfterLineTransform((prev) => "rotate(0deg)");
      setAfterLineTop((prev) => "13px");
    }
  };
  return (
    <StyledHamburgerMenuButton
      className="hambuger-menu-button"
      onClick={() => handleClick()}
    >
      <span ref={hamburgerRef} className="hamburger-lines"></span>
    </StyledHamburgerMenuButton>
  );
};

HamburgerMenu.Styled = StyledHamburgerMenuButton;

export default HamburgerMenu;
