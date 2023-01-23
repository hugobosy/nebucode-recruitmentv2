import React, { useEffect, useState } from "react";
import { InputComponent } from "../ui/components/input/Input";
import { Container } from "./App.styles";
import { Data } from "../types/data";
import { getData } from "../utils/getData";
import { useDebounce, useLocalStorage } from "usehooks-ts";
import { Images } from "./images/Images";
import { History } from "./history/History";
import { ButtonComponent } from "../ui/components/button/Button";
import { Loader } from "../ui/components/loader/Loader";
import { useSearchParams } from "react-router-dom";

export const App = () => {
  const [value, setValue] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [dataFetch, setDataFetch] = useState<Data[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const debouncedValue = useDebounce<string>(value, 1000);
  const [history, setHistory] = useLocalStorage<string[]>("history", []);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("value");
  const clientId = "4EAKXWpOh2Uwu5o4a3L5EAQn6bjiK79wrfNLjTKHTos";

  const latestSearch = () => {
    setHistory((prev) => {
      return value.length !== 0 ? prev.concat(value) : prev;
    });
  };

  const handleGetMoreData = () => {
    setPage((prevState) => prevState + 1);
  };

  useEffect(() => {
    (() => {
      setValue(searchValue ? searchValue : "");
      setDataFetch([]);
    })();
  }, [searchValue]);

  useEffect(() => {
    latestSearch();
    setSearchParams(`value=${value}`);
  }, [debouncedValue]);

  useEffect(() => {
    getData(
      clientId,
      value,
      page,
      setDataFetch,
      dataFetch,
      setLoader,
      setError
    );
  }, [debouncedValue, page]);

  return (
    <Container>
      <InputComponent
        type="search"
        placeholder="Wyszukaj..."
        value={value}
        setValue={setValue}
        setDataFetch={setDataFetch}
      />

      <History
        history={history}
        setValue={setValue}
        setDataFetch={setDataFetch}
      />

      {loader && dataFetch.length === 0 ? (
        <Loader />
      ) : (
        <Images dataFetch={dataFetch} />
      )}

      {error && <p style={{ color: "white" }}>Brak wyników do wyświetlenia</p>}
      {dataFetch.length ? (
        <ButtonComponent
          text="Pobierz więcej"
          onClick={handleGetMoreData}
          position={"fixed"}
          customCss={"bottom: 0; left: 50%; translate: -50% -50%;"}
          typeBtn={"danger"}
        />
      ) : null}
    </Container>
  );
};

export default App;