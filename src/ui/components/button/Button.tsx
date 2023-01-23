import React from "react";
import { ButtonTypes } from "./Button.types";
import { Button } from "./Button.styles";

export const ButtonComponent: React.FC<ButtonTypes> = ({
  text,
  fontFamily,
  fontColor,
  bgColor,
  display,
  border,
  padding,
  radius,
  shadow,
  transition,
  hover,
  onClick,
  typeBtn,
  position,
  customCss,
}) => (
  <Button
    display={display}
    fontFamily={fontFamily}
    fontColor={fontColor}
    bgColor={bgColor}
    border={border}
    padding={padding}
    radius={radius}
    shadow={shadow}
    transition={transition}
    hover={hover}
    onClick={onClick}
    typeBtn={typeBtn}
    position={position}
    customCss={customCss}
  >
    {text}
  </Button>
);
