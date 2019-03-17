import React, { useState } from 'react';
import { AdminContext } from '../container/Admin';
import { withRouter } from 'react-router';
import { Menu } from 'semantic-ui-react';

const AdminSubnav = (props) => {
    // const [activeItem, setActiveItem ] = useState('');

    // function menuOnClick(e, link) {
    //     e.preventDefault();
    //     setActiveItem(link);
    //     props.history.push(`/admin/${link}`);

    // }

    return (
        <AdminContext.Consumer>
            {activeItem => {
                return (

                <Menu>
                    <Menu.Item
                        name="admin_players"
                        active={activeItem === 'admin_players'}
                        color='green'
                        onClick={e => props.setActiveItem('admin_players')}
                    >
                        All Players
                    </Menu.Item>
                    
                    <Menu.Item
                        name="admin_teams"
                        active={activeItem === 'admin_teams'}
                        color='green'
                        onClick={e => props.setActiveItem('admin_teams')}
                    >
                        All Teams
                    </Menu.Item>

                    <Menu.Item
                        name="create_player"
                        active={activeItem === 'create_player'}
                        color='green'
                        onClick={e => props.setActiveItem('create_player')}
                    >
                        Create Player
                    </Menu.Item>
                    
                    <Menu.Item
                        name="create_team"
                        active={activeItem === 'create_team'}
                        color='green'
                        onClick={e => props.setActiveItem('create_team')}
                    >
                        Create Team
                    </Menu.Item>
                    
                    <Menu.Item
                        name="delete_history"
                        active={activeItem === 'delete_history'}
                        color='green'
                        onClick={e => props.setActiveItem('delete_history')}
                    >
                        Delete History
                    </Menu.Item>

                </Menu>
                );
            }}
        </AdminContext.Consumer>
    );
};

export default withRouter(AdminSubnav);