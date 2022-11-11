import {
	INITIAL_FILTER,
    UPDATE_FILTER,
    RESET_FILTER	
} from '../actionTypes/filterActions';

export const initialFilter = ( filterType, filterList) => {
    return {
        type: INITIAL_FILTER,
        payload: [ filterType, filterList ]
    }
}

export const updateFilter = (filterList) => {
    return {
        type: UPDATE_FILTER,
        payload: filterList
    }
}

export const resetFilter = () => {
    return {
        type: RESET_FILTER,
    }
}

