import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GetFilms from "../../Api";
const getFilms = new GetFilms();
export default function HomePage() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    getFilms
      .getTrending()
      .then((r) => r.results)
      .then(setMovies);
  }, []);
  return (
    <>
      <h2>TrendMovies</h2>
      <ul>
        {movies &&
          movies.map((movie) => {
            return (
              <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
