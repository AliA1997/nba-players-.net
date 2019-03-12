import React from 'react';
import { push } from 'connected-react-router';
import { Card, Image, Icon } from 'semantic-ui-react';

const PlayerItem = ({id, name, avatar, jerseyNumber, team}) => (
    <Card onClick={() => push(`/players/${id}`)}>
        <Card.Header>
            {name}
        </Card.Header>
        <Image src={avatar} />
        <Card.Content>
            <Card.Meta>
                Jersey #: {jerseyNumber} 
            </Card.Meta>
            <Card.Meta>
                <Icon name="organization" />
                Team: {team}
            </Card.Meta>
        </Card.Content>
    </Card>
);

export default PlayerItem;