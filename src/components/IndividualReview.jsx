import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const IndividualReview = () => {
  const [individualReview, setIndividualReview] = useState(null);
  const [isLodaing, setIsLoading] = useState(true);

  const reviewId = useParams().review_id;

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://awais-game-data.herokuapp.com/api/reviews/${reviewId}`)
      .then((res) => {
        return res.json();
      })
      .then((review) => {
        setIndividualReview(review);
        setIsLoading(false);
      });
  }, [reviewId]);

  if (isLodaing) return <h2>Fetching Review... See you laterrr!!</h2>;
  return (
    <div>
      <h1>{individualReview.title}</h1>
      <h3>Category: {individualReview.category}</h3>
      <h3>Designer: {individualReview.designer}</h3>
      <h4>author: {individualReview.owner}</h4>
      <h4>Comments: {individualReview.comment_count}</h4>
      <h4>votes: {individualReview.votes}</h4>
      <p className="IndRevDescription App">{individualReview.review_body}</p>
      <img
        className="IndRevImg"
        src={individualReview.review_img_url}
        alt={individualReview.title}
      />
    </div>
  );
};

export default IndividualReview;
