import React from "react";
import { Link, useLocation } from "react-router-dom";

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
                className="inline-flex text-white text-xl font-semibold items-center justify-center p-2 "
              >
                Quran Lite App
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-8 w-auto lg:hidden"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
                <img
                  className="hidden h-8 w-auto lg:block"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <span className="text-white px-3 py-2 text-xl font-bold">
                    Quran Lite App
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
                      className={`bg-green-700 text-white mr-2 px-3 py-2 rounded-md text-sm font-medium
                      ${path === '/' && 'hidden' }`}
                      aria-current="page"
                    >
                      Home
                    </Link>
                    <Link
                      to={"/"}
                      className="bg-green-700 text-white px-3 py-2 rounded-md text-sm font-medium"
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
