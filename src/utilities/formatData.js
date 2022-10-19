import { GenderList } from "../constants/constants";

export const FormatPokemonDetails = (genderMasterData, pokemonName) => {
    const genderData = GenderList.reduce((finalGenderArray, current) => {
		if (genderMasterData[current]?.includes(pokemonName)) {
			finalGenderArray = [...finalGenderArray, current];
		}
		return finalGenderArray;
	}, []);
    return { genderData }
}