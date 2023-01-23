import React from "react";
import { ImageTypes } from "./Image.types";
import { Image } from "./Image.styles";

export const ImageComponent: React.FC<ImageTypes> = ({ src, display, alt }) => (
  <Image src={src} display={display} alt={alt} />
);
