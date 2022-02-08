import React,{ useEffect, useState } from 'react';
import './HeroContent.css'

const HeroContent = () => {
    const CloseButton = ({description}) => {
        return (
            <div className='btn-close'>
                <div>
                    {description}
                </div>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99996 0.666672C4.39163 0.666672 0.666626 4.39167 0.666626 9.00001C0.666626 13.6083 4.39163 17.3333 8.99996 17.3333C13.6083 17.3333 17.3333 13.6083 17.3333 9.00001C17.3333 4.39167 13.6083 0.666672 8.99996 0.666672ZM13.1666 11.9917L11.9916 13.1667L8.99996 10.175L6.00829 13.1667L4.83329 11.9917L7.82496 9L4.83329 6.00834L6.00829 4.83334L8.99996 7.825L11.9916 4.83334L13.1666 6.00834L10.175 9L13.1666 11.9917Z" fill="white"/>
                </svg>
            </div>
            
        );
    }
    const [generos,setGeneros] = useState([
        {id:0,description:'Ação',active:false},
        {id:1,description:'Aventura',active:false},
        {id:2,description:'Animação',active:false},
        {id:3,description:'Comédia',active:false},
        {id:4,description:'Crime',active:false},
        {id:5,description:'Documentário',active:false},
        {id:6,description:'Drama',active:false},
        {id:7,description:'Família',active:false},
        {id:8,description:'Fantasia',active:false},
        {id:9,description:'História',active:false},
        {id:10,description:'Terror',active:false},
        {id:11,description:'Música',active:false},
        {id:12,description:'Mistério',active:false},
        {id:13,description:'Romance',active:false},
        {id:14,description:'Ficcção Científica',active:false},
        {id:15,description:'Cinema TV',active:false},
        {id:16,description:'Thriller',active:false},
        {id:17,description:'Guerra',active:false},
        {id:18,description:'Faroeste',active:false}
    ]);
    const handleClick = (id,active) => {
        let gen = generos;
        gen[id].active = !active;
        setGeneros([...gen]);
       
    }
    const BtnGenero = ({genero}) => {
        return (
            <button className={`btn-genero ${genero.active ? 'active':''}`} onClick={() => handleClick(genero.id,genero.active)}>{genero.description && (genero.active)? <CloseButton description={genero.description}/>:genero.description}</button>
        );
    }
    
    return (
    <div className='hero-content'>
      <h1 className='hero-title'>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
      <p className='hero-subtitle'>Filtre Por:</p>
      <div className='hero-btn'>
      {
          generos.map(genero => (
              <BtnGenero genero={genero} key={genero.id} />
          ))
          
      }
      </div>
  </div>
  );
}

export default HeroContent;