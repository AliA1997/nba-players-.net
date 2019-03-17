import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { Container, Header, Image, Card, Table } from 'semantic-ui-react';
import { server } from '../../utils';

const Player = ({match}) => {
    const { id } = match.params;
    const [player, setPlayer] = useState(null);

    useEffect( () => {

        async function getPlayer(playerId) {
            const playerResult = await fetch(`${server}/players/${playerId}`, { method: 'GET', mode: 'cors'});
            const jsonPlayer = await playerResult.json();
            setPlayer(jsonPlayer);
        }

        getPlayer(id);

    }, [null]);

    return (
        <Container>
            <Header as='h1'>
                Name: {player && player.name}
            </Header>
            
            <Header as='h1'>
                Jersey #: {player && player.jerseyNumber}
            </Header>
            
            <Image src={player && player.avatar} />

            <Header as="h2">{player && player.team}</Header>
            <Card.Group>
                <Card style={{width: '80%'}}>
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

                                    <Table.Cell singleLine>{player && player.seasonPoints}</Table.Cell>
                                    
                                    <Table.Cell singleLine>{player && player.seasonRebounds}</Table.Cell>
                                    
                                    <Table.Cell singleLine>{player && player.seasonAssists}</Table.Cell>
                                    
                                    <Table.Cell singleLine>{player && player.seasonFieldGoalPercentage}</Table.Cell>

                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Card.Description>
                </Card>

                <Card style={{width: '80%'}}>
                    <Card.Header as="h2">Awards</Card.Header>
                    <Table>
                        <Table.Header>
                            <Table.Row>

                                <Table.HeaderCell>Allstars</Table.HeaderCell>

                                <Table.HeaderCell>MVPS</Table.HeaderCell>

                                <Table.HeaderCell>Championships</Table.HeaderCell>

                                <Table.HeaderCell>Last Championship</Table.HeaderCell>

                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            
                            <Table.Row>

                                <Table.Cell singleLine>{player && player.allStars}</Table.Cell>
                                
                                <Table.Cell singleLine>{player && player.mvps}</Table.Cell>
                            
                                <Table.Cell singleLine>{player && player.championships}</Table.Cell>
                            
                                <Table.Cell singleLine>{player && player.lastChampionship ?  player.lastChampionship : ""}</Table.Cell>
                            
                            </Table.Row>
                        
                        </Table.Body>
                    </Table>
                </Card>
            </Card.Group>
        </Container>
    );
};

export default withRouter(Player);