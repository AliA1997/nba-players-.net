import React from 'react';
import ReactDOM, { render } from  'react-dom';
import App from './App';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './redux/store';
import { Provider } from 'react-redux';

//COnfigure your store using your function that preloades state.
const store = configureStore();

render(
<Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
</Provider>, document.getElementById('root'));

// const root = document.getElementById('root');
// setTimeout(() => ReactDOM.unmountComponentAtNode(root), 10); // Unmount after 1ms

