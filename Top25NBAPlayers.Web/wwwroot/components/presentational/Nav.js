import React, {useState} from 'react';
import { push } from 'connected-react-router';
import { Menu, Icon } from 'semantic-ui-react';


const Navbar = (props) => {
    const [ activeItem, setActiveItem ] = useState("");

    function menuOnClick(e, link) {
        e.preventDefault();
        setActiveItem(link);
        alert(link);
        push(`/${link}`)
    }

    return (
        <Menu stackable>
            <Menu.Item
                name="players"
                active={activeItem === 'players'}
                onClick={e => menuOnClick(e, 'players')}
            >
                <Icon name="user circle outline" />
                Players
            </Menu.Item>
            <Menu.Item
                name="teams"
                active={activeItem === 'teams'}
                onClick={e => menuOnClick(e, 'teams')}
            >
                <Icon name="users" />
                Teams
            </Menu.Item>
            <Menu.Item
                name="admin"
                active={activeItem === 'admin'}
                onClick={e => menuOnClick(e, 'admin')}
            >
                <Icon name="sign-in" />
                Admin
            </Menu.Item>
        </Menu>    
    );
};

export default Navbar;
