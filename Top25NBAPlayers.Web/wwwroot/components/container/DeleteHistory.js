import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { Button, Container, Card, Header } from 'semantic-ui-react';
import AdminList from '../presentational/AdminList';
import * as utils from '../../utils';

const DeleteHistory = (props) => {
    
    const [players, setPlayers] = useState([]);

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        
        async function getDeletedPlayers(){
            const deletedPlayerResult = await fetch(`${utils.server}/players/deleted`, { method: 'GET', mode: 'cors' });
            const jsonDeletedPlayers = await deletedPlayerResult.json();
            setPlayers(jsonDeletedPlayers);
        }

        async function getDeletedTeams(){
            const deletedTeamResult = await fetch(`${utils.server}/teams/deleted`, { method: 'GET', mode: 'cors' });
            const jsonDeletedTeams = await deletedTeamResult.json();
            setTeams(jsonDeletedTeams);
        }

        getDeletedPlayers();
        getDeletedTeams();

    }, [])
    
    return (
        <Container>
            <Header as="h2">Delete History</Header>
            <AdminList listToRender={players} type="players" permDelete={true}/>
            <AdminList listToRender={teams} type="teams" permDelete={true}/>
        </Container>
    );
};

export default DeleteHistory;