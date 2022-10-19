import { combineReducers } from 'redux';
import { pokemonDetailsReducer } from './pokemonDetailsReducer';
import { pokemonListReducer } from './pokemonListReducer';

export const rootReducer = combineReducers( {pokemonList: pokemonListReducer, pokemonDetails: pokemonDetailsReducer});

export default rootReducer