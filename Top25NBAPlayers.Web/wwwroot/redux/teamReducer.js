import * as utils from '../utils';
import * as ActionTypes from './actionTypes';
import initialState from './initialState';

export default (state=initialState.teams, action) => {
    switch(action.type) {
        case ActionTypes.GET_TEAMS_SUCCESS:
            return utils.deepCopy({
                ...state,
                list: action.teams
            });

        case ActionTypes.GET_TEAM_SUCCESS:
            return utils.deepCopy({
                ...state,
                currentTeam: action.team 
            });
        
        case ActionTypes.CREATE_TEAM_SUCCESS:
            return utils.deepCopy({
                ...state,
                message: action.message
            });

        case ActionTypes.UPDATE_TEAM_SUCCESS:
            return utils.deepCopy({
                ...state,
                message: action.message
            });

        case ActionTypes.DELETE_TEAM_SUCCESS:
            return utils.deepCopy({
                ...state,
                message: action.message
            })
        
        case ActionTypes.GET_TEAMS_ERROR:
            return utils.deepCopy(initialState.teams);
    
        case ActionTypes.GET_TEAM_ERROR:
            return utils.deepCopy({ ...state, currentTeam: {}});
            
        case ActionTypes.CREATE_TEAM_ERROR:
            return utils.deepCopy({ ...state, message: ''});
    
        case ActionTypes.UPDATE_TEAM_ERROR:
            return utils.deepCopy({ ...state, message: ''});

        case ActionTypes.DELETE_TEAM_ERROR:
            return utils.deepCopy({ ...state, message: ''});

        default:
            return state;
    }
}