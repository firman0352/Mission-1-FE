import React from 'react';
import Carousel from './Carousel';

const ContinueWatching = ({ items = [] }) => {
  return (
    <Carousel 
      title="Melanjutkan Tonton Film"
      items={items}
      type="wide"
    />
  );
};

export default ContinueWatching;
