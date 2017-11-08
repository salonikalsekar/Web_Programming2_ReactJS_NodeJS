import pokemonInstance from '../utils/pokemonInstance';

export const getMachineList = (main_url) => {
    return (pokemonInstance.get(main_url).then((data) => {
        let machine_data = data.data.results;
        let machine_list = [];
        for (var key in machine_data) {
            var url = machine_data[key].url;
            url = url.match(/\/([0-9]+)\//ig)
            machine_list.push({url: url, name: machine_data[key].url});
        }
        let machineData = {
            count: data.data.count,
            nextPageURL: data.data.next,
            machineList: machine_list
        }
        return machineData;
    }).catch(e => Promise.reject()))
}

export const getMachine = (main_url) => {
    return (pokemonInstance.get(main_url).then((data) => {
        return data.data;
    }).catch(e => Promise.reject()))
}
