import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';

import store from './store';
import RootContainer from './containers/Root';
import HomeContainer from './containers/Home';

export default class extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <RootContainer>
                        <Route path="/" component={HomeContainer} />
                    </RootContainer>
                </BrowserRouter>
            </Provider>
        );
    }
}
