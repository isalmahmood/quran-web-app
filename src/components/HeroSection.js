import React from "react";
import ImgWallpapper from "../assets/images/image-hero.jpg";

const HeroSection = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${ImgWallpapper})` }}
        className="wallpaper w-full h-80 bg-no-repeat bg-cover bg-center"
      >
        <div className="wallpaper w-full h-80 p-5 bg-black/50">
          <h1 className="text-3xl leading-4 text-slate-100 font-bold">
            Quran Lite App
          </h1>
        </div>
      </div>
    </>
  );
};
// bg-gradient-to-r from-green-700 via-green-600 to-green-500
export default HeroSection;
