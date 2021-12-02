import { Link, useLocation } from "react-router-dom";
export default function Movies({ movies }) {
  const location = useLocation();
  return (
    <ul>
      {movies &&
        movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${movie.id}`,
                  state: { from: location.pathname },
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
