import React from "react";
import { ImageTypes } from "./Image.types";
import { Image, ImageWrapper } from "./Image.styles";
import { ButtonComponent } from "../button/Button";

export const ImageComponent: React.FC<ImageTypes> = ({ src, display, alt }) => (
  <ImageWrapper>
    <Image src={src} display={display} alt={alt} />
    <ButtonComponent
      text="Download"
      onClick={() => {}}
      position={"absolute"}
      padding={"10px 30px"}
      bgColor={"transparent"}
      border={"1px solid #fff"}
      typeBtn={"success"}
      fontColor={"#fff"}
      customCss={"top: 50%; left: -50%; z-index: 100; translate: -50% -50%;"}
      transition={0.4}
    />
  </ImageWrapper>
);
