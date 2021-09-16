import { take, fork, put, call } from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { fetchImageAuthor } from '../api/index';
import { loadImageAuthor, setImageAuthor, setImageAuthorError } from '../actions';

function* handleAuthorRequest(id) {
    for (let i = 0; i < 3; i++) {
        try {
            yield put(loadImageAuthor(id));
            const res = yield call(fetchImageAuthor, id);
            yield put(setImageAuthor(id, res.author));
            return true;
        } catch (error) { }
    }
    yield put(setImageAuthorError(id));
}

export default function* watchAuthorRequest() {
    while (true) {
        const { images } = yield take(IMAGES.LOAD_SUCCESS);
        // images.forEach(image => {
        //     // fork is non blacking call
        //    // yield cannot be used inside foreach loop
        //     yield fork(handleAuthorRequest, image.id);
        // });

        for (let i = 0; i < images.length; i++) {
            yield fork(handleAuthorRequest, images[i].id);
        }
    }
}