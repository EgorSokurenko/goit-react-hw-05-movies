import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
export default function Movies({ movies }) {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(navigate);
  if (location.pathname !== "/movies") {
    location.pathname = "/movies";
    return;
  }

  return (
    <ul>
      {movies &&
        movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${location.pathname}/${movie.id}`,
                  hash: "",
                  state: { location },
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
