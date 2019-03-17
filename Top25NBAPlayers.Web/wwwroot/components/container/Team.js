import React, { useEffect, useState } from 'react';
import { Container, Header, Image, Card, Table } from 'semantic-ui-react';
import { server } from '../../utils';


const Team = (props) => {
    const { id } = props.match.params;
    const [ currentTeam, setCurrentTeam ] = useState({});

    useEffect(() => {
        async function getTeam(id) {
            try {
                const teamResult = await fetch(`${server}/teams/${id}`, { method: 'GET', mode: 'cors'});
                const jsonTeam = await teamResult.json();
                setCurrentTeam(jsonTeam);
            } catch(error) {
                console.log("Get Team Error-----------" , error);
            }
        }

        getTeam(id);
    }, {})

    return (
        <Container>
            <Header as="h1">{currentTeam.name}</Header>
            <Image src={currentTeam.logo} style={{height: '400px'}}/>
            <Card style={{width: '75%'}}>
                
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.Cell>Greatest Player</Table.Cell>
                            <Table.Cell>Last Championship</Table.Cell>
                            <Table.Cell>Championships</Table.Cell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>{currentTeam.greatestPlayer}</Table.Cell>
                            <Table.Cell>{currentTeam.lastChampionship}</Table.Cell>
                            <Table.Cell>{currentTeam.championships}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            
            </Card>
        </Container>
    );
}

export default Team;