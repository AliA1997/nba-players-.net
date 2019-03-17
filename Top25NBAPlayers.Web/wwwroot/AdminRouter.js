import React from 'react';
import CreatePlayer from './components/container/CreatePlayer';
import CreateTeam from './components/container/CreateTeam';
import AdminPlayers from './components/container/AdminPlayers';
import AdminTeams from './components/container/AdminTeams';
import DeleteHistory from './components/container/DeleteHistory';


export default (currentItem) => {
    if(currentItem === 'create_player')
        return <CreatePlayer />
    else if(currentItem === 'create_team')
        return <CreateTeam />
    else if(currentItem === 'admin_players')
        return <AdminPlayers />
    else if(currentItem === 'admin_teams')
        return <AdminTeams />
    else
        return <DeleteHistory />
}
