import React from "react";

export const LogoIconSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={props.width} height={props.height} viewBox={props.viewBox}>
    <circle
      style={{ stroke: "#000000", fill: "#fe7868", strokeOpacity: 1 }}
      cx="145"
      cy="145"
      r="150"
    ></circle>
    <circle
      style={{ stroke: "#000000", fill: "#7fcacb", strokeOpacity: 0 }}
      cx="145"
      cy="145"
      r="138"
    ></circle>
    <path
      className="Meyer"
      d="M 95.227 239.223 L 92.618 118.958 L 135.231 164.64 L 228.078 113.186 L 231 237.224"
      style={{
        fillOpacity: 0,
        clipPath: "url(#clip-0)",
        fill: "#d8d8d8",
        stroke: "#ffffff",
        strokeWidth: "29px",
        strokeMiterlimit: 50,
      }}
      data-bx-origin="0.596078 0.25391"
    ></path>
    <path
      className="Mark"
      d="M 206.15 239.334 L 205.399 148.084 L 172.323 165.99 L 66 51.042 L 68.087 239.334"
      style={{
        paintOrder: "fill",
        fillOpacity: 0,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "#ffffff",
        stroke: "#fe7868",
        strokeWidth: "29px",
      }}
      data-bx-origin="0.778486 0.5"
    ></path>
  </svg>
);
