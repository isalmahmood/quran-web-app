import "./style.css";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoadingAnimate from "../../../components/loading/LoadingAnimate";
import InfiniteScroll from "react-infinite-scroll-component";
import { GlobalContext } from "../../../context/GlobalContext";
import { ListSurat } from "../../../components/ListSurat";
import HeadNavbar from "../../../components/HeadNavbar";
import HeroSection from "../../../components/HeroSection";

function HomePage() {
  const { state, handleFunction } = useContext(GlobalContext);
  const { dataSurah, setDataSurah } = state;
  const { handleView } = handleFunction;
  const [uniqueTypeSurat, setUniqueTypeSurat] = useState([]);

  const removeDuplicateTypeSurat = () => {
    let unique = [{ tempat_turun: "Tidak difilter" }];
    const tempatTurun = {};
    dataSurah.forEach((element) => {
      if (!tempatTurun[element.tempat_turun]) {
        tempatTurun[element.tempat_turun] = true;
        unique.push({ tempat_turun: element.tempat_turun });
      }
      setUniqueTypeSurat(unique);
    });

    return unique;
  };

  useEffect(() => {
    if (dataSurah !== null) {
      removeDuplicateTypeSurat();
    }
  }, [dataSurah, setDataSurah]);

  // console.log(uniqueTypeSurat);

  const [selectTypeSurat, setSelectTypeSurat] = useState("");

  const handleChangeTypeSurat = (event) => {
    setSelectTypeSurat(event.target.value);
  };

  console.log(selectTypeSurat);
  const [search, setSearch] = useState("");

  // virtual scroller

  const [showTopBtn, setShowTopBtn] = useState(false);

  //detect scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <HeadNavbar />
      <div className="flex flex-col 2xl:container m-auto h-screen justify-between scroll-smooth">
        <header className="mt-16 drop-shadow-lg">
          <HeroSection />
        </header>

        <div className="w-full">
          <div className="flex justify-center">
            <div className="mb-0 mt-10 xl:w-4/5">
              <label className="text-gray-700">Cari Surat</label>
              <div className="input-group inline-flex items-stretch w-full">
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="form-control text-black relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-semibold bg-white bg-clip-padding border border-solid border-gray-900 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="🔍cari nomor ayat..."
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
              </div>
              <div className="mb-0 mt-1 xl:w-4/5">
                <label className="text-gray-700">
                  Filter tempat diturunkannya surat
                </label>
                <div>
                  <select
                    value={selectTypeSurat}
                    onChange={handleChangeTypeSurat}
                    className="w-auto capitalize text-lg rounded bg-indigo-700
                  border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500  px-4 py-2 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    {uniqueTypeSurat.map((option, index) => {
                      return (
                        <option className="capitalize" key={index}>
                          {option.tempat_turun}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {dataSurah === null ? (
          <LoadingAnimate />
        ) : (
          <ListSurat
            dataSurah={dataSurah}
            handleView={handleView}
            search={search}
            selectTypeSurat={selectTypeSurat}
          />
        )}

  {/* 👇️ scroll to top on button click */}
  {showTopBtn && (
          <button
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className="fixed p-3 right-5 text-white bottom-10 text-center bg-green-700 rounded-full drop-shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3"
              />
            </svg>
          </button>
        )}

        <footer className="h-10 bg-blue-500">Footer</footer>
      </div>
    </>
  );
}

export default HomePage;
