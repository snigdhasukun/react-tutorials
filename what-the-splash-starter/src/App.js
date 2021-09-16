import React, { Component, Fragment } from 'react';

import { Provider } from 'react-redux';

import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import configureStore from './store/index';
import DevTools from './containers/DevTools';
import showDevTools from './showDevTools';

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <DevTools />
                    <Header />
                    <ImageGrid />
                </Fragment>
            </Provider>
        );
    }
}


// showDevTools(store);

export default App;
