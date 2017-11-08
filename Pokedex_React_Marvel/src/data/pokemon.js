import pokemonInstance from '../utils/pokemonInstance';

export const getPokemonList = (main_url) => {
    return (pokemonInstance.get(main_url).then((data) => {
        let poke_data = data.data.results;
        let pokeList = [];
        for (var key in poke_data) {
            var url = poke_data[key].url;
            url = url.match(/\/([0-9]+)\//ig)
            pokeList.push({url: url[0], name: poke_data[key].name});
        }
        let pokeData = {
            count: data.data.count,
            nextPageURL: data.data.next,
            pokemonList: pokeList
        }
        return pokeData;
    }).catch(e => Promise.reject()));
}

export const getPokemon = (main_url) => {
    return (pokemonInstance.get(main_url).then((data) => {
        return data.data;
    }).catch(e => Promise.reject()));
}
