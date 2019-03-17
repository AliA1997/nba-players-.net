import React, { useState } from 'react';
import { notify } from 'react-notify-toast';
import { withRouter } from 'react-router';
import { Container, Form, Button, Card, CardContent, Image, Message }  from 'semantic-ui-react';
import AdminSubnav from '../presentational/AdminSubnav';
import AdminRouter from '../../AdminRouter';
import * as utils from '../../utils';

//Define your AdminContext to be used as the global for your subnavItems, and to indicate what items to show.
export const AdminContext = React.createContext('admin_players');


const Admin = (props) => {

    const [form, handleChange] = useState({displayName: '', password: ''});

    const [loginFailed, setLoginFailed] = useState(false);

    const [activeItem, setActiveItem] = useState('admin_players');

    //Non asynchronous functions
    function handleInputChange(e, key) {
        const copyForm = utils.deepCopy(form);
        copyForm[key] = e.target.value;
        handleChange(copyForm);
    }
    
    function resetInputs() {
        handleChange({displayName: '', password: ''});
    }
    /////

    //Functions that are triggered that are asychronous
    async function loginUser() {
        
        const userResult = await fetch(`${utils.server}/account/login`, {
                                                                            method: 'POST',
                                                                            headers: { 
                                                                                'Access-Control-Allow-Origin': '*',
                                                                                "Content-Type": "application/json"
                                                                            },
                                                                            body: JSON.stringify(form),
                                                                            mode: 'cors'
                                                                        });

        resetInputs();
        
        if(userResult.status === 404) {

            notify.show("Error username or password not found!", 'error');
            
            setLoginFailed(true);
        
        } else {
            const jsonUser = await userResult.json();

            localStorage.setItem('user', JSON.stringify(jsonUser) )
                        
            notify.show("Login successfully!", "success");
            
            setLoginFailed(false);
            
            props.login(jsonUser);
            
            return;
        }
            
            
    
    }
    


    return (
        <Container>
            {   
            props.user ? 
                <Card style={{width: '75%'}}>
                    <Card.Header as="h1">Admin</Card.Header>
                    <Image src={props.user.avatar} style={{width: '15%', height: '100%'}}/>
                    <CardContent>
                        <AdminContext.Provider value={activeItem}>
                            <AdminSubnav setActiveItem={setActiveItem}/>
                            {AdminRouter(activeItem)}
                        </AdminContext.Provider>
                    </CardContent>
                </Card>
            :
            <Card style={{'width': '50%', 'marginRight': 'auto', 'marginLeft': 'auto', 'marginTop': '20%'}}>
                <CardContent>
                    <Message error style={{display: loginFailed ? 'block' : 'none'}}>
                        <Message.Header>Incorrect username or password!</Message.Header>
                        <p>Please try again</p>
                    </Message>
                    <Form onSubmit={async () => await loginUser()}>
                        <Form.Input fluid label='Display Name' placeholder="Display Name." value={form.displayName} onChange={e => handleInputChange(e, 'displayName')} />
                        <Form.Input fluid label='Password' placeholder="Password." value={form.password} onChange={e => handleInputChange(e, 'password')} />
                        <Button color="green" type="submit">Login</Button>
                    </Form>

                </CardContent>
            </Card>
            }
        </Container>
    );
};

export default withRouter(Admin);