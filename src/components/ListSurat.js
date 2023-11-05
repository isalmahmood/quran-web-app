import React, { useEffect, useState } from "react";
import LoadingAnimate from "./loading/LoadingAnimate";

export const ListSurat = (props) => {
  let search = props.search;
  let selectTypeSurat = props.selectTypeSurat;
  let dataSurah = props.dataSurah;

  if(selectTypeSurat === "Tidak difilter"){
    selectTypeSurat = ""
  }

  let setDataSurah = dataSurah.filter((res) => {
    return search.toLowerCase() === "" && selectTypeSurat === ""
      ? res
      : res.nama_latin.toLowerCase().includes(search.toLowerCase()) &&
          res.tempat_turun
            .toLowerCase()
            .includes(selectTypeSurat.toLowerCase());
  });

  return (
    <>
      <main>
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {setDataSurah.length > 0 ? (
              setDataSurah.map((res, index) => {
                return (
                  <div
                    key={index}
                    className="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
                  >
                    {/* Article */}
                    <article className="overflow-hidden bg-green-50 shadow-lg">
                      <header className="flex items-center bg-green-200 justify-between leading-tight p-2 md:p-2">
                        <p className="text-grey-darker font-bold text-base">
                          {res.nomor}
                        </p>
                        <h1 className=" pl-10 text-center">
                          <p className="text-2xl text-center font-bold text-black">
                            {res.nama}
                          </p>
                          <p className="text-base font-bold">
                            {res.nama_latin}
                          </p>
                        </h1>
                        <p className="text-grey-darker font-semibold text-base">
                          {res.tempat_turun}
                        </p>
                      </header>
                      <footer className=" items-center justify-between leading-none p-2 md:px-4">
                        <p className="text-sm font-semibold">
                          {res.nama_latin}
                        </p>

                        <p className="text-sm font-semibold">
                          Arti : {res.arti}
                        </p>
                        <p className="text-sm font-semibold">
                          Jumlah Ayat : {res.jumlah_ayat}
                        </p>
                        <div className=" items-center text-black">
                          <button
                            onClick={props.handleView}
                            value={res.nomor}
                            className="bg-indigo-800 w-1/2 px-5 py-1 rounded-lg text-base text-white font-semibold drop-shadow-lg block my-2 m-auto hover:scale-110"
                          >
                            View
                          </button>
                        </div>
                      </footer>
                    </article>
                    {/* END Article */}
                  </div>
                );
              })
            ) : (
              <div className="m-auto">
                <h2 className="font-bold text-gray-800 text-xl mb-2">Surat tidak ditemukan</h2>
                <LoadingAnimate/></div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};