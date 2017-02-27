import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';

import store from './store';
import RootContainer from './containers/Root';
import HomeContainer from './containers/Home';
import FilmsContainer from './containers/Films';
import SerialsContainer from './containers/Serials';
import FilmContainer from './containers/Film';
import SerialContainer from './containers/Serial';
import RemoteContainer from './containers/Remote';

socket.on("serials", (serials) => {
    store.dispatch({
        type: 'serials',
        serials,
    });
});

socket.on("films", (films) => {
    store.dispatch({
        type: 'films',
        films,
    });
});

socket.emit('films', '');
socket.emit('serials', '');

export default class extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <RootContainer>
                        <Route exact path="/" component={HomeContainer} />
                        <Route exact path="/films" component={FilmsContainer} />
                        <Route exact path="/serials" component={SerialsContainer} />
                        <Route path="/films/:id" component={FilmContainer} />
                        <Route path="/serials/:id" component={SerialContainer} />
                        <Route path="/remote" component={RemoteContainer} />
                    </RootContainer>
                </BrowserRouter>
            </Provider>
        );
    }
}
