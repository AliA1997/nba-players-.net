import React, { useState } from 'react';
import { notify } from 'react-notify-toast';
import { withRouter } from 'react-router';
import { Container, Card, CardContent, Form, Image, Button, Header} from 'semantic-ui-react';
import * as utils from '../../utils';

const placeholder = 'https://react.semantic-ui.com/images/wireframe/image.png';

const CreateTeam = (props) => {

    const [ form, handleChange ] = useState({name: '', logo: '', greatestPlayer: '', lastChampionship: '', championships: ''});

    function handleForm(e, type) {
        const copyOfForm = utils.deepCopy(form);
        copyOfForm[type] = e.target.value;
        handleChange(copyOfForm);
    }

    async function submitTeam(e) {
        e.preventDefault();
        const createTeamResult = await fetch(`${utils.server}/teams`, { 
                                                                        method: "POST",
                                                                        headers: { 
                                                                            'Access-Control-Allow-Origin': '*',
                                                                            "Content-Type": "application/json"
                                                                        },
                                                                        body: JSON.stringify(form),
                                                                        mode: 'cors'
                                                                    });

        notify.show('Team Created!');

        props.history.push('/teams');
    }

    return (
        <Container>
            <Header as="h1">Create Team</Header>
            <Card style={{width: '75%'}}>
                <CardContent>
                    <Form onSubmit={async e => await submitTeam(e)}>
                        <Image src={form["logo"] || placeholder}  style={{height: '300px'}}/>

                        <Form.Input fluid label="logo" onChange={e => handleForm(e, 'logo')} value={form['logo']}/>
                        
                        <Form.Input fluid label="Name" onChange={e => handleForm(e, 'name')}  value={form['name']}/>
                        
                        <Form.Input fluid label='Greatest Player' onChange={e => handleForm(e, 'greatestPlayer')} value={form['greatestPlayer']}/>
                        
                        <Form.Input fluid label="Last Championship" onChange={e => handleForm(e, "lastChampionship")} value={form['lastChampionship']}/>
                        
                        <Form.Input fluid label="Championships" onChange={e => handleForm(e, "championships")} value={form['championships']}/>
                        
                        <Button type="submit" color="green">Create Team</Button>
                    </Form>
                </CardContent>
            </Card>
        </Container>
    );
};

export default withRouter(CreateTeam);