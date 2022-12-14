import { 
    FETCH_POKEMON_LIST, 
    FETCH_POKEMON_LIST_SUCCESS, 
    FETCH_POKEMON_LIST_FAILURE,
    SEARCH_POKEMON_LIST
} from '../actionTypes/pokemonListActions';
import axios from 'axios';
import { Services } from '../../../constants/constants'

export const fetchPokemons = () => {
    return {
        type: FETCH_POKEMON_LIST
    }
}

export const fetchPokemonListSuccess = (pokemons) => {
    return {
        type: FETCH_POKEMON_LIST_SUCCESS,
        payload: pokemons
    }
}

export const fetchPokemonListFailure = (error) => {
    return {
        type: FETCH_POKEMON_LIST_FAILURE,
        payload: error
    }
}

export const searchPokemonList = (value) => {
	return {
		type: SEARCH_POKEMON_LIST,
		payload: value,
	};
};

export const fetchPokemonListApiCall = () => {
    return (dispatch) => {
        dispatch(fetchPokemons());
        axios
            .get(Services.pokemonListAPI)
            .then ((response) => {
                dispatch(fetchPokemonListSuccess(response.data))
                // console.log(response.data);
            })
            .catch((error) => dispatch(fetchPokemonListFailure(error)))
    }
}
