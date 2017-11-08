import React, {Component} from 'react';
import {getPokemonList} from '../../data/pokemon';
import PokemonList from './pokemonList';
import {Pagination} from 'react-bootstrap';

class PokeListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemonList: undefined,
            sizePerPage: 0,
            activePage: this.props.match.params.id,
            noOfPages: 0,
            offset: 20
           
        };
        this.handleSelect = this
            .handleSelect
            .bind(this);
    }

    async componentDidMount() {
        const pageData = await getPokemonList('pokemon/');
        let urlPageNumber = this.props.match.params.id;

        this.setState({
            noOfPages: Math.ceil(pageData.count / 20),
            sizePerPage: pageData.pokemonList.length,
            pokemonList: pageData.pokemonList,
            activePage: Number(urlPageNumber)
        });
        if (urlPageNumber > 0) {
            this.handleSelect(this.state.activePage);
        }
    }

    async handleSelect(page) {
        const pageData = await getPokemonList(`pokemon/?offset=${ (this.state.offset) * (page - 1)}`)
        this.setState({pokemonList: pageData.pokemonList, activePage: page})
        
       
    }

    componentWillReceiveProps(nextProps) {}

    render() {
        if (this.state.pokemonList === undefined) 
            return <div>Loading...</div>;
        return (
            <div>
                <PokemonList
                    activePage={this.state.activePage}
                    pokemons={this.state.pokemonList}/>
                <Pagination
                    className="users-pagination"
                    bsSize="medium"
                    maxButtons={5}
                    first
                    last
                    next
                    prev
                    boundaryLinks
                    items={this.state.noOfPages}
                    activePage={this.state.activePage}
                    onSelect={this.handleSelect}/>
            </div>
        )
    }
}

export default PokeListContainer;
