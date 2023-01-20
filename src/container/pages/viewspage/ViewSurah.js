import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeadNavbar from "../../../components/HeadNavbar";
import LoadingAnimate from "../../../components/loading/LoadingAnimate";
import ReactAudioPlayer from "react-audio-player";
import { ShimmerLoading } from "../../../components/loading/ShimmerLoading";

const ViewSurah = () => {
  const [dataSurah, setDataSurah] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [ayats, setAyats] = useState([]);
  let { numbSurah } = useParams();

  const fetchViewSurah = async () => {
    await fetch(`https://equran.id/api/surat/${numbSurah}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDataSurah(data);
        setAyats(data.ayat);
        // console.log(viewSurah)
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    if (fetchStatus === true) {
      fetchViewSurah();
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  // console.log(ayats);

  const createMarkup = (text) => {
    return { __html: text };
  };

  const [searchAyat, setSearchAyat] = useState("");

  const handleChangeSearch = (event) => {
    setSearchAyat(event.target.value);
  };

  const handleClickSearchAyat = () => {
    const element = document.getElementById(searchAyat);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("nomor ayat tidak ditemukan");
    }
  };

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

  const convertNumbArabic = (numb) => {
    return numb.toLocaleString("ar-EG");
  };

  return (
    <>
      <HeadNavbar />
      <div className="container mx-auto flex flex-col h-screen justify-between">
        {/* <div className="bg-gradient-to-r from-green-50 via-green-100 to-green-100 drop-shadow-lg">
          <div className="mt-5 border-double border-4 border-indigo-900 w-96 m-auto">
            <h1 className="text-4xl mt-2 text-center leading-4 text-grey-800 font-bold">
             
              <div className="mt-3 font-semibold text-lg">
                
              </div>
            </h1>
          </div>

          <div className="flex flex-wrap p-5">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/2 mb-4">
              <div className="py-1 px-2">
                <label className="text-gray-500">Arti</label>
                
                   <p className="text-black text-xl"></p>
                
              </div>
              <div className="py-1 px-2">
                <label className="text-gray-500">Nomor Surat</label>
                <p className="text-black text-xl ">
                </p>
              </div>
              <div className="py-1 px-2 ">
                <label className="text-gray-500">Jumlah ayat</label>
                <p className="text-black text-xl">
                </p>
              </div>
              <div className="py-1 px-2">
                <label className="text-gray-500">Tempat diturunkan</label>
                <p className="text-black text-xl">
                </p>
              </div>
            </div>

            <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 mb-4 ">
              <div className=" px-2">
                <label className="text-gray-500">Deskripsi</label>
                <p
                  className="text-black text-xl text-justify"
                 
                ></p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="bg-gradient-to-r mt-16 from-green-50 via-green-100 to-green-100 drop-shadow-lg">
          <div className="mt-5 border-double border-4 border-indigo-900 w-96 m-auto">
            <h1 className="text-4xl mt-2 text-center leading-4 text-grey-800 font-bold">
              {dataSurah?.nama ?? <LoadingAnimate />}
              <div className="mt-3 font-semibold text-lg">
                {dataSurah?.nama_latin || "undifined"}
              </div>
            </h1>
          </div>

          <div className="flex flex-wrap p-5">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/2 mb-4">
              <div className="py-1 px-2">
                <label className="text-gray-500">Arti</label>

                {dataSurah?.arti ? (
                  <p className="text-black text-xl">{dataSurah.arti}</p>
                ) : (
                  <ShimmerLoading />
                )}
              </div>
              <div className="py-1 px-2">
                <label className="text-gray-500">Nomor Surat</label>
                <p className="text-black text-xl ">
                  {dataSurah?.nomor || "undifined"}
                </p>
              </div>
              <div className="py-1 px-2 ">
                <label className="text-gray-500">Jumlah ayat</label>
                <p className="text-black text-xl">
                  {dataSurah?.jumlah_ayat || "undifined"}
                </p>
              </div>
              <div className="py-1 px-2">
                <label className="text-gray-500">Tempat diturunkan</label>
                <p className="text-black text-xl">
                  {dataSurah?.tempat_turun || "undifined"}
                </p>
              </div>
            </div>

            <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 mb-4 ">
              <div className=" px-2">
                <label className="text-gray-500">Deskripsi</label>
                <p
                  className="text-black text-xl text-justify"
                  dangerouslySetInnerHTML={createMarkup(
                    dataSurah?.deskripsi || "undifined"
                  )}
                ></p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-center">
            <div className="mb-0 mt-10 p-4 xl:w-4/5">
              <label className="text-gray-700">
                cari nomor ayat surat {dataSurah.nama_latin}
              </label>
              <div className="input-group inline-flex items-stretch w-full">
                <input
                  type="search"
                  className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="cari nomor ayat..."
                  onChange={handleChangeSearch}
                  value={searchAyat}
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                  type="button"
                  id="button-addon2"
                  onClick={handleClickSearchAyat}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="search"
                    className="w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 w-96 m-auto text-indigo-900">
          <h1 className="text-4xl mt-2 text-center leading-4 text-grey-800 font-bold">
            {dataSurah?.nama ?? <LoadingAnimate />}
            <div className="mt-3 font-semibold text-lg">
              {dataSurah?.nama_latin || "undifined"}
              <br />
              {dataSurah?.arti || "undifined"}
            </div>
          </h1>
        </div>

        <main className="p-5 mt-0">
          {ayats.map((res, index) => {
            return (
              <div
                id={res.nomor}
                key={index}
                className="pt-16 pb-6 p-2 py-16 border-b-2 border-gray-300"
              >
                <p className="text-black font-semibold text-2xl">{res.nomor}</p>
                <p
                  className={`font-semibold leading-loose text-4xl text-indigo-900 text-right`}
                >
                  {res.ar}{" "}
                  <span className="rounded-full border-2 border-black p-2 text-2xl leading-normal">
                    {convertNumbArabic(res.nomor)}
                  </span>
                </p>
                <p className={`text-indigo-900 pt-2 font-semibold text-xl`}>
                  {res.tr}
                </p>
                <p className="">
                  <span className="italic text-lg text-black font-semibold">
                    Artinya :
                  </span>
                  {` ${res.idn}`}
                </p>
              </div>
            );
          })}
        </main>

        <div className={`w-full bg-indigo-200`}>
          <ReactAudioPlayer
            className="w-full rounded-none h-20"
            src={dataSurah.audio}
            controls
          />
        </div>

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

        <footer>asd</footer>
      </div>
    </>
  );
};

export default ViewSurah;
