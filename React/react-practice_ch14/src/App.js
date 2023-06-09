import React, { useState, useCallback } from "react";
import { Route } from "react-router-dom";
import Categories from "./components/Categories";
import NewsList from "./components/NewsList";
import { Routes } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

const App = () => {
  // const [category, setCategory] = useState("all");
  // const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <Routes>
      {/* <Categories category={category} onSelect={onSelect} /> */}
      {/* <NewsList category={category} /> */}
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
};

export default App;
