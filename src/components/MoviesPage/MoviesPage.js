import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GetFilms from "../../Api";
const getFilms = new GetFilms();
export default function MoviesPage() {
  const [value, setValue] = useState("");
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    if (!value) {
      setMovies([]);
      return;
    }
    setTimeout(() => {
      getFilms.SearchMovies(value).then((r) => setMovies(r.results));
    }, 0);
  }, [value]);
  const HandleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <input
        onChange={HandleChange}
        value={value}
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
      <ul>
        {movies &&
          movies.map((movie) => {
            return (
              <li key={movie.id}>
                <Link to={`${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
