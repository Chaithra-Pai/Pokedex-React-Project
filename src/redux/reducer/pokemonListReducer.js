import { LoadingIndicators } from '../../constants/constants';
import { 
    FETCH_POKEMON_LIST, 
    FETCH_POKEMON_LIST_SUCCESS, 
    FETCH_POKEMON_LIST_FAILURE
} from '../actionContainer/actionTypes/pokemonListActions';

const initialState = {
    loading: LoadingIndicators.LOADING,
    pokemonListResponse: {},
    pokemonListError: ''
}

export const pokemonListReducer = ( state = initialState, action ) => {
    switch(action.type){
        case FETCH_POKEMON_LIST:
            return {
                ...state,
                loading:LoadingIndicators.LOADING,
            }
        case FETCH_POKEMON_LIST_SUCCESS:
            return {
                ...state,
                pokemonListResponse: action.payload,
                loading:LoadingIndicators.LOADING,
            }
        case FETCH_POKEMON_LIST_FAILURE:
            return {
                ...state,
                pokemonListResponse: {},
                pokemonListError: action.payload,
                loading:LoadingIndicators.FAILURE,
            }
        default :
            return state
    }
}