import { Link, useLocation } from "react-router-dom";
import { useState } from "react/cjs/react.development";
export default function Movies({ movies }) {
  const location = useLocation();
  return (
    <ul className="list-group">
      {movies &&
        movies.map((movie) => {
          return (
            <li className="list-group-item " key={movie.id}>
              <img
                style={{ width: "100px" }}
                src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                className="card-img-top"
                width="100"
                alt="poster"
              />
              <Link
                to={`${
                  location.pathname === "/" ? "movies" : location.pathname
                }/${movie.id}`}
                state={{
                  from: location,
                  label: "goBack",
                }}
              >
                {movie.title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
