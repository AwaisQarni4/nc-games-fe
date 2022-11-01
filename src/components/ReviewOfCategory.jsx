import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ShowReviewsOfCategory from "./ShowReviewsOfCategory";

const ReviewOfCategory = () => {
  const [filteredReviews, setFilteredReviews] = useState(null);
  const [isLodaing, setIsLoading] = useState(true);

  const categoryToFind = useParams().reviews;
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://awais-game-data.herokuapp.com/api/reviews?category=${categoryToFind}`
    )
      .then((res) => {
        return res.json();
      })
      .then((reviews) => {
        setFilteredReviews(reviews);
        setIsLoading(false);
      });
  }, [categoryToFind]);

  if (isLodaing) return <h2>Fetching Reviews... Take a walk!!</h2>;
  return (
    <div>
      <h1>Reviews for {categoryToFind}</h1>
      <ul>
        {filteredReviews.map((review) => {
          return (
            <ShowReviewsOfCategory key={review.review_id} newReviews={review} />
          );
        })}
      </ul>
    </div>
  );
};

export default ReviewOfCategory;
