import './singlePokemon.css';
import React from 'react';

const Pokemon = ({pokemon}) => (
    <div className="singleData">
        <ol>
            <li>ID : {pokemon.id}</li>
            <li>Name : {pokemon.name}</li>
            <li>Weight : {pokemon.weight}</li>
            <li>Height : {pokemon.height}</li>
            <li>Base Experience : {pokemon.base_experience}</li>
               
        </ol>
    </div>
);

export default Pokemon;