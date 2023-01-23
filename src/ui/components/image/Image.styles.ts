import styled, { css } from "styled-components";
import { ImageTypes } from "./Image.types";
import { Displays } from "../../helpers/styles";
export const Image = styled.img<Partial<ImageTypes>>`
  ${({ display }) => display && Displays[display]};
  margin-bottom: 1rem;
  border-radius: 10px;
  width: 100%;
`;
