import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Data } from "../../../types/data";

export const handleChange = (
  e: ChangeEvent<HTMLInputElement>,
  setDataFetch: Dispatch<SetStateAction<Data[]>>,
  setValue: Dispatch<SetStateAction<string>>
) => {
  setDataFetch([]);
  setValue(e.target.value);
};
