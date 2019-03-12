import React, { useEffect, useReducer } from 'react';
import * as PlayerActions from '../../redux/playerActions';
import playerReducer from '../../redux/playerReducer';
import initialState from '../../redux/initialState';
import { Container, Header, Image, Card, Table } from 'semantic-ui-react';

const Player = (props) => {
    const { id } = this.props.match.params;
    const [currentPlayer] = useReducer(playerReducer, initialState)
    useEffect(async () => {
        await PlayerActions.getPlayer(id);
    });
    return (
        <Container>
            <Header as='h1'>
                Name: {currentPlayer.name}
                Jersey #: {currentPlayer.jerseyNumber}
            </Header>
            <Image src={avatar} />

            <Header as="h2">{currentPlayer.team}</Header>
            
            <Card>
                <Card.Header as="h2">
                    Season Stats
                </Card.Header>
                <Card.Description>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                
                                <Table.HeaderCell>PPG</Table.HeaderCell>
                                
                                <Table.HeaderCell>RPG</Table.HeaderCell>
                                
                                <Table.HeaderCell>APG</Table.HeaderCell>
                                
                                <Table.HeaderCell>FG%</Table.HeaderCell>

                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>

                                <Table.Cell singleLine>{currentPlayer.seasonPoints}</Table.Cell>
                                
                                <Table.Cell singleLine>{currentPlayer.seasonRebounds}</Table.Cell>
                                
                                <Table.Cell singleLine>{currentPlayer.seasonAssists}</Table.Cell>
                                
                                <Table.Cell singleLine>{currentPlayer.seasonFieldGoalPercentage}</Table.Cell>

                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Card.Description>
            </Card>

            <Card>
                <Card.Header as="h2">Awards</Card.Header>
                <Card.Header as="h3">All Stars: {currentPlayer.allStars}</Card.Header>
                <Card.Header as="h3">MVPS: {currentPlayer.mvps}</Card.Header>
                <Card.Header as="h3">Championships: {currentPlayer.championships}</Card.Header>
                <Card.Header as="h3">Last Championship: {currentPlayer.lastChampionship ?  currentPlayer.lastChampionship : null}</Card.Header>
            </Card>
        </Container>
    );
};

export default Player;