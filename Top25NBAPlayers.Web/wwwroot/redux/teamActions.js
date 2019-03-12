import initialState from './initialState';
import * as ActionTypes from './actionTypes';
import { server } from '../utils';

export async function getTeams() {
    return async dispatch => {
        try {
            const teams = await fetch(`${server}/teams`, { method: 'GET' });
            console.log('players---------', teams);
            dispatch({type: ActionTypes.GET_TEAMS_SUCCESS, teams: teams});
        } catch(error) {
            dispatch({type: ActionTypes.GET_TEAMS_ERROR});
        }
    }
}

export async function getTeam(id) {
    return async dispatch => {
        try {
            const team = await fetch(`${server}/teams/${id}`, { method: 'GET' });
            console.log('team--------', team);
            dispatch({type: ActionTypes.GET_TEAM_SUCCESS, team: team});
        } catch(error) {
            dispatch({type: ActionTypes.GET_TEAM_ERROR})
        }
    }
}

export async function createTeam(newTeam) {
    return async dispatch => {
        try {
            const message = await fetch(`${server}/teams`, { method: 'POST', body: JSON.stringify(newTeam) });
            console.log('message---------', message);
            dispatch({type: ActionTypes.CREATE_TEAM_SUCCESS, message: message});
        } catch(error) {
            dispatch({type: ActionTypes.CREATE_TEAM_ERROR});

        }
    }
}

export async function updateTeam(updatedTeam) {
    return async dispatch => {
        try {
            const message = await fetch(`${server}/teams/${updatedTeam.id}`, { method: 'PATCH', body: JSON.stringify(updatedTeam) });
            console.log("message------------", message);
            dispatch({type: ActionTypes.UPDATE_TEAM_SUCCESS, message: message});
        } catch(error) {
            dispatch({type: ActionTypes.UPDATE_TEAM_ERROR});
        }
    }
}

export async function deleteTeam(id) {
    return async dispatch => {
        try {
            const message = await fetch(`${server}/teams/${id}`, { method: 'DELETE' })       
            console.log('message-----------', message);
            dispatch({type: ActionTypes.DELETE_TEAM_SUCCESS, message: message});
        } catch(error) {
            dispatch({type: ActionTypes.DELETE_TEAM_ERROR});
        }
    }
}