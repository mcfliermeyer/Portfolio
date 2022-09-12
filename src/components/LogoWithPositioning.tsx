import React from "react";

interface LogoStyledProps {
  top: string;
  left: string;
  width: string;
  children: JSX.Element;
}

const LogoWithPositioning = ({ children, top, left, width }: LogoStyledProps) => {
  return (
    <div
      style={{ position: "absolute", top: top, left: left }}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child || <div></div>, {
          style: { ...child?.props.style, width: width, height: "auto" },
        })
      )}
    </div>
  );
};
export default LogoWithPositioning;
