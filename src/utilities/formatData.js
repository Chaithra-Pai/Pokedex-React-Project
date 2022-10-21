import { GenderList } from "../constants/constants";

export const FormatPokemonDetails = (pokemonName, types, genderData, damageData) => {
	
    const genderDataArray = GenderList.reduce((finalGenderArray, current) => {
		if (genderData[current]?.includes(pokemonName)) {
			finalGenderArray = [...finalGenderArray, current];
		}
		return finalGenderArray;
	}, []);

	const weakness = types?.reduce((finalWeaknessArray, current) => {
		finalWeaknessArray = [...new Set([...finalWeaknessArray, ...damageData[current?.type?.name]])];
		return finalWeaknessArray;
	}, []);

    return { genderDataArray, weakness }
}