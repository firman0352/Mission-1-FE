import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ContinueWatching from './components/ContinueWatching';
import TopRated from './components/TopRated';
import TrendingFilms from './components/TrendingFilms';
import NewReleases from './components/NewReleases';
import Footer from './components/Footer';
import useMockMovieData from './hooks/mockMovieData';
import { useContext } from 'react';
import { useAuthContext } from '../../components/AuthProvider';

const Home = () => {
  const movieData = useMockMovieData();
  console.log('movieData:', movieData.movies);
  const { isAuthenticated, user } = useAuthContext();
  console.log('isAuthenticated:', isAuthenticated, 'username:', user?.username);

  return (
    <div className="bg-[#181A1C] text-white font-[Lato] min-h-screen">
      <Header />
      <HeroSection />
      <ContinueWatching items={movieData.movies} />
      <TopRated items={movieData.movies} />
      <TrendingFilms items={movieData.movies} />
      <NewReleases items={movieData.movies} />
      <Footer />
    </div>
  );
};

export default Home;
