import React from 'react';
import Carousel from './Carousel';

const TopRated = ({ items = [] }) => {
  return (
    <Carousel 
      title="Top Rating Film dan Series Hari Ini"
      items={items}
      type="card"
    />
  );
};

export default TopRated;
