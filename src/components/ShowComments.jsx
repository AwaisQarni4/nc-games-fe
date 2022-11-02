const ShowComments = ({ comment }) => {
  return (
    <div>
      <h4>{comment.body}</h4>
      <p>author: {comment.author}</p>
      <p>votes: {comment.votes}</p>
    </div>
  );
};

export default ShowComments;
