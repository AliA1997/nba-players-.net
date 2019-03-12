import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Router from './Router';
import Nav from './components/presentational/Nav';

export default class App extends Component {
    render() {
        return (
            <Container>
                <Nav />
                {Router}
            </Container>
        );
    }
}