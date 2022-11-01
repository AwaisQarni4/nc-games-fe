import { useEffect } from "react";
import { useState } from "react";
import ShowReview from "./ShowReview";

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLodaing, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://awais-game-data.herokuapp.com/api/reviews")
      .then((res) => {
        return res.json();
      })
      .then((reviews) => {
        setReviews(reviews);
        setIsLoading(false);
      });
  }, []);

  if (isLodaing) return <h2>Fetching Reviews.. take a nap!!</h2>;
  return (
    <div>
      <h1>Reviews</h1>
      <ul>
        {reviews.map((review) => {
          return <ShowReview key={review.review_id} review={review} />;
        })}
      </ul>
    </div>
  );
};

export default Reviews;
