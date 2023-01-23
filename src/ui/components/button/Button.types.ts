import { Display } from "../../types/display";
import { Position } from "../../types/position";

type TypeBtn = "primary" | "danger" | "warning" | "success";

interface Hover {
  bgColor?: string;
  fontColor?: string;
  padding?: string;
  radius?: string;
  shadow?: string;
}

export interface ButtonTypes {
  text: string;
  bgColor?: string;
  fontFamily?: string;
  fontColor?: string;
  border?: string;
  display?: Display;
  padding?: string;
  radius?: string;
  shadow?: string;
  transition?: number;
  hover?: Hover;
  onClick: () => void;
  typeBtn?: TypeBtn;
  position?: Position;
  customCss?: string;
}
