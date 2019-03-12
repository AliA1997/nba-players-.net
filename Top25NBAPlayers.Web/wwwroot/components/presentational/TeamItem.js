import React from 'react';
import { push } from 'connected-react-router';
import { Card, Image, Icon } from 'semantic-ui-react';

const TeamItem = ({id, name, logo, greatestPlayer}) => (
    <Card onClick={() => push(`/teams/${id}`)}>
        <Image src={logo} />
        <Card.Content>
            <Card.Header>
                {name}
            </Card.Header>
            <Card.Description>
                <Icon name="user" />
                Greatest Player: {greatestPlayer}
            </Card.Description>
        </Card.Content>
    </Card>
);

export default TeamItem;

