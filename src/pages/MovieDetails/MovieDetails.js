import React,{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css'
import Header from '../Header/Header';
import Cast from './Cast';
export default function MovieDetails() {
  const {id} = useParams();
  const id_movie = id;
  const IMG = "https://image.tmdb.org/t/p/w1280/";
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=83222fdedbaaf8b083c2da11c6a352f7&language=pt-BR`;
  const [movie,setMovie] = useState();

  useEffect(() => {
      fetch(URL).then(
          (res) => res.json()
      ).then((data) => {
          setMovie(data)
      }
      );
  },[]);

  const Details = ({title,poster_path,release_date,original_language,genres,runtime,adult,overview}) => {
      const data_lancamento = (release_date) ? release_date.split('-').reverse(): '';
      const ano_sinopse = (data_lancamento) ? data_lancamento.join('/') + ' ('+original_language.toUpperCase()+')':'';
      const genero_sinopse = genres && genres.map((genre) => {
          return [' '+genre.name+' '];
      });
      const classificacao = adult ? 'Somente para Adulto': 'Livre';
      const tempo_duracao = Math.floor(runtime / 60) + 'h ' + runtime % 60 + 'm';
      return (
        <div className="hero-movie-details">
            <div  className="hero-details">
            <img src={IMG + poster_path}/>
            <div className='info-details'>
                <h1>{title + ' ('+data_lancamento[2]+')'}</h1>
                <p>{classificacao + ' • '+ ano_sinopse + ' • '+ genero_sinopse + ' • ' + tempo_duracao}</p>
                <p>Avaliação</p>
                <h3>Sinopse</h3>
                <p className='sinopse'>{overview}</p>
                
            </div>
            </div>
      </div>
      );
  }
  return (
      <>
      <Header/>
      <div className='movie-content-details'>
        <Details {...movie}/>
      </div>
      <div className='movie-cast'>
          <h1>Elenco original</h1>
        <Cast id_movie={id}/>
      </div>
      <div className='trailer'>
          <h1>Trailer</h1>
      </div>
      
      </>
  );
}
