import React,{useState,useEffect} from 'react';
import './Movies.css'
const Movies = () => {
  const [movies,setMovies] = useState([]);
  const POPULAR_MOVIES = "https://api.themoviedb.org/3/movie/popular?api_key=83222fdedbaaf8b083c2da11c6a352f7";
  
  useEffect(() => {
    fetch(POPULAR_MOVIES).then(
      (res) => res.json()
    ).then((data) => {
      console.log(data)
      setMovies(data.results)
    });    
  },[]);
  
  return (
    <div className='movie-container'>
    {
     movies.length > 0 && movies.map(movie => (
        <Movie key={movie.id} {...movie}/>
      ))
    }</div>
  );
}

const Movie = ({title,poster_path,overview,release_date}) => {
  
  const IMG = "https://image.tmdb.org/t/p/w1280/";
  return (
    <div className='movie'>
      <img src={IMG + poster_path} alt={title}/>
      <div className='info'>
        <h3 className='info-title'>{title}</h3>
        <span className='info-date'>{FormatarData(release_date)}</span>
      </div>
    </div>);
}

const FormatarData = (data_lancamento) => {
  const meses = ['','Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
  let data_formatada = data_lancamento.split('-').reverse();
  let mes_formatado = (data_formatada[1] < 10) ? data_formatada[1].toString().substr(1) : data_formatada[1];
  data_formatada[1] = meses[parseInt(mes_formatado)];
  return data_formatada.join(' ');
}

export default Movies;
