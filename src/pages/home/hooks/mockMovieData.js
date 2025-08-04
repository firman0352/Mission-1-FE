import { useState, useEffect } from 'react';

export const useMockMovieData = () => {

  const [movieData, setMovieData] = useState({
    movies: [],
  });

  useEffect(() => {

    const generateMovieData = (count = 7) => {
      return Array.from({ length: count }, (_, i) => {
        const movieNumber = i + 1;
        
        return {
          id: movieNumber,
          title: `Movie Title ${movieNumber}`,
          rating: (4.0 + Math.random()).toFixed(1) + '/5',
          wideBannerImg: `/banner-wide/${movieNumber}.png`,
          bannerImg: `/banner/${movieNumber}.png`,
          isNewEpisode: Math.random() < 0.5,
          isTop10: Math.random() < 0.3,
        };
      });
    };

    setMovieData({
      movies: generateMovieData(7),
    });
  }, []);

  return movieData;
};

export default useMockMovieData;
