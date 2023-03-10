import { Dispatch, SetStateAction } from "react";
import { Data } from "../types/data";

export const getData = async (
  clientId: string,
  value: string,
  page: number,
  setDataFetch: Dispatch<SetStateAction<Data[]>>,
  dataFetch: Data[],
  setLoader: Dispatch<SetStateAction<boolean>>,
  setError: Dispatch<SetStateAction<boolean>>,
  setDataFetchCache: Dispatch<SetStateAction<Data[]>>,
  dataFetchCache: Data[],
) => {
  setLoader(true);
  await fetch(
    `https://api.unsplash.com/search/photos?client_id=${clientId}&query=${value}&page=${page}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.results.length === 0) {
        setError(true);
      } else {
        setError(false);
      }
      setDataFetch(dataFetch.concat(data.results));
      setDataFetchCache(dataFetchCache.concat(data.results.map((img: Data) => img.urls.small)))
    });
  setLoader(false);
};
