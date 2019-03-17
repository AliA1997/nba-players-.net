import React from 'react';
import { withRouter } from 'react-router';
import { Container, List, Header, Card } from 'semantic-ui-react';
import PlayerItem from './PlayerItem';
import TeamItem from './TeamItem';

const AdminList = ({history, listToRender, type, permDelete}) => {
    return (
        <Card style={{width: '100%'}}>
            <Header as="h2">{type[0].toUpperCase() + type.slice(1)}</Header>
                    {
                        type === 'players' ?
                            <Card.Group style={{width: '100%'}}>    
                                {
                                    listToRender.length ?
                                        listToRender.map(player => <PlayerItem key={player.id} {...player} history={history} admin={true} permDelete={permDelete}/>)
                                        : "No Players to display"    
                                }
                            </Card.Group>
                            :
                            <Card.Group style={{width: '100%'}}>
                                {
                                    listToRender.length ?
                                        listToRender.map(team => <TeamItem key={team.id} {...team} history={history} admin={true} permDelete={permDelete}/>)
                                        : "No Teams to display"
                                }
                            </Card.Group> 
                    }
        </Card>
    );
};

export default withRouter(AdminList);