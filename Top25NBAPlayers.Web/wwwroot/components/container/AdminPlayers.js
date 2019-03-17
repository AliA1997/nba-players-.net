import React, { useState, useEffect } from 'react';
import AdminList from '../presentational/AdminList';
import * as utils from '../../utils';

const AdminPlayers = (props) => {
    const [ players, setPlayers ] = useState([]);

    //Get PLayers and Teams
    //ComponentDidMount
    useEffect(() => {
        
        async function getPlayers() {
            const playersResult = await fetch(`${utils.server}/players`, { method: 'GET', mode: 'cors' });
            const jsonPlayers = await playersResult.json();
            setPlayers(jsonPlayers);
        }


        getPlayers();

    }, []);

    return (
        <AdminList listToRender={players} type="players" />  
    );
};

export default AdminPlayers;