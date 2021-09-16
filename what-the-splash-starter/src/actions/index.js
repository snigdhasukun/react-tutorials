import { IMAGES, AUTHOR } from '../constants/index';

const loadImages = () => ({
    type: IMAGES.LOAD
});

const setImages = images => ({
    type: IMAGES.LOAD_SUCCESS,
    images
});

const setError = error => ({
    type: IMAGES.LOAD_FAIL,
    error
});

const loadImageAuthor = id => ({
    type: AUTHOR.LOAD,
    id
});

const setImageAuthor = (id, author) => ({
    type: AUTHOR.LOAD_SUCCESS,
    id,
    author
});

const setImageAuthorError = id => ({
    type: AUTHOR.LOAD_FAIL,
    id
});


export {
    loadImages,
    setImages,
    setError,
    loadImageAuthor,
    setImageAuthor,
    setImageAuthorError
}