import {
	INITIAL_FILTER,
    RESET_FILTER,
	UPDATE_FILTER,
} from '../actionContainer/actionTypes/filterActions';

const initialState = {
	completeList: { Type: [], Gender: [], Stat: [] },
    filterList: { Type: [], Gender: [], Stat: [] }
};

export const filterReducer = (state = initialState, action) => {
    switch(action.type){
        case INITIAL_FILTER:
            return {
                ...state,
                completeList: formatFilterList(state.completeList, action.payload[0], action.payload[1]),
                filterList: formatFilterList(state.completeList, action.payload[0], action.payload[1])
            }
        case UPDATE_FILTER:
            return {
                ...state,
                filterList: { ...action.payload }
            }
        case RESET_FILTER:
            return {
                ...state,
                filterList: { ...state.completeList }
            }
        default:
            return state;
    }
}

export const formatFilterList = (data, type, list) => {
	data[type] = list;
	return data;
};