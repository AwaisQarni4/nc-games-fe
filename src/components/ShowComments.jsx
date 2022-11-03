const ShowComments = ({ comment }) => {
  return (
    <>
      <h4>{comment.body}</h4>
      <p>author: {comment.author}</p>
      <p>votes: {comment.votes}</p>
    </>
  );
};

export default ShowComments;
