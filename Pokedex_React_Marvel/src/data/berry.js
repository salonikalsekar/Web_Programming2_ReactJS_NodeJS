import pokemonInstance from '../utils/pokemonInstance';

export const getBerryList = (main_url) => {
    return (pokemonInstance.get(main_url).then((data) => {
        let berry_data = data.data.results;
        let berry_list = [];
        for (var key in berry_data) {
            var url = berry_data[key].url;
            url = url.match(/\/([0-9]+)\//ig)
            berry_list.push({url: url, name: berry_data[key].name});
        }
        let berryData = {
            count: data.data.count,
            nextPageURL: data.data.next,
            berryList: berry_list
        }
        return berryData;
    }).catch(e => Promise.reject()))
}

export const getBerry = (main_url) => {
    return (pokemonInstance.get(main_url).then((data) => {
        return data.data;
    }).catch(e => Promise.reject()))
}
