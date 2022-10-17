import { Pokemon_Color_Codes } from '../constants/constants'

export const calculateColorCode = ( types ) => {
    let colorArray = [];

    types?.map( (value) => {
        Object.entries(Pokemon_Color_Codes).filter((pokemonColor) => {
            if(value.type.name === pokemonColor[0].toLowerCase()){
                colorArray.push(pokemonColor[1])
            }
        });
    })

    if(colorArray.length > 0 ){
        return (
            colorArray.length > 1 ? `linear-gradient(${colorArray[0]},${colorArray[1]})` : colorArray[0]
        )
    }
}