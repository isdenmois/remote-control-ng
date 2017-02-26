import React from 'react';
import ReactDOM from 'react-dom';
import RootApp from './RootApp';
import { Provider } from 'react-redux';

const el = document.getElementById('root');
const render = (Component) => {
    ReactDOM.render(<RootApp />, el);
};

render(RootApp);
module.hot.accept('./RootApp', () => {
    render(RootApp)
});
