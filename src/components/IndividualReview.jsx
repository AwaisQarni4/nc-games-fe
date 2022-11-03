import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const IndividualReview = () => {
  const [individualReview, setIndividualReview] = useState(null);
  const [isLodaing, setIsLoading] = useState(true);

  const [voteUp, setVoteUp] = useState(0);

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

  const handleUpVotes = () => {
    setVoteUp((currentVotes) => {
      return currentVotes + 1;
    });

    fetch(`https://awais-game-data.herokuapp.com/api/reviews/${reviewId}`, {
      method: "PATCH",
      body: JSON.stringify({
        inc_votes: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => {
      return res.json();
    });
  };

  const handleDownVotes = () => {
    setVoteUp((currentVotes) => {
      return currentVotes - 1;
    });

    fetch(`https://awais-game-data.herokuapp.com/api/reviews/${reviewId}`, {
      method: "PATCH",
      body: JSON.stringify({
        inc_votes: -1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => {
      return res.json();
    });
  };

  if (isLodaing) return <h2>Fetching Review... See you laterrr!!</h2>;
  return (
    <div>
      <h1>{individualReview.title}</h1>
      <h3>Category: {individualReview.category}</h3>
      <h3>Designer: {individualReview.designer}</h3>
      <h4>author: {individualReview.owner}</h4>
      <h4>Comments: {individualReview.comment_count}</h4>
      <Link to={`/reviews/${reviewId}/comments`}>
        <button>See Comment</button>
      </Link>
      <h4>votes: {individualReview.votes + voteUp}</h4>
      <button onClick={handleUpVotes}> Up Vote</button>
      <button onClick={handleDownVotes}> Down Vote</button>
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
