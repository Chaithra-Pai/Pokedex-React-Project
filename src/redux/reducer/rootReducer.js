import { combineReducers } from 'redux';
import { genderDataReducer } from './genderDataReducer';
import { pokemonDetailsReducer } from './pokemonDetailsReducer';
import { pokemonListReducer } from './pokemonListReducer';
import { typesDataReducer } from './typesDataReducer';

export const rootReducer = combineReducers({
                                pokemonList: pokemonListReducer, 
                                pokemonDetails: pokemonDetailsReducer, 
                                genderData: genderDataReducer,
                                typesData: typesDataReducer
                            });

export default rootReducer