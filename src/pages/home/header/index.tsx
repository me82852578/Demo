import React from "react";
import { ReactComponent as SunIcon } from "../images/sun.svg";
import { ReactComponent as StarIcon } from "../images/star.svg";
import { ReactComponent as CloudIcon } from "../images/cloud.svg";
import { ReactComponent as PeaceIcon } from "../images/peace.svg";
import "./index.scss";
import logo00 from "../../../assets/images/logo/logo00/logo00-small-500.webp";
import { Box } from "@mui/material";

const Header = () => {
  return (
    <header>
      <div className="starBox">
        <StarIcon height="23px" />
        <StarIcon height="15px" />
        <StarIcon height="10px" />
      </div>
      <SunIcon
        height="200px"
        width="200px"
        viewBox="-44 -44 600 600"
        className="sun-icon"
      />
      <div className="cloudBox">
        <CloudIcon fill="white" />
        <CloudIcon fill="white" />
        <CloudIcon fill="white" />
        <CloudIcon fill="white" />
      </div>
      <div className="foreground">
        <h1>J-Studio</h1>
        <div className="typing-effect">
          <p>If any questions, feel free to ask.</p>
        </div>
        <Box
          width={{ xs: "300px", sm: "360px", md: "390px" }}
          height={{ xs: "300px", sm: "360px", md: "390px" }}
          position={"relative"}
        >
          <Box
            component="img"
            src={logo00}
            alt="J-Studio"
            width="108%"
            height="108%"
            position={"absolute"}
            top={"-4%"}
            left={"-4%"}
            sx={{ filter: "url(#wave)", opacity: "0.45" }}
          />
          <Box
            component="img"
            width="100%"
            height="100%"
            src={logo00}
            alt="J-Studio"
            position={"absolute"}
            top={0}
            left={0}
            sx={{ opacity: "0.85" }}
          />
        </Box>
        <div className="temp-text">
          <p>
            Hope the world peace.{" "}
            <PeaceIcon height="42px" stroke="whitesmoke" fill="whitesmoke" />
          </p>
        </div>
      </div>
      <svg>
        <defs>
          <filter id="wave">
            <feTurbulence
              id="animation"
              type="fractalNoise"
              baseFrequency="0.0025 0.0025"
              numOctaves="3"
              result="noise"
              seed="67"
            >
              <animate
                attributeName="baseFrequency"
                keyTimes="0; 0.25; 0.5; 0.75; 1"
                values="0.0025; 0.0045 0.0055; 0.0075; 0.0055 0.0045; 0.0025;"
                dur="8s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in2="noise" in="SourceGraphic" scale="105" />
          </filter>
        </defs>
      </svg>
    </header>
  );
};

export default Header;
