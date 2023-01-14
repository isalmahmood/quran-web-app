import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  //fetchdata all surat
  const endPointQuran = "https://equran.id/api/surat";
  const [dataSurah, setDataSurah] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(true);
  // const [hasMore, setHasMore] = useState(true);
  let navigate = useNavigate();
  // const [dataSource, setDataSource] = useState(Array.from({ length: 20 }));

  const fetchData = async () => {
    await fetch(endPointQuran)
      .then((res) => res.json())
      .then((data) => {
        console.log([...data]);
        setDataSurah(data);
        // console.log(surahs)
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    if (fetchStatus === true) {
      setFetchStatus(false);
      fetchData();
    }
  }, [fetchStatus, setFetchStatus]);

  // const getDataSurah = async () => {
  //     const response = await fetch(urlQuran);
  //     const dataSurah = await response.json();
  //     const surahs = dataSurah.slice(0, 10);
  //     setSurah(surahs);
  // };

  // useEffect(() => {
  //     getDataSurah();
  // }, []);

  const handleView = (event) => {
    let numbSurah = parseInt(event.target.value);

    navigate(`/surah/${numbSurah}`);
  };

  //fetchdata view surat

  //----------------
  let state = {
    dataSurah,
    setDataSurah,
  };

  let handleFunction = {
    handleView,
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        handleFunction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider
