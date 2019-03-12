import React, { useEffect, useReducer } from 'react';
import initialState from '../../redux/initialState';
import * as PlayerActions from '../../redux/playerActions';
import playerReducer from '../../redux/playerReducer';
import { Container, Header, Pagination } from 'semantic-ui-react';
import PlayerItem from '../presentational/PlayerItem';


const PlayersList = (props) => {
    const [list] = useReducer(playerReducer, initialState);

    useEffect(async() => {
        await PlayerActions.getPlayers();
    })

    return (
        <Container>
            <Header>Top 25 Most Popular NBA Players</Header>
            {
                list.length ?
                list.map(player => <PlayerItem{...player} />)
                : "No Players to display!"
            }
        </Container>
    );
}

export default PlayersList;