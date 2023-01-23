import styled from "styled-components";
import { ImageTypes } from "./Image.types";
import { Displays } from "../../helpers/styles";
export const Image = styled.img<Partial<ImageTypes>>`
  ${({ display }) => display && Displays[display]};
  border-radius: 10px;
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
`;
