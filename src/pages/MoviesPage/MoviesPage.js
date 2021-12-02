import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GetFilms from "../../Api";
import Movies from "../../components/Movies/movies";
const getFilms = new GetFilms();

const useQueryState = (key) => {
  console.log(window.localStorage.getItem(key));
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? "";
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

export default function MoviesPage() {
  const [value, setValue] = useState("");
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useQueryState("query");
  let location = useLocation();

  useEffect(() => {
    if (query) {
      getFilms
        .SearchMovies(query)
        .then((r) => setMovies(r.results))
        .catch(console.log);
      return;
    }
    if (!value) {
      setMovies([]);
      return;
    }
  }, [value, query]);
  const HandleChange = (e) => {
    setValue(e.target.value);
  };
  function onSubmit(e) {
    e.preventDefault();
    setQuery(value);
    location.search = `?query=${query}`;
    getFilms
      .SearchMovies(value)
      .then((r) => setMovies(r.results))
      .catch(console.log);
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
          placeholder="Search films"
        />
        <button type="submit">Search</button>
      </form>

      {movies && <Movies movies={movies} />}
    </>
  );
}
