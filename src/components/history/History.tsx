import React from "react";
import { HistoryWrapper } from "./History.styles";
import { HistoryTypes } from "./History.types";
import { ButtonComponent } from "../../ui/components/button/Button";
import { handleClick } from "./History.utils";

export const History: React.FC<HistoryTypes> = ({
  history,
  setValue,
  setDataFetch,
  setPage,
}) => (
  <HistoryWrapper>
    {[...new Set(history)].map((item, index) => (
      <ButtonComponent
        key={index}
        text={item}
        onClick={() => {
          setDataFetch([]);
          handleClick(item, setValue);
          setPage(1);
        }}
        customCss={"width: auto"}
        padding={"2px 5px"}
        typeBtn={"success"}
      />
    ))}
  </HistoryWrapper>
);
