import { Dispatch, SetStateAction } from "react";
import { Data } from "../../types/data";

export interface HistoryTypes {
  history: string[];
  setValue: Dispatch<SetStateAction<string>>;
  setDataFetch: Dispatch<SetStateAction<Data[]>>;
  setPage: Dispatch<SetStateAction<number>>;
}
