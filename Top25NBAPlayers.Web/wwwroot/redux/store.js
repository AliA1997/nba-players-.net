import { createBrowserHistory } from 'history';
import { createStore, compose,  applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import initialState from './initialState';
import rootReducerFunc from './reducer'; 

export const history = createBrowserHistory();

const middlewares = [thunk, routerMiddleware(history)];

export default createStore(
    rootReducerFunc(history),
    initialState,
    compose(
        applyMiddleware(...middlewares)
    )
)