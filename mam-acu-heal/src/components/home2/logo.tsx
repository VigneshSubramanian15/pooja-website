import React from "react";

export default function Logo({
  width = 120,
  height = 32,
}: {
  width?: number | string;
  height?: number | string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1200 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <rect width="1200" height="320" fill="white" /> */}

      <g fill="#511416">
        <text
          x="50%"
          y="150"
          textAnchor="middle"
          fontFamily="'Cormorant Garamond', serif"
          fontSize="110"
          fontStyle="italic"
          fontWeight="500"
          letterSpacing="1"
        >
          MamAcuHeal
        </text>

        <line
          x1="310"
          y1="200"
          x2="890"
          y2="200"
          stroke="#511416"
          strokeWidth="2"
          opacity="0.6"
        />

        <text
          x="50%"
          y="245"
          textAnchor="middle"
          fontFamily="'Montserrat', sans-serif"
          fontSize="26"
          fontWeight="500"
          letterSpacing="8"
          opacity="0.85"
        >
          ANCIENT WISDOM • HOLISTIC WELLNESS
        </text>
      </g>
    </svg>
  );
}
