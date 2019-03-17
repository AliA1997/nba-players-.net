import React, { useEffect, useState, useContext } from 'react';
// import  from 'use-react-router';
import { withRouter } from 'react-router';
import { Card, Container, Header, Pagination } from 'semantic-ui-react';
import PlayerItem from '../presentational/PlayerItem';
import { server } from '../../utils';


const PlayersList = (props) => {
    const { history } = props;

    const [ players, setPlayers ] = useState([]);
    
    //React hooks must run in order, and in the case of the useEffect will run everytime the component renders. It is very easy to cause a infinite loop, if you setState in your
    //useEffect hook, it will rerender everytime therefore running the hook everytime so use a second argumnet to prevent the infinite loop.
    //So the second argument is pretty much saying if it is this value run the Effect hook, so only when the component is first initialize or when it's state is an empty array run teh useEffect hook.
    useEffect(() => {
        async function getPlayers() {
            const playerResult = await fetch(`${server}/players`, { method: 'GET', mode: 'cors' });
            const jsonPlayers = await playerResult.json();
            setPlayers(jsonPlayers);
        }        
        getPlayers();
    }, [])
    
    return (
        <Container id="players-container">
            <Header as="h1">Top 25 Most Popular NBA Players</Header>
            <Card.Group>
                {
                    players.length ?
                    players.map(player => <PlayerItem history={history} key={player.id} {...player} />)
                    : "No Players to display!"
                }
            </Card.Group>
        </Container>
    );
}

export default withRouter(PlayersList);