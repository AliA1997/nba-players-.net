import React, { useEffect, useReducer } from 'react';
import initialState from '../../redux/initialState';
import * as TeamActions from '../../redux/teamActions';
import teamReducer from '../../redux/teamReducer';
import TeamItem from '../presentational/TeamItem';
import { Container, Header, Pagination } from 'semantic-ui-react';


const TeamsList = (props) => {
    const [list] = useReducer(teamReducer, initialState);
    
    useEffect(async () => {
        await TeamActions.getTeams();
    });

    return (
        <Container>
            <Header>NBA Teams</Header>
            {
                list.length ? 
                list.map(team => <TeamItem {...team} />)
                : "No teams to found"
            }
        </Container>
    );
}

export default TeamsList;