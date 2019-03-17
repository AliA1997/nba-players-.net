import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import TeamItem from '../presentational/TeamItem';
import { Card, Container, Header, Pagination } from 'semantic-ui-react';
import { server } from '../../utils';


const TeamsList = (props) => {
    //When using the useState hooks, define the state property, and state setter, and define your initialState.
    const [teams, setTeams] = useState([]);

    //React hooks must run in the same order, and also to prevent a infinite loop, pass an array as a second argument, if it is different than the second argument rerun the effect.
    //In this case only when has an empty array, which happens when it's first initialize run the effect.
    useEffect(() => {
        async function getTeams() {
            try {
                const teamResult = await fetch(`${server}/teams`, { method: 'GET', mode: 'cors' }); 
                const jsonTeams = await teamResult.json();
                setTeams(jsonTeams);
            } catch(error) {
                console.log('Get Teams Error------------', error);
            }
        }
        getTeams();
    }, []);

    const { history } = props;
    
    return (
        <Container>
            <Header as="h1">NBA Teams</Header>
            <Card.Group>
                {
                    teams.length ? 
                    teams.map(team => <TeamItem key={team.id} {...team} history={history}/>)
                    : "No teams to found"
                }
            </Card.Group>
        </Container>
    );
}

export default withRouter(TeamsList);