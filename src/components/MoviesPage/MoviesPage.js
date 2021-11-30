import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GetFilms from "../../Api";
const getFilms = new GetFilms();
export default function MoviesPage() {
  const [value, setValue] = useState("");
  const [movies, setMovies] = useState(null);
  let location = useLocation();

  useEffect(() => {
    if (!value) {
      setMovies([]);
      return;
    }
  }, [value]);
  const HandleChange = (e) => {
    setValue(e.target.value);
  };
  function onSubmit(e) {
    e.preventDefault();
    console.log(location);
    getFilms.SearchMovies(value).then((r) => setMovies(r.results));
    location = { ...location, search: `qurey=${value}` };
    console.log(location);
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={HandleChange}
          value={value}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>

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
