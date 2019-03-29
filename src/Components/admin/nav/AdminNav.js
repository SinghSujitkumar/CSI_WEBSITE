import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import { firebase } from '../../../firebase';
const AdminNav = () => {
    const links = [
        {
            title: 'Members',
            linkTo: '/admin_players'
        },
        {
            title: 'Add Members',
            linkTo: '/admin_players/add_players'
        },
        {
            title: 'Events',
            linkTo: '/admin_events'
        },
        {
            title: 'Add Events',
            linkTo: '/admin_events/add_events'
        }
    ];
    const style = {
        color: '#ffffff',
        fontWeight: '300',
        borderBottom: '1px solid #353535'
    };
    const renderItems = () =>
        links.map(link => (
            <Link to={link.linkTo} key={link.title}>
                <ListItem button style={style}>
                    {link.title}
                </ListItem>
            </Link>
        ));
    const logoutHandler = () => {
        firebase
            .auth()
            .signOut()
            .then(
                () => {
                    console.log('Log out successful');
                },
                error => {
                    console.log('Error log out');
                }
            );
    };

    return (
        <div>
            {renderItems()}
            <ListItem button style={style} onClick={() => logoutHandler()}>
                Logout
            </ListItem>
        </div>
    );
};

export default AdminNav;
