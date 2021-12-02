import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GetFilms from "../../Api";
import Movies from "../../components/Movies/movies";
const getFilms = new GetFilms();
export default function HomePage() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    getFilms
      .getTrending()
      .then((r) => r.results)
      .then(setMovies)
      .catch(console.log);
  }, []);
  return (
    <>
      <h2>TrendMovies</h2>
      {movies && <Movies movies={movies} />}
    </>
  );
}
