import React, { useState } from 'react';
import { styled, css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const countries = [
  {
    name: 'kr',
    text: '한국',
  },
  {
    name: 'ar',
    text: '아르헨티나',
  },
  {
    name: 'jp',
    text: '일본',
  },
  {
    name: 'us',
    text: '미국',
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
  justify-content: space-between;
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;

const Country = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('kr');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <>
      <CategoriesBlock>
        {categories.map((c) => (
          <Category
            key={c.name}
            className={selectedCategory === c.name ? 'active' : undefined}
            onClick={() => handleCategoryClick(c.name)}
            to={c.name === 'all' ? '/' : `/${c.name}/${selectedCountry}`}
          >
            {c.text}
          </Category>
        ))}
      </CategoriesBlock>
      <CategoriesBlock>
        {countries.map((c) => (
          <Country
            key={c.name}
            className={selectedCountry === c.name ? 'active' : undefined}
            onClick={() => handleCountryClick(c.name)}
            to={`/${selectedCategory}/${c.name}`}
          >
            {c.text}
          </Country>
        ))}
      </CategoriesBlock>
    </>
  );
};

export default Categories;
