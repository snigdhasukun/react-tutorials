import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/index';
import rootSaga from '../sagas/index';
import DevTools from '../containers/DevTools';

function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            DevTools.instrument()
        )
        
    );
    sagaMiddleware.run(rootSaga);

    // store.dispatch({ type: 'LOGOUT' });
    // store.dispatch({ type: 'LOGIN' });
    // store.dispatch({ type: 'LOGOUT' });
    // store.dispatch({ type: 'DANG' });
    return store;
}

export default configureStore;