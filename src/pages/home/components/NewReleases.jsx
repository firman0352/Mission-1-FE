import React from 'react';
import Carousel from './Carousel';

const NewReleases = ({ items = [] }) => {
  return (
    <Carousel 
      title="Rilis Baru"
      items={items}
      type="card"
    />
  );
};

export default NewReleases;
