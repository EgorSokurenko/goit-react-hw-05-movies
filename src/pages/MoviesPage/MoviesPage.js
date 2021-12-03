import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import GetFilms from "../../Api";
import Movies from "../../components/Movies/movies";
const getFilms = new GetFilms();

const useLocalState = (key) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? "";
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

export default function MoviesPage() {
  const [value, setValue] = useLocalState("value");
  const [movies, setMovies] = useState(null);
  let [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query"));
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
    if (!value) {
      setMovies([]);
      return;
    }
    setQuery(value);
    setSearchParams({ query: value });
  }
  return (
    <>
      <div onSubmit={onSubmit} class="container-fluid">
        <form class="d-flex">
          <input
            onChange={HandleChange}
            value={value}
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>

      {movies && <Movies movies={movies} />}
    </>
  );
}
