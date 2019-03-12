import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './components/container/Home';
import PlayersList from './components/container/PlayersList';
import TeamsList from './components/container/TeamsList';
import Player from './components/container/Player';
import Team from './components/container/Team';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/players" component={PlayersList} />
        <Route path="/teams" component={TeamsList} />
        <Route path="/players/:id" component={Player} />
        <Route path="/teams/:id" component={Team} />
    </Switch>
);