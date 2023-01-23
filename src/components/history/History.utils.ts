import { Dispatch, SetStateAction } from "react";

export const handleClick = (
  text: string,
  setValue: Dispatch<SetStateAction<string>>
) => {
  setValue(text);
};
