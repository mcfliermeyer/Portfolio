import { useState, useRef } from "react";
import styled from "styled-components";
import { LogoIconSVG } from "./LogoIcon";
import HamburgerMenu from "./HamburgerMenu";

interface NavProps {
  className?: String;
  logo?: String;
  navToAboutMe: () => void;
  navToProjects: () => void;
  navToSkills: () => void;
  navToContact: () => void;
}

const StyledNavBar = styled.div`
  :root {
    //setting starting variables for pseudo selectors to be changed on open in js
    --before-line-transform: rotate(0deg);
    --before-line-top: -15px;
    --after-line-transform: rotate(0deg);
    --after-line-top: 15px;
  }
  background-color: ${(props) => props.theme.colors.primaryBlue};
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  min-height: 75px;
  min-width: max-content;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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
    font-size: 2.25rem;
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
    z-index: 2;
    top: 0;
    right: 0.75rem;
    bottom: 0;
  }
  ${HamburgerMenu.Styled}:hover {
    cursor: pointer;
  }
  .nav {
    position: absolute;
    top: -1rem;
    right: -20rem;
    transition: 0.15s ease-in;
    li {
      list-style: none;
      margin-bottom: 1rem;
      button {
        padding: 0;
        color: white;
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: 1.35rem;
        @media (min-width: 425px) {
          font-size: 1.5rem;
        }
        font-weight: 600;
        font-family: ${(props) => props.theme.fonts.nameTitleFont};
      }
    }
  }
  .menu-bg {
    position: absolute;
    top: 2rem;
    right: 2rem;
    z-index: -1;
    width: 0;
    height: 0;
    transform: translate(62%, -20%) rotate(110deg);
    background: radial-gradient(
      farthest-corner at 340px 580px,
      #ec6051 25%,
      #ffc753 55%
    );
    border-radius: 50%;
    transition: 0.15s ease-in;
  }
  .change-bg {
    width: 22.5rem;
    height: 29.5rem;
    box-shadow: 6px 2px 4px -1px rgba(0, 0, 0, 0.55);
    z-index: 1;
  }
  .move-nav {
    top: 4rem;
    right: 0.7rem;
    z-index: 2;
  }
`;

export const NavBar = (props: NavProps) => {
  const [menuIsClosed, setMenuIsClosed] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const hamburgerRef = useRef<HTMLSpanElement>(null);
  const hamburgerLineSpacing = "16px";
  const root = document.documentElement;

  //before psuedo element
  const [beforeLineTransform, setBeforeLineTransform] =
    useState("rotate(0deg)");
  root.style.setProperty("--before-line-transform", beforeLineTransform);
  const [beforeLineTop, setBeforeLineTop] = useState(
    "-" + hamburgerLineSpacing
  );
  root.style.setProperty("--before-line-top", beforeLineTop);

  // //after psuedo element
  const [afterLineTransform, setAfterLineTransform] = useState("rotate(0deg)");
  root.style.setProperty("--after-line-transform", afterLineTransform);
  const [afterLineTop, setAfterLineTop] = useState(hamburgerLineSpacing);
  root.style.setProperty("--after-line-top", afterLineTop);

  const toggleMenu = () => {
    menuRef.current?.classList.toggle("change-bg");
    navRef.current?.classList.toggle("move-nav");
    setMenuIsClosed((prev) => !menuIsClosed);

    if (menuIsClosed) {
      hamburgerRef.current?.classList.toggle("open");
      setBeforeLineTransform((prev) => "rotate(40deg)");
      setBeforeLineTop((prev) => "0px");
      setAfterLineTransform((prev) => "rotate(-40deg)");
      setAfterLineTop((prev) => "0px");
    } else {
      hamburgerRef.current?.classList.toggle("open");
      setBeforeLineTransform((prev) => "rotate(0deg)");
      setBeforeLineTop((prev) => hamburgerLineSpacing);
      setAfterLineTransform((prev) => "rotate(0deg)");
      setAfterLineTop((prev) => "-" + hamburgerLineSpacing);
    }
  };

  //needs some rework here. maybe a hook? i cant think that through at the moment
  const navToAboutMe = () => {
    props.navToAboutMe();
    toggleMenu();
  };
  const navToProjects = () => {
    props.navToProjects();
    toggleMenu();
  };
  const navToSkills = () => {
    props.navToSkills();
    toggleMenu();
  };
  const navToContact = () => {
    props.navToContact();
    toggleMenu();
  };
  return (
    <StyledNavBar>
      <LogoIconSVG height={130} width={130} viewBox="-5 -5 320 320" />
      <div className="name-container">
        <h1 className="first-name">MARK</h1>
        <h1 className="last-name">Meyer</h1>
      </div>
      <HamburgerMenu
        toggleMenu={toggleMenu}
        menuIsClosed={menuIsClosed}
        hamburgerRef={hamburgerRef}
      />
      <nav className="nav" ref={navRef}>
        <ul>
          <li>
            <button onClick={() => navToAboutMe()}>About Me</button>
          </li>
          <li>
            <button onClick={() => navToProjects()}>Projects</button>
          </li>
          <li>
            <button onClick={() => navToSkills()}>Skills</button>
          </li>
          <li>
            <button onClick={() => navToContact()}>Contact Me</button>
          </li>
        </ul>
      </nav>
      <div className="menu-bg" id="menu-bg" ref={menuRef}></div>
    </StyledNavBar>
  );
};
