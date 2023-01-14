import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./container/pages/homepage/HomePage";
import ViewSurah from "./container/pages/viewspage/ViewSurah";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <BrowserRouter>
        <GlobalProvider>
      <Routes>
        <Route
          path="/"
          element={
              <HomePage />
            }
            />
        <Route path="/surah/:numbSurah" element={<ViewSurah />} />
      </Routes>
            </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
