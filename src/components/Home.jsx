import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1> Welcome to the NC Games </h1>
      <Link to={"/reviews"}>
        <button>See Reviews</button>
      </Link>
      <Link to={"/categories"}>
        <button>See Categories</button>
      </Link>
    </div>
  );
};

export default Home;
