import React from 'react';
import { Link } from "react-router-dom";
import './pokemonList.css';

const PokeList = ({pokemons, pageIndexStart}) => (
    <div>
        <h2 className="headpoke">Pokemon List</h2>
       
       
        <ol>
                 {pokemons.map((pokemon, index) => {
                return (
                    
                    <li key={index}>
                     <Link to={`/pokemon${pokemon.url}`}>{pokemon.name} </Link>
                    </li>
                    
                )
            })}
        
        </ol>
        
    </div>
);

export default PokeList;