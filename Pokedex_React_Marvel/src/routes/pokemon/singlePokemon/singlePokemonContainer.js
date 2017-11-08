import React, {Component} from 'react';
import {Route, Switch, Redirect} from "react-router-dom";

import {getPokemon} from '../../../data/pokemon';
import Pokemon from './singlePokemon';

class singlePokeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: undefined,
            pokemonURL: undefined
        };
    }

    async componentDidMount() {
        const pokemon = await getPokemon(`pokemon/${this.props.match.params.id}`);
        
        this.setState({pokemon});
    }

    render() {
        if (this.state.pokemon === undefined) {

            return <div>Loading...</div>;
        }
        return <Pokemon pokemon={this.state.pokemon}/>
    }
}

export default singlePokeContainer;
