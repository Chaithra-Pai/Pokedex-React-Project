export const apiBaseUrl = {
	baseUrl: 'https://pokeapi.co/api/v2/',
};

export const Services = {
	pokemonListAPI: `${apiBaseUrl.baseUrl}pokemon/`,
	pokemonDetailsAPI: `${apiBaseUrl.baseUrl}pokemon/`,
	pokemonDescriptionAPI: `${apiBaseUrl.baseUrl}pokemon-species/`,
	genderMasterdataAPI: `${apiBaseUrl.baseUrl}gender/`,
	typesMasterDataAPI: `${apiBaseUrl.baseUrl}type/`,
};

export const LoadingIndicators = {
    LOADING: 'loading',
    SUCCESS: 'success',
    FAILURE: 'failure'
};

export const Pokemon_Color_Codes = {
	NORMAL: '#DDCBB0',
	FIGHTING: '#FCC1B0',
	FLYING: '#B2D2E8',
	POISON: '#CFB7ED',
	GROUND: '#F4D1A6',
	ROCK: '#C5AE8',
	BUG: '#C1E0C8',
	GHOST: '#D7C2D7',
	STEEL: '#C2D4CE',
	FIRE: '#EDC2C4',
	WATER: '#CBD5ED',
	GRASS: '#C0D4C8',
	ELECTRIC: '#E2E2A0',
	PSYCHIC: '#DDC0CF',
	ICE: '#C7D7DF',
	DRAGON: '#CADCDF',
	DARK: '#C6C5E3',
	FAIRY: '#E4C0CF',
	UNKNOWN: '#C0DFDD',
	SHADOW: '#CACACA',
};