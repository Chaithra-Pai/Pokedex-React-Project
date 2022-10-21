import {
    FETCH_TYPES_DATA,
    FETCH_TYPES_DATA_SUCCESS,
    FETCH_TYPES_DATA_FAILURE
} from '../actionContainer/actionTypes/typesDataActions';
import { LoadingIndicators } from '../../constants/constants';

const initialState = {
    typesLoading : LoadingIndicators.LOADING,
    typesData: {},
    typesDataError: '',
    damageData: {}
}

export const typesDataReducer = ( state=initialState, action ) => {
    switch(action.type){
        case FETCH_TYPES_DATA:
            return {
                ...state,
                typesLoading: LoadingIndicators.LOADING
            }
        case FETCH_TYPES_DATA_SUCCESS:
            return {
                ...state,
                typesLoading: LoadingIndicators.SUCCESS,
                typesData: formatTypesData(action.payload),
                damageData: formatDamages(action.payload),
            }
        case FETCH_TYPES_DATA_FAILURE:
            return {
                ...state,
                typesLoading: LoadingIndicators.FAILURE,
                typesDataError: action.payload,
                typesData: {}
            }
        default:
            return state;
    }
}

export const formatTypesData = (data) => {
    let formattedType = data?.reduce((finalData, currItem)=>{
        let types = { [currItem.name]: currItem?.pokemon?.map(
            (pokemonObj) => pokemonObj?.pokemon?.name
        )}
        let value = { ...finalData, ...types}
        return value
    },[])
    return formattedType;
}

export const formatDamages = (data) => {
	let damages = data?.reduce((finalData, currItem) => {
		let damages = {
			[currItem.name]: [...currItem?.damage_relations['double_damage_from']?.map((doubleDamage) => doubleDamage.name)],
		};
		let value = { ...finalData, ...damages };
		return value;
	}, {});
	return damages;
};
