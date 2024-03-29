import React from 'react';
import { useParams } from 'react-router-dom';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = () => {
  const params = useParams();
  const category = params.category || 'all';
  const country = params.country || 'kr';
  return (
    <div>
      <Categories />
      <NewsList category={category} country={country} />
    </div>
  );
};

export default NewsPage;
