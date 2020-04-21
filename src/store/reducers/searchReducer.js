const initialState = {
    searchWord: '',
    books: [],
    error: null,
    isLoading: false,
};

const searchBook = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_BOOKS_START': {
            return {
                ...state,
                isLoading: true,
            };
        }
        case 'SEARCH_BOOKS_SUCCESS': {
            return {
                ...state,
                books: action.payload,
                error: null,
                isLoading: false
            };
        }
        case 'SEARCH_BOOKS_FAILURE': {
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        }
        default: {
            return state;
        }
    }
};

export default searchBook;