import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import ShowComments from "./ShowComments";

const Comments = () => {
  const [comments, setComments] = useState(null);
  const [isLodaing, setIsLoading] = useState(true);

  const reviewId = useParams().review_id;

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://awais-game-data.herokuapp.com/api/reviews/${reviewId}/comments`
    )
      .then((res) => {
        return res.json();
      })
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      });
  }, [reviewId]);

  if (isLodaing) return <h2>Fetching Comments... Think Yours!!</h2>;
  return (
    <div>
      <h1>Comments</h1>
      <ul>
        {comments.map((comment) => {
          return <ShowComments key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </div>
  );
};

export default Comments;
