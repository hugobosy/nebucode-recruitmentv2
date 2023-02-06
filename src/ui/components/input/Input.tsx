import React, { ChangeEvent } from "react";
import { Input } from "./Input.styles";
import { InputTypes } from "./Input.types";
import { handleChange } from "./Input.utils";

export const InputComponent: React.FC<InputTypes> = ({
  type,
  placeholder,
  value,
  setValue,
  setDataFetch,
  setPage,
}) => (
  <Input
    type={type}
    onChange={(e: ChangeEvent<HTMLInputElement>) => {
      handleChange(e, setDataFetch, setValue);
      setPage(1);
    }}
    value={value}
    placeholder={placeholder}
  />
);
