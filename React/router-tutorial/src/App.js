import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
const data = {
  skm0628: {
    name: "손강민",
    description: "리액트를 좋아하는 개발자",
  },
  byeongje: {
    name: "김병제",
    description: "리액트를 싫어하는 개발자",
  },
};
const App = () => {
  const test = "1111111111111111";
  return (
    <Routes>
      <Route path="/" element={<Home data={data} />}>
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
      </Route>

      <Route path="/about" element={<About />} test={test} />
      <Route path="/profiles/:username" element={<Profile data={data} />} />
    </Routes>
  );
};

export default App;
