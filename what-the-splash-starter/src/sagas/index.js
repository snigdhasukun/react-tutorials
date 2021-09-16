// import { take, put, call, takeEvery } from 'redux-saga/effects';
import { all } from 'redux-saga/effects'
import imagesSaga from './imagesSaga';
import authorSaga from './authorSaga';
// import { IMAGES } from '../constants/index';

// worker saga
// function* handleImagesLoad() {
//     // console.log('Hey from worker');
//     // console.log(put({ type: 'ACTION_FROM_WORKER' }));
//     // yield put({ type: 'ACTION_FROM_WORKER' });

//     console.log('Fetching images from Picsum');


// }

// function* byeByeSaga() {
//     console.log('Bye Bye');
// }

// function* handleDang() {
//     console.log("DANG!!");
// }

// watcher saga
function* rootSaga() {
    // BLOCKING
    // yield take('LOGIN');
    // yield call(workerSaga);
    // yield take('ADD_TO_CART');
    // yield take('BUY');
    // yield take('LOGOUT');
    // yield call(byeByeSaga);

    // NON BLOCKING
    // yield takeEvery(IMAGES.LOAD, handleImagesLoad);
    // yield takeEvery('DANG', handleDang);

    yield all([
        imagesSaga(),
        authorSaga()
    ]);

}

// watcher saga => actions => worker saga

export default rootSaga;
// export default imagesSaga;