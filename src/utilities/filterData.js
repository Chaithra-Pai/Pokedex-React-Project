export const filteredPokemonList = ( pokemonData, filterList, typesData, genderData ) => {
    let tempData = pokemonData ? [...pokemonData] : []

    if(
        filterList['Type']?.length === Object.keys(typesData)?.length &&
        filterList['Gender']?.length === Object.keys(genderData)?.length
    ){        
        return tempData
    } else {
        let filteredGenderData = filterGender( tempData, filterList, genderData);
        let fullList = filterType(filteredGenderData, filterList, typesData);
        console.log(fullList);
        return fullList;
    }
}

const filterGender = ( data, filterList, genderData ) => {
    let updatedData = data?.filter((item) => {
        for(let gender of filterList['Gender']) {
            if(genderData[gender]?.includes(item.name)){
                return item;
            }
        }
    })
    return updatedData;
}

const filterType = ( data, filterList, typesData ) => {
    let updatedData = data?.filter((item) => {
        for(let type of filterList['Type']) {
            if(typesData[type]?.includes(item.name)){
                return item;
            }
        }
    })
    return updatedData;
}