import styled, { css } from "styled-components";
import { ButtonTypes } from "./Button.types";
import { Displays, Positions } from "../../helpers/styles";

const typeBtns = {
  primary: css`
    background-color: #2f8bf8;
    padding: 10px 30px;
    border-radius: 8px;
    color: #fff;
    transition: 0.3s;
    &:hover {
      background-color: rgba(47, 139, 248, 0.75);
    }
  `,
  danger: css`
    background-color: #e83f3f;
    padding: 10px 30px;
    border-radius: 8px;
    color: #fff;
    transition: 0.4s;
    border: none;
    box-shadow: 0 0 10px 2px #000;
    &:hover {
      background-color: rgba(232, 63, 63, 0.75);
    }
  `,
  warning: css`
    background-color: #e8c13f;
    padding: 10px 30px;
    border-radius: 8px;
    color: #fff;
    transition: 0.4s;
    &:hover {
      background-color: rgba(232, 193, 63, 0.75);
    }
  `,
  success: css`
    background-color: #2d8d0c;
    padding: 10px 30px;
    border-radius: 8px;
    color: #fff;
    transition: 0.4s;
    &:hover {
      background-color: rgba(45, 141, 12, 0.75);
    }
  `,
};

export const Button = styled.button<Partial<ButtonTypes>>`
  width: 200px;
  cursor: pointer;
  ${({ display }) => display && Displays[display]};
  ${({ typeBtn }) => typeBtn && typeBtns[typeBtn]};
  ${({ bgColor }) =>
    bgColor &&
    css`
      background-color: ${bgColor};
    `};
  ${({ fontFamily }) =>
    fontFamily &&
    css`
      font-family: ${fontFamily};
    `};
  ${({ fontColor }) =>
    fontColor &&
    css`
      color: ${fontColor};
    `};
  ${({ border }) =>
    border &&
    css`
      border: ${border};
    `};
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `};
  ${({ radius }) =>
    radius &&
    css`
      border-radius: ${radius};
    `};
  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: ${shadow};
    `};
  ${({ transition }) =>
    transition &&
    css`
      transition: ${transition}s;
    `};
  ${({ position }) => position && Positions[position]}
  ${({ customCss }) =>
    customCss &&
    css`
      ${customCss}
    `}
  ${({ hover }) =>
    hover &&
    css`
      &:hover {
        background-color: ${hover.bgColor};
        color: ${hover.fontColor};
        padding: ${hover.padding};
        border-radius: ${hover.radius};
        box-shadow: ${hover.shadow};
      }
    `}
`;
