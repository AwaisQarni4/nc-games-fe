const ShowReviewsOfCategory = ({ newReviews }) => {
  return (
    <div>
      <h2>{newReviews.title}</h2>
      <p>Votes: {newReviews.votes}</p>
      <p>Author: {newReviews.owner}</p>
    </div>
  );
};

export default ShowReviewsOfCategory;
