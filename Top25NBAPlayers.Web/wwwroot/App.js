import React, { Component } from 'react';
import Notifications from 'react-notify-toast';
import { Container } from 'semantic-ui-react';
import Router from './Router';
import Nav from './components/presentational/Nav';
import './App.css';

export const UserContext = React.createContext(null);


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            user: null
        };

    }

    logout = () => {
        this.setState({user: null});
        localStorage.removeItem('user');
    }

    login = (user) => {
        this.setState({user: user});
    }

    render() {
        return (
            <UserContext.Provider value={this.state.user}>
                <Container>
                    <Nav logout={this.logout}/>
                    <Notifications />
                    {Router(this.login)}
                </Container>
            </UserContext.Provider>            
        );
    }
}