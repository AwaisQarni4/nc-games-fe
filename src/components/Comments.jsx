import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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

  const handleComment = (event) => {
    event.preventDefault();
    console.log("username", event.target[1].value);
    console.log("comment", event.target[0].value);
    fetch(
      `https://awais-game-data.herokuapp.com/api/reviews/${reviewId}/comments`,
      {
        method: "POST",
        body: JSON.stringify({
          username: event.target[1].value,
          body: event.target[0].value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    ).then((res) => {
      console.log(res.json());
      return res.json();
    });
  };

  if (isLodaing) return <h2>Fetching Comments... Think Yours!!</h2>;
  return (
    <div>
      <h1>Comments</h1>
      <ul>
        {comments.map((comment) => {
          return <ShowComments key={comment.comment_id} comment={comment} />;
        })}
      </ul>
      <Link to={`/`}>
        <button>Home</button>
      </Link>
      <Link to={`/reviews/${reviewId}`}>
        <button>Back</button>
      </Link>
      <br />
      <br />
      <form onSubmit={handleComment}>
        <label>Comment</label>
        <br />
        <input type="text" name="comment" placeholder="Comment"></input>
        <br />
        <label>Username</label>
        <br />
        <input type="text" name="username" placeholder="Username"></input>
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Comments;
