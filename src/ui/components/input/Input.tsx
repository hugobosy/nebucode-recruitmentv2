import React, { ChangeEvent } from "react";
import { Input } from "./Input.styles";
import { InputTypes } from "./Input.types";

export const InputComponent: React.FC<InputTypes> = ({
  type,
  placeholder,
  value,
  setValue,
  setDataFetch,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDataFetch([]);
    setValue(e.target.value);
  };

  return (
    <Input
      type={type}
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
    />
  );
};
