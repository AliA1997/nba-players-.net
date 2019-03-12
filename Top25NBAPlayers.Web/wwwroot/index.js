import React from 'react';
import { render } from  'react-dom';
import App from './App';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './redux/store';
import { Provider } from 'react-redux';

render(
<Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
</Provider>, document.getElementById('root'));
