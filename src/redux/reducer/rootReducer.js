import { combineReducers } from 'redux';
import { genderDataReducer } from './genderDataReducer';
import { pokemonDetailsReducer } from './pokemonDetailsReducer';
import { pokemonListReducer } from './pokemonListReducer';

export const rootReducer = combineReducers({
                                pokemonList: pokemonListReducer, 
                                pokemonDetails: pokemonDetailsReducer, 
                                genderData: genderDataReducer
                            });

export default rootReducer