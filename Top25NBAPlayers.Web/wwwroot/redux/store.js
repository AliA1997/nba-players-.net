import { createBrowserHistory } from 'history';
import { createStore, compose,  applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducerFunc from './reducer'; 

export const history = createBrowserHistory();

const middlewares = [thunk, routerMiddleware(history)];


export const reducer = rootReducerFunc(history);

export default function configureStore(preloadedState) {
    const store = createStore(
        reducer,
        preloadedState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    //For hot reloading in wbepack have your reducer replaced with a new instance of history.
    if(module.hot) {
        module.hot.accept('./reducer',() =>  store.replaceReducer(rootReducerFunc(history)))
    }

    return store;
}