import React, { useEffect, useState, useReducer } from 'react';
import initialState from '../../redux/initialState';
import * as TeamActions from '../../redux/teamActions';
import teamReducer from '../../redux/teamReducer';
import { Container, Header, Image, Card } from 'semantic-ui-react';


const Team = (props) => {
    const { id } = this.props.match.params;
    const [ currentTeam ] = useReducer(teamReducer, initialState);

    useEffect(async () => {
        await TeamActions.getTeam(id);
    })

    return (
        <Container>
            <Header as="h1">{currentTeam.name}</Header>
            <Image src={currentTeam.logo} />
            <Card>
                <Card.Content>
                    <Card.Header>Info</Card.Header>
                    <Card.Description>
                        Greatest Player: {currentTeam.greatestPlayer}
                    </Card.Description>
                    <Card.Description>
                        Last Championship: {currentTeam.lastChampionship}
                    </Card.Description>
                    <Card.Description>
                        Championships: {currentTeam.championships}
                    </Card.Description>
                </Card.Content>
            </Card>
        </Container>
    );
}

export default Team;