import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=74e6158a65e53d6dc937ccdd03fe4703&language=en-US&page=1`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(({ results }) => setReviews(results));
  }, [id]);
  return reviews.length ? (
    reviews.map(({ author, content }, i) => (
      <div key={`${author}${i}`}>
        <h2>{author}</h2>
        <p>{content}</p>
      </div>
    ))
  ) : (
    <p>No reviews</p>
  );
}
