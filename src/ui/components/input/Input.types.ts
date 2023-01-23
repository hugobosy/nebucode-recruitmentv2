import { TypeInput } from "../../types/input";
import { Dispatch, SetStateAction } from "react";
import { Data } from "../../../types/data";

export interface InputTypes {
  type: TypeInput;
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  setDataFetch: Dispatch<SetStateAction<Data[]>>;
}
