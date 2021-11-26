import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import GetFilms from "../../Api";
const getFilms = new GetFilms();
export default function Reviews({ id }) {
  const [reviews, setReviews] = useState("");
  useEffect(() => {
    getFilms.getReviews(id).then((r) => setReviews(r.results));
  }, [id]);
  return (
    <ul>
      {reviews &&
        reviews.map((review) => (
          <li key={review.id}>
            <p>{review.author_details.name}</p>
            <p>{review.content}</p>
          </li>
        ))}
    </ul>
  );
}
Reviews.propTypes = {
  id: PropTypes.number,
};
