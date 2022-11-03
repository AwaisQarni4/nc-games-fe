import { Link } from "react-router-dom";

const ShowReviewsOfCategory = ({ newReviews }) => {
  return (
    <div>
      <Link to={`/reviews/${newReviews.review_id}`}>
        <h2>{newReviews.title}</h2>
      </Link>
      <p>Votes: {newReviews.votes}</p>
      <p>Author: {newReviews.owner}</p>
    </div>
  );
};

export default ShowReviewsOfCategory;
