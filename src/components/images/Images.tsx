import React from "react";
import { ImagesTypes } from "./Images.types";
import { ImagesWrapper } from "./Images.styles";
import { ImageComponent } from "../../ui/components/image/Image";

export const Images: React.FC<ImagesTypes> = ({ dataFetch }) => (
  <ImagesWrapper>
    {dataFetch.map((img, index) => (
      <ImageComponent
        key={index}
        src={img.links.download}
        alt={img.description}
      />
    ))}
  </ImagesWrapper>
);
