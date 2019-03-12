import playerReducer from './playerReducer';
import teamReducer from './teamReducer';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';



export default (history) => combineReducers({
    player: playerReducer,
    team: teamReducer,
    router: connectRouter(history)
});