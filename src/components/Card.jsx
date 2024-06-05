import React from 'react';
import { Link } from "react-router-dom";


const Card = ({pokemon}) => {
  console.log(pokemon.id)
  
    return (
      <div>
        <Link to= {{ pathname:`/about/${pokemon.id}`}}>
          <p style={{fontSize: "15px"}}>{pokemon.title}</p>
          {/* <img src={"https://image.tmdb.org/t/p/w500" + pokemon.poster_path} alt={pokemon.title}/> */}
          </Link>
      </div>
    );
  };

export default Card
