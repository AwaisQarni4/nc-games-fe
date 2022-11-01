import { Link } from "react-router-dom";
const ShowCategory = ({ category }) => {
  return (
    <div>
      <Link to={`/category/${category.slug}`}>
        <h2>{category.slug}</h2>
      </Link>
      <p>{category.description}</p>
    </div>
  );
};

export default ShowCategory;
