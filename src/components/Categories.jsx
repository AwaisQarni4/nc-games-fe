import { useEffect } from "react";
import { useState } from "react";
import ShowCategory from "./ShowCategory";

const Categories = () => {
  const [categories, setCategories] = useState(null);
  const [isLodaing, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://awais-game-data.herokuapp.com/api/categories")
      .then((res) => {
        return res.json();
      })
      .then((categories) => {
        setCategories(categories);
        setIsLoading(false);
      });
  }, []);

  if (isLodaing) return <h2>Fetching Categories.. Make a brew!!</h2>;
  return (
    <div>
      <h1>Game Categories</h1>
      <ul>
        {categories.map((category) => {
          return <ShowCategory key={category.slug} category={category} />;
        })}
      </ul>
    </div>
  );
};

export default Categories;
