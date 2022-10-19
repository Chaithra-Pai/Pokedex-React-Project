import { LoadingIndicators } from "../../constants/constants";
import {
    FETCH_POKEMON_DETAILS,
    FETCH_POKEMON_DETAILS_SUCCESS,
    FETCH_POKEMON_DETAILS_FAILURE,
    FETCH_POKEMON_DESCRIPTION,
    FETCH_POKEMON_DESCRIPTION_SUCCESS,
    FETCH_POKEMON_DESCRIPTION_FAILURE,
    CLEAR_POCKEMON_DETAILS 
} from '../actionContainer/actionTypes/pokemonDetailsActions'

const initialState = {
    pokemonDetailsLoading: LoadingIndicators.LOADING,
    pokemonDetailsResponse: {},
    pokemonDescription:{},
    error: ''
}

export const pokemonDetailsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_POKEMON_DETAILS:
            return {
                ...state,
                pokemonDetailsLoading: LoadingIndicators.LOADING
            }
        case FETCH_POKEMON_DETAILS_SUCCESS:
            return {
                ...state,
                pokemonDetailsResponse: { ...action.payload },
                pokemonDetailsLoading: LoadingIndicators.SUCCESS
            }
        case FETCH_POKEMON_DETAILS_FAILURE:
            return {
                ...state,
                pokemonDetailsResponse: {},
                error: action.payload,
                pokemonDescription: {},
                pokemonDetailsLoading: LoadingIndicators.FAILURE
            }
        case FETCH_POKEMON_DESCRIPTION:
            return {
                ...state,
                pokemonDetailsLoading: LoadingIndicators.LOADING
            }
        case FETCH_POKEMON_DESCRIPTION_SUCCESS:
            return {
                ...state,
                pokemonDescription: { ...action.payload },
                pokemonDetailsLoading: LoadingIndicators.SUCCESS
            }
        case FETCH_POKEMON_DESCRIPTION_FAILURE:
            return {
                ...state,
                pokemonDescription: {},
                error: action.payload,
                pokemonDetailsLoading: LoadingIndicators.FAILURE
            }
        case CLEAR_POCKEMON_DETAILS:
			return initialState;
        default:
            return state
    }
}