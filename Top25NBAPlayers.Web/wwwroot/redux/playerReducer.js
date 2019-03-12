import * as utils from '../utils';
import * as ActionTypes from './actionTypes';
import initialState from './initialState';

export default (state=initialState.players, action) => {
    switch(action.type) {
        case ActionTypes.GET_PLAYERS_SUCCESS:
            return utils.deepCopy({
                ...state,
                list: action.players
            });

        case ActionTypes.GET_PLAYER_SUCCESS:
            return utils.deepCopy({
                ...state,
                currentPlayer: action.player 
            });
        
        case ActionTypes.CREATE_PLAYER_SUCCESS:
            return utils.deepCopy({
                ...state,
                message: action.message
            });

        case ActionTypes.UPDATE_PLAYER_SUCCESS:
            return utils.deepCopy({
                ...state,
                message: action.message
            });

        case ActionTypes.DELETE_PLAYER_SUCCESS:
            return utils.deepCopy({
                ...state,
                message: action.message
            })

            
        case ActionTypes.GET_PLAYERS_ERROR:
            return utils.deepCopy({ ...state, list: []});
        
        case ActionTypes.GET_PLAYER_ERROR:
            return utils.deepCopy({ ...state, currentPlayer: {}});
            
        case ActionTypes.CREATE_PLAYER_ERROR:
            return utils.deepCopy({ ...state, message: ''});
    
        case ActionTypes.UPDATE_PLAYER_ERROR:
            return utils.deepCopy({ ...state, message: ''});

        case ActionTypes.DELETE_PLAYER_ERROR:
            return utils.deepCopy({ ...state, message: ''});
    
        default:
            return state;
    }
}