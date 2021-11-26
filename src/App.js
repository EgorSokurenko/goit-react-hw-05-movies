import Navigations from "./components/Navigations";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const HomePage = lazy(() => import("./components/HomePage"));
const MoviesPage = lazy(() => import("./components/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./components/MovieDetailsPage"));

function App() {
  return (
    <>
      <Navigations />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/*" element={<MoviesPage />} />
          <Route path="movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
