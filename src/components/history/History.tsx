import React from "react";
import { HistoryWrapper } from "./History.styles";
import { HistoryTypes } from "./History.types";
import { ButtonComponent } from "../../ui/components/button/Button";
import { useMediaQuery } from "usehooks-ts";

export const History: React.FC<HistoryTypes> = ({
  history,
  setValue,
  setDataFetch,
}) => {
  const handleClick = (text: string) => {
    setValue(text);
  };
  const breakpoint = useMediaQuery("(min-width: 768px)");

  const lastSearch = breakpoint ? history.slice(-25) : history.slice(-10);

  return (
    <HistoryWrapper>
      {lastSearch.map((item) => (
        <ButtonComponent
          text={item}
          onClick={() => {
            setDataFetch([]);
            handleClick(item);
          }}
          customCss={"width: auto"}
          padding={"2px 5px"}
          typeBtn={"success"}
        />
      ))}
    </HistoryWrapper>
  );
};
