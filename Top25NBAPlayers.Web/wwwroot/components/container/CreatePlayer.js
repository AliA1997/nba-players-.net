import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { notify } from 'react-notify-toast';
import { Button, Container, Card, CardContent, Header, Form, Image } from 'semantic-ui-react';
import * as utils from '../../utils';

const placeholder = 'https://react.semantic-ui.com/images/wireframe/image.png';

const CreatePlayer = (props) => {

    const [form, handleChange] = useState({name: '', avatar: '', jerseyNumber: '', team: '', mvps: '', allstars: '',  championships: '', seasonPoints: '', seasonAssists: '', seasonRebounds: '', seasonFieldGoalPercentage: ''});

    function handleForm(e, type) {
        const copyOfForm = utils.deepCopy(form);
        copyOfForm[type] = e.target.value;
        handleChange(copyOfForm);
    }

    async function submitPlayer(e) {
        e.preventDefault();

        const createPlayerResult = await fetch(`${utils.server}/players`, { 
                                                                        method: 'POST',                                                                                                    
                                                                        headers: { 
                                                                            'Access-Control-Allow-Origin': '*',
                                                                            "Content-Type": "application/json"
                                                                        },
                                                                        body: JSON.stringify(form),
                                                                        mode: 'cors'
                                                                    });

        notify.show('Player Created!');

        props.history.push(`/players`);
    }

    return (
        <Container>
            <Header as="h1">Create Player</Header>
            <Form onSubmit={async e => submitPlayer(e)}>
                <Card style={{width: '75%'}}>
                    <CardContent>
                        <Header as="h3">Player Info:</Header>
                        <Image src={form['avatar'] || placeholder} style={{height: '300px'}}/>
                        <Form.Input label="Player Image" fluid onChange={e => handleForm(e, 'avatar')} value={form['avatar']} /> 
                        <Form.Input label="Player Name" fluid onChange={e => handleForm(e, 'name')} value={form['name']} /> 
                        <Form.Group>
                            <Form.Input label="Player Jersey Number" fluid onChange={e => handleForm(e, 'jerseyNumber')} value={form['jerseyNumber']} />
                            <Form.Input label="PlayerTeam" fluid onChange={e => handleForm(e, 'team')} value={form['team']} /> 
                        </Form.Group>
                    </CardContent>
                </Card>
                
                <Card style={{width: '75%'}}>
                    <CardContent>
                        <Header as="h3">Player Awards:</Header>
                        <Form.Input label="Player MVPS" fluid onChange={e => handleForm(e, 'mvps')} value={form['mvps']} /> 
                        <Form.Input label="Player Allstar Appearances" fluid onChange={e => handleForm(e, 'allstars')} value={form['allstars']} /> 
                        <Form.Input label="Player Championships" fluid onChange={e => handleForm(e, 'championships')} value={form['championships']} />
                    </CardContent>
                </Card>
                
                <Card style={{width: '75%'}}>
                    <CardContent>
                        <Header as="h3">Player Statistics:</Header>
                        <Form.Group>
                            <Form.Input label="PPG" fluid onChange={e => handleForm(e, 'seasonPoints')} value={form['seasonPoints']} /> 
                            <Form.Input label="APG" fluid onChange={e => handleForm(e, 'seasonAssists')} value={form['seasonAssists']} />
                            <Form.Input label="RPG" fluid onChange={e => handleForm(e, 'seasonRebounds')} value={form['seasonRebounds']} /> 
                            <Form.Input label="FG%" fluid onChange={e => handleForm(e, 'seasonFieldGoalPercentage')} value={form['seasonFieldGoalPercentage']} /> 
                         </Form.Group>
                    </CardContent>
                </Card>
                <Button type="submit" color="green">Create Player</Button>
            </Form>
        </Container>
    );
};

export default withRouter(CreatePlayer);