import {
    FETCH_GENDER_MASTERDATA,
    FETCH_GENDER_MASTERDATA_SUCCESS,
    FETCH_GENDER_MASTERDATA_FAILURE
} from '../actionTypes/genderDataActions';
import axios from 'axios';
import { Services } from '../../../constants/constants';

export const fetchGenderMasterData = () => {
    return {
        type: FETCH_GENDER_MASTERDATA
    }
}

export const fetchGenderMasterDataSuccess = (genderData) => {
    return {
        type: FETCH_GENDER_MASTERDATA_SUCCESS,
        payload: genderData
    }
}

export const fetchGenderMasterDataFailure = (error) => {
    return {
        type: FETCH_GENDER_MASTERDATA_FAILURE,
        payload: error
    }
}

export const fetchGenderDataApiCall = () => {
    return (dispatch) => {
        dispatch(fetchGenderMasterData);
        axios
            .get(Services.genderMasterdataAPI)
            .then((response) => {
                let apiPromise = [];
				let genderTypes = [];
                response.data.results.forEach((item) => {
					genderTypes = [...genderTypes, item.name];
					apiPromise = [...apiPromise, axios.get(item.url)];
				});
                console.log(genderTypes);

                Promise.all([...apiPromise])
                        .then((promiseResponse) =>{
                            console.log(promiseResponse[0]?.data);
                            dispatch(fetchGenderMasterDataSuccess([
                                promiseResponse[0]?.data,
                                promiseResponse[1]?.data,
                                promiseResponse[2]?.data
                            ]))
                        })
                        .catch((error) => {
                            dispatch(fetchGenderMasterDataFailure(error.message))
                        })

            })
            .catch((error) => {
                dispatch(fetchGenderMasterDataFailure(error.message))
            })
    }
}


