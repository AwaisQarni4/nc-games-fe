import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reviews from "./components/Reviews";
import Home from "./components/Home";
import Categories from "./components/Categories";
import ReviewOfCategory from "./components/ReviewOfCategory";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/reviews" element={<Reviews />}></Route>
          <Route path="/categories" element={<Categories />}></Route>
          <Route
            path="/category/:reviews"
            element={<ReviewOfCategory />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
