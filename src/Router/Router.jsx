import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import NavBarPublic from "../components/NavBarPublic.jsx";

export default function Router() {
  return (
    <BrowserRouter>
      <NavBarPublic/>
      <Routes>
        <Route
          path="/"
          element={<App />}
        />
         <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}
