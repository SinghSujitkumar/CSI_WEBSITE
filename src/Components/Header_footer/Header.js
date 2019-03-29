import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

import { CityLogo } from '../ui/icons';

class Header extends Component {
    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: '#33699A',
                    boxShadow: 'none',
                    padding: '10px 0',
                    borderBottom: '2px solid #00285e'
                }}
            >
                <Toolbar style={{ display: 'flex' }}>
                    <div style={{ flexGrow: 1 }}>
                        <div className="header_logo">
                            <CityLogo
                                link={true}
                                linkTo="/"
                                width="70px"
                                height="70px"
                            />
                        </div>
                    </div>

                    <Link to="/council">
                        <Button color="inherit">
                            <div className="footer_header_text">
                                <h4>The Council</h4>
                            </div>
                        </Button>
                    </Link>
                    <Link to="/gallery">
                        <Button color="inherit">
                            <div className="footer_header_text">
                                <h4>Gallery</h4>
                            </div>
                        </Button>
                    </Link>
                    <Link to="/register">
                        <Button color="inherit">
                            <div className="footer_header_text">
                                <h4>Register</h4>
                            </div>
                        </Button>
                    </Link>
                    <Link to="/dashboard">
                        <Button color="inherit">
                            <div className="footer_header_text">
                                <h4>Admin Login</h4>
                            </div>
                        </Button>
                    </Link>
                    <Link to="/events">
                        <Button color="inherit">
                            <div className="footer_header_text">
                                <h4>Portfolio</h4>
                            </div>
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;
