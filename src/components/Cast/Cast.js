import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import GetFilms from "../../Api";
const getFilms = new GetFilms();
export default function Cast({ id }) {
  const [cast, setCast] = useState("");
  useEffect(() => {
    getFilms.getCast(id).then((r) => setCast(r.cast));
  }, [id]);
  return (
    <ul>
      {cast &&
        cast.map((actor) => (
          <li key={actor.id}>
            {actor.profile_path ? (
              <img
                width="150"
                src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${actor.profile_path}`}
                alt="actor"
              />
            ) : (
              "Изображение отстутствует"
            )}

            <p>{actor.name}</p>
            <p>character: {actor.character}</p>
          </li>
        ))}
    </ul>
  );
}
Cast.propTypes = {
  id: PropTypes.number,
};
