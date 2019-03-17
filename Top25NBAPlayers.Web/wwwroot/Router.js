import React from 'react';
import { UserContext } from './App';
import { Switch, Route, BrowserRouter } from 'react-router';
import AdminRouter from './AdminRouter';
import CreatePlayer from './components/container/CreatePlayer';
import CreateTeam from './components/container/CreateTeam';
import AdminPlayers from './components/container/AdminPlayers';
import AdminTeams from './components/container/AdminTeams';
import Home from './components/container/Home';
import PlayersList from './components/container/PlayersList';
import TeamsList from './components/container/TeamsList';
import Player from './components/container/Player';
import Team from './components/container/Team';
import Admin from './components/container/Admin';

export default (login) => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/players" component={PlayersList} />
        <Route exact path="/teams" component={TeamsList} />
        <Route exact path='/admin' component={props => <UserContext.Consumer>
                                                    {user => {
                                                        return (
                                                        <Admin {...props} user={user}  login={login} />
                                                        );
                                                    }}
                                                </UserContext.Consumer>}/>
        <Route path="/players/:id" component={Player} />
        <Route path="/teams/:id" component={Team} />
    </Switch>
);