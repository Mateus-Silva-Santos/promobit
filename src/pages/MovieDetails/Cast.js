import React,{ useEffect,useState } from 'react';

export default function Cast({id_movie}) {
    
    const URL = `https://api.themoviedb.org/3/movie/${id_movie}/credits?api_key=83222fdedbaaf8b083c2da11c6a352f7&language=pt-BR`;
    const IMG = "https://image.tmdb.org/t/p/w1280/";
    const [casting,setCasting] = useState([]);
    useEffect(() => {
        fetch(URL).then(
            (res) => res.json()
        ).then((data) => {
            setCasting(data.cast);
            console.log(data.cast);
        });
    },[]);
  return (<div className='grid-container'>
      {casting.length > 10 && casting.map(c =>(
        <div className='grid-item'>
        <img src={IMG + c.profile_path} className='img-actor'/>
        <p>{c.name}</p>
        <p>{c.character}</p>
        </div>
      ))
    }
  </div>);
}
