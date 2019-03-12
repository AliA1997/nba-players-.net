import initialState from './initialState';
import * as ActionTypes from './actionTypes';
import { server } from '../utils';

export async function getPlayers() {
    return async dispatch => {
        try {
            const players = await fetch(`${server}/players`, { method: 'GET' });
            console.log('players---------', players);
            dispatch({type: ActionTypes.GET_PLAYERS_SUCCESS, players: players});
        } catch(error) {
            dispatch({type: ActionTypes.GET_PLAYERS_ERROR});
        }
    }
}

export async function getPlayer(id) {
    return async dispatch => {
        try {
            const player = await fetch(`${server}/players/${id}`, { method: 'GET' });
            console.log('player--------', player);
            dispatch({type: ActionTypes.GET_PLAYER_SUCCESS, player: player});
        } catch(error) {
            dispatch({type: ActionTypes.GET_PLAYER_ERROR})
        }
    }
}

export async function createPlayer(newPlayer) {
    return async dispatch => {
        try {
            const message = await fetch(`${server}/players`, { method: 'POST', body: JSON.stringify(newPlayer) });
            console.log('message---------', message);
            dispatch({type: ActionTypes.CREATE_PLAYER_SUCCESS, message: message});
        } catch(error) {
            dispatch({type: ActionTypes.CREATE_PLAYER_ERROR});

        }
    }
}

export async function updatePlayer(updatedPlayer) {
    return async dispatch => {
        try {
            const message = await fetch(`${server}/players/${updatePlayer.id}`, { method: 'PATCH', body: JSON.stringify(updatedPlayer) });
            console.log("message------------", message);
            dispatch({type: ActionTypes.UPDATE_PLAYER_SUCCESS, message: message});
        } catch(error) {
            dispatch({type: ActionTypes.UPDATE_PLAYER_ERapiROR});
        }
    }
}

export async function deletePlayer(id) {
    return async dispatch => {
        try {
            const message = await fetch(`${server}/players/${id}`, { method: 'DELETE' })       
            console.log('message-----------', message);
            dispatch({type: ActionTypes.DELETE_PLAYER_SUCCESS, message: message});
        } catch(error) {
            dispatch({type: ActionTypes.DELETE_PLAYER_ERROR});
        }
    }
}