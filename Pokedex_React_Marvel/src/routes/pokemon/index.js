import React from "react";
import {Route, Switch} from "react-router-dom";

import pokemonListContainer from "./pokemonContainer";

export const Pokemons = (match) => {

    return (
        
       
        <div>
            
            <Switch>
                <Route exact path="/pokemon/page/:id" component={pokemonListContainer}/>
            </Switch>
        </div>
    );
};