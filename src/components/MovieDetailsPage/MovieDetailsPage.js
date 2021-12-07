import { useState, useEffect } from "react";
import React, { lazy, Suspense } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import GetFilms from "../../Api";
const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews"));
const getFilms = new GetFilms();
export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [film, setFilm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!movieId) {
      return;
    }
    getFilms.DetalFilm(movieId).then(setFilm).catch(console.log);
  }, [movieId]);
  const onGoBack = () => {
    navigate(
      location.state?.from?.pathname
        ? `${location.state?.from?.pathname}${location.state?.from?.search}`
        : "/"
    );
  };
  return (
    <>
      <button type="button" onClick={onGoBack}>
        GoBack
      </button>
      <div className="card" style={{ width: "300px" }}>
        <img
          src={`https://image.tmdb.org/t/p/w342/${film.poster_path}`}
          className="card-img-top"
          width="120"
          alt="poster"
        />
        <div class="card-body">
          <h5 className="card-title">{film.original_title}</h5>
          <p className="card-text">{film.overview}</p>
        </div>
        <ul className="list-group list-group-flush">
          {film.genres &&
            film.genres.map((genre) => (
              <li key={genre.id} className="list-group-item">
                {genre.name}
              </li>
            ))}
        </ul>
        <div className="card-body">
          <ul>
            <li>
              <Link
                className="card-link"
                to={`/movies/${movieId}/cast`}
                state={{
                  from: location.state.from,
                  label: location.state.label,
                }}
              >
                Cast
              </Link>
            </li>

            <li>
              <Link
                className="card-link"
                to={`/movies/${movieId}/reviews`}
                state={{
                  from: location.state.from,
                  label: location.state.label,
                }}
              >
                Reviews
              </Link>
            </li>
          </ul>
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
    </>
  );
}
