import React from 'react';
import { useState, useCallback } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback((category) => setCategory(category), []);

  // const [country, setCountry] = useState('kr');
  // const onSelect2 = useCallback((country) => setCountry(country), []);

  // const [data, setData] = useState(null);
  // const onClick = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://newsapi.org/v2/top-headlines?country=kr&apiKey=22711413cbc14815b5e2c1ab3e946d6f',
  //     );
  //     setData(response.data);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  return (
    // <div>
    //   <Categories
    //     category={category}
    //     country={country}
    //     onSelect={onSelect}
    //     onSelect2={onSelect2}
    //   />
    //   <NewsList category={category} country={country} />
    // </div>
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category/:country" element={<NewsPage />} />
    </Routes>
  );
};

export default App;
