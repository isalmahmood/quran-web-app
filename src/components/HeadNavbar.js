import React from "react";
import { Link, useLocation } from "react-router-dom";
import QuranIcon from '../assets/icons/quran-flaticon_by_BZZRINCANTATION.png'

const HeadNavbar = () => {

  const location = useLocation();
   let path = location.pathname;
   console.log(path)


  return (
    <>
      <nav className="fixed w-full z-50 ">
        <div className="mx-auto px-2 2xl:container sm:px-6 lg:px-8 bg-gradient-to-r from-green-700 via-green-600 to-green-500 drop-shadow-lg">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <button
                type="button"
                className="inline-flex text-white text-2xl font-bold items-center justify-center p-2 "
              >
                Quran Web App
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-8 w-auto lg:hidden"
                  src={QuranIcon}
                  alt="Your Company"
                />
                <img
                  className="hidden h-8 w-auto lg:block"
                  src={QuranIcon}
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-2 sm:block">
                <div className="flex space-x-4">
                  <span className="text-white px-1 py-2 text-2xl font-bold ">
                    Quran Web App
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
                <div>
                  <div
                    className="flex text-sm "
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <Link
                      to={"/"}
                      className={`bg-transparent tracking-wider font-normal text-white text-base mr-2 px-3 py-1 rounded-md text-sm font-semibold border-b-4 border-green-700
                      ${path === '/' && 'hidden' }`}
                      aria-current="page"
                    >
                      Home
                    </Link>
                    <Link
                      to={"/"}
                      className="bg-transparent tracking-wider font-normal text-white text-base px-3 py-1 rounded-md text-sm font-semibold border-b-4 border-green-700"
                      aria-current="page"
                    >
                      About
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
      </nav>
    </>
  );
};

export default HeadNavbar;
