import { Link } from "react-router-dom";
const ShowReview = ({ review }) => {
  return (
    <div>
      <Link to={`/reviews/${review.review_id}`}>
        <h4>{review.title}</h4>
      </Link>
      <p>author: {review.owner}</p>
      <p>votes: {review.votes}</p>
    </div>
  );
};

export default ShowReview;
