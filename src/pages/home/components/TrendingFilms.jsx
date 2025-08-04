import React from 'react';
import Carousel from './Carousel';

const TrendingFilms = ({ items = [] }) => {
  return (
    <Carousel 
      title="Film Trending"
      items={items}
      type="card"
    />
  );
};

export default TrendingFilms;
