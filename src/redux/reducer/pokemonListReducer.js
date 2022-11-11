import { LoadingIndicators } from '../../constants/constants';
import { 
    FETCH_POKEMON_LIST, 
    FETCH_POKEMON_LIST_SUCCESS, 
    FETCH_POKEMON_LIST_FAILURE,
    SEARCH_POKEMON_LIST
} from '../actionContainer/actionTypes/pokemonListActions';

const initialState = {
    loading: LoadingIndicators.LOADING,
    pokemonListResponse: {},
    pokemonListError: '',
    searchValue: '',
    pokemonSearchResults: []    
}

export const pokemonListReducer = ( state = initialState, action ) => {
    switch(action.type){
        case FETCH_POKEMON_LIST:
            return {
                ...state,
                loading:LoadingIndicators.LOADING,
                searchValue: '',
                pokemonSearchResults: []
            }
        case FETCH_POKEMON_LIST_SUCCESS:
            return {
                ...state,
                pokemonListResponse: action.payload,
                loading:LoadingIndicators.LOADING,
                // searchValue: '',
                pokemonSearchResults: []
            }
        case FETCH_POKEMON_LIST_FAILURE:
            return {
                ...state,
                pokemonListResponse: {},
                pokemonListError: action.payload,
                loading:LoadingIndicators.FAILURE,
                searchValue: '',
                pokemonSearchResults: []
            }
        case SEARCH_POKEMON_LIST:
			return {
				...state,
                searchValue: action.payload,
				pokemonSearchResults: pokemonListSearch(
					action.payload,
					state.pokemonListResponse?.results,
				)
			};
        default :
            return state
    }
}

const pokemonListSearch = (searchValue, pokemonList) => {
    
	let searchResult = pokemonList.filter((pokemon) => {
        console.log(pokemon?.id);
		if (
			pokemon?.name?.toLowerCase()?.includes(searchValue.toLowerCase()) ||
			pokemon?.id?.toString()?.includes(searchValue) ||
			pokemon?.id?.padStart(3,'0').includes(searchValue)
		) 
			return pokemon;
	});
	return searchResult;
};