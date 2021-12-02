import { useState, useEffect } from "react";
import React, { lazy, Suspense } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import GetFilms from "../../Api";
const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews"));
const getFilms = new GetFilms();
export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [film, setFilm] = useState("");
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    if (!movieId) {
      return;
    }
    getFilms.DetalFilm(movieId).then(setFilm).catch(console.log);
  }, [movieId]);

  return (
    <div>
      <Link to="../movies">GoBack</Link>
      <div className="img-block">
        <img
          width="300"
          className="poster"
          src={`https://image.tmdb.org/t/p/w342/${film.poster_path}`}
          alt="poster"
        />
      </div>
      <div className="desc">
        <h3>{film.original_title}</h3>
        <span>Overview</span>
        <p>{film.overview}</p>
        <span>Genres</span>
        <ul>
          {film.genres &&
            film.genres.map((genre) => (
              <li key={genre.id}>
                <span>{genre.name}</span>
              </li>
            ))}
        </ul>
        <hr />
      </div>
      <div>
        <Link to="cast">Cast</Link>
        <br />
        <Link to="reviews">Reviews</Link>
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={`cast`} element={<Cast id={movieId} />} />
            <Route path={`reviews`} element={<Reviews id={movieId} />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}
