import React, {useEffect, useState} from 'react';
import AdminList from '../presentational/AdminList';
import * as utils from '../../utils';

const AdminTeams = (props) => {
    const [ teams, setTeams ] = useState([]);
    //Get PLayers and Teams
    //ComponentDidMount
    useEffect(() => {

        async function getTeams() {
            const teamsResult = await fetch(`${utils.server}/teams`, { method: 'GET', mode: 'cors' });
            const jsonTeams = await teamsResult.json();
            setTeams(jsonTeams);
        }

        getTeams();

    }, []);


    return (
        <AdminList listToRender={teams} type="teams" />
    );
};

export default AdminTeams;