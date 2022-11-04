import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const Welcome = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1> Welcome to the NC games, {user} !!</h1>
      <p> What are you looking for today?</p>
      <Link to={"/reviews"}>
        <button>See Reviews</button>
      </Link>
      <Link to={"/categories"}>
        <button>See Categories</button>
      </Link>
    </div>
  );
};

export default Welcome;
