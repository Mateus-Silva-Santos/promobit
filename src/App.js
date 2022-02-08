import React from 'react';
import Movies from './pages/MoviesContent/Movies'
import Header from './pages/Header/Header';
import HeroContent from './pages/HeroContent/HeroContent';

import { Routes, Route} from 'react-router-dom'
import MovieDetails from './pages/MovieDetails/MovieDetails';
function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movieDetails/:id" element={<MovieDetails/>}/>
    </Routes>
    );
}

function Home () {
  return (
    <>
    <Header/>
    <HeroContent/>
    <Movies/>
    </>
  );
}

export default App;
