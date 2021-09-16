import { IMAGES } from '../constants/index';

function imagesReducer(state = [], action) {
    if (action.type === IMAGES.LOAD_SUCCESS) {
        return [...state, ...action.images];
    }
    return state;
}

export default imagesReducer;