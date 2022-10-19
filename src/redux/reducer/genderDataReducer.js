import {
    FETCH_GENDER_MASTERDATA,
    FETCH_GENDER_MASTERDATA_SUCCESS,
    FETCH_GENDER_MASTERDATA_FAILURE
} from '../actionContainer/actionTypes/genderDataActions';
import { LoadingIndicators } from '../../constants/constants';

const initialState= {
    loading: LoadingIndicators.LOADING,
    genderData: {},
    genderDataError: ''
}
console.log();
export const genderDataReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_GENDER_MASTERDATA:
            return {
                ...state,
                loading: LoadingIndicators.LOADING
            }
        case FETCH_GENDER_MASTERDATA_SUCCESS:
            return {
                ...state,
                loading: LoadingIndicators.SUCCESS,
                genderData: formatGenderData(action.payload)
            }
        case FETCH_GENDER_MASTERDATA_FAILURE:
            return {
                ...state,
                loading: LoadingIndicators.FAILURE,
                genderData: {},
                genderDataError: action.payload
            }
        default: return state;
    }
}

export const formatGenderData = (data) => {
	let formattedTypes = data?.reduce((finalResult, currentItem) => {
		let currentObject = {
			[currentItem.name]: currentItem?.pokemon_species_details?.map(
				(pokemonObject) => pokemonObject?.pokemon_species?.name,
			),
		};
		let arrayValue = { ...finalResult, ...currentObject };
		return arrayValue;
	}, {});
	return formattedTypes;
};