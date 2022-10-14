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