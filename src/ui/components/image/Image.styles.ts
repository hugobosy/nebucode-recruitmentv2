import styled from "styled-components";
import { ImageTypes } from "./Image.types";
import { Displays } from "../../helpers/styles";

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    z-index: 99;
    transition: all 0.3s ease-in-out;
  }

  &:hover button {
    left: 50%;
  }

  &:hover::before {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
export const Image = styled.img<Partial<ImageTypes>>`
  position: relative;
  ${({ display }) => display && Displays[display]};
  border-radius: ${({ theme }) => theme.size.unit};
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
`;
