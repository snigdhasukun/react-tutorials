import { AUTHOR } from '../constants/index';

function authorReducer(state = {}, action) {
    switch (action.type) {
        case AUTHOR.LOAD:
            return {
                ...state,
                [action.id]: {
                    isLoading: true,
                    author: null,
                    error: false
                }
            }
        case AUTHOR.LOAD_SUCCESS:
            return {
                ...state,
                [action.id]: {
                    isLoading: false,
                    author: action.author,
                    error: false
                }
            }
        case AUTHOR.LOAD_FAIL:
            return {
                ...state,
                [action.id]: {
                    isLoading: false,
                    author: null,
                    error: true
                }
            }
        default:
            return state;
    }
}

export default authorReducer;