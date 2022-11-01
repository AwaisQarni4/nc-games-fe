const ShowReview = ({ review }) => {
  return (
    <div>
      <h4>{review.title}</h4>
      <p>author: {review.owner}</p>
      <p>votes: {review.votes}</p>
    </div>
  );
};

export default ShowReview;
