import {
    FETCH_TYPES_DATA,
    FETCH_TYPES_DATA_SUCCESS,
    FETCH_TYPES_DATA_FAILURE
} from '../actionTypes/typesDataActions';
import axios from 'axios';
import { Services } from '../../../constants/constants';

export const fetchTypesData = () => {
    return {
        type: FETCH_TYPES_DATA
    }
}

export const fetchTypesDataSuccess = (typesData) => {
    return {
        type: FETCH_TYPES_DATA_SUCCESS,
        payload: typesData
    }
}

export const fetchTypesDataFailure = (error) => {
    return {
        type: FETCH_TYPES_DATA_FAILURE,
        payload: error
    }
}

export const fetchTypesDataApiCall = () => {
	return (dispatch) => {
		dispatch(fetchTypesData);

		axios
			.get(Services.typesMasterDataAPI)
			.then((response) => {
                let apiPromise = [];
				let typesData = [];
				// console.log(response);
                response.data.results.forEach(item => {
                    typesData = [...typesData, item.name]
                    apiPromise = [...apiPromise,axios.get(item.url)]
                });
                Promise.all([...apiPromise])
                    .then((promiseResponse) => {
                        let data = promiseResponse.map((item) => item.data);
                        dispatch(fetchTypesDataSuccess([...data]));
                    })
                    .catch((error) => {
                        dispatch(fetchTypesDataFailure(error))
                    })
			})
			.catch((error) => {
				dispatch(fetchTypesDataFailure(error.message));
			});
	};
};
