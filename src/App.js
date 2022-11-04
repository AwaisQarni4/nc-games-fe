import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Reviews from "./components/Reviews";
import Categories from "./components/Categories";
import ReviewOfCategory from "./components/ReviewOfCategory";
import IndividualReview from "./components/IndividualReview";
import Comments from "./components/Comments";
import { UserContext } from "./context/UserContext";
import Welcome from "./components/Welcome.jsx";
import SignIn from "./components/SignIn";

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <div className="App">
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            {user === null ? (
              // <Routes>
              <Route path="/" element={<SignIn />}></Route>
            ) : (
              // </Routes>
              // <Routes>
              <Route path="/" element={<Welcome />}></Route>
              // </Routes>
            )}

            {/* <Routes> */}
            <Route path="/reviews" element={<Reviews />}></Route>
            <Route path="/categories" element={<Categories />}></Route>
            <Route
              path="/reviews/:review_id"
              element={<IndividualReview />}
            ></Route>
            <Route
              path="/category/:reviews"
              element={<ReviewOfCategory />}
            ></Route>
            <Route
              path="/reviews/:review_id/comments"
              element={<Comments user={user} />}
            ></Route>
          </Routes>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
