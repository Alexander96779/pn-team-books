import {
    SEARCH_BOOKS_START,
    SEARCH_BOOKS_SUCCESS,
    SEARCH_BOOKS_FAILURE
} from '../constants';
import API from '../../helpers/API';

export const apiStart = () => ({
    type: SEARCH_BOOKS_START,
});

export const apiSuccess = (payload) => ({
    type: SEARCH_BOOKS_SUCCESS,
    payload,
});

export const apiFailure = (error) => ({
    type: SEARCH_BOOKS_FAILURE,
    error,
});

const search = (data) => async (dispatch) => {
    dispatch(apiStart());
    try {
        const response = await API.get(`https://www.googleapis.com/books/v1/volumes?q=${data}`);
        return dispatch(apiSuccess(response.data));
    } catch (error) {
        console.log(error.response);
        return dispatch(apiFailure(error.response.data));
    }
};

export default search;