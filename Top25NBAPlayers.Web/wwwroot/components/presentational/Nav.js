import React, {useState} from 'react';
import { UserContext } from '../../App';
import { withRouter } from 'react-router';
import { Menu, Icon, Comment, MenuItem, Segment } from 'semantic-ui-react';


const Navbar = (props) => {

    const [ activeItem, setActiveItem ] = useState("");


    function menuOnClick(e, link) {
        e.preventDefault();
        setActiveItem(link);
        if(link != 'logout') 
            props.history.push(`/${link}`);
        else 
            props.logout(e);
    }

    
    return (
        <UserContext.Consumer>
            {user => {
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
                    {user ? 
                        <Menu style={{width: '40%', border: 'none'}}>
                            <MenuItem
                                name="logout"
                                active={activeItem === "logout"}
                                onClick={e => menuOnClick(e, 'logout')}
                            >
                                <Icon name="sign-out" />
                                Logout
                            </MenuItem>

                            <Menu.Item
                                name="admin"
                                active={activeItem === 'admin'}
                                onClick={e => menuOnClick(e, 'admin')}
                            >
                                Admin
                                {/* <Comment.Avatar src={user.avatar} /> */}
                            </Menu.Item>

                        </Menu>
                        :
                        <Menu.Item
                            name="admin"
                            active={activeItem === 'admin'}
                            onClick={e => menuOnClick(e, 'admin')}
                        >
                            <Icon name="sign-in" />
                            Admin
                        </Menu.Item>
                        
                    }
                </Menu>    
                )
            }
            }
        </UserContext.Consumer>
    );
};

export default withRouter(Navbar);
