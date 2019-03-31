import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { CityLogo } from '../ui/icons';

import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./SideDrawer";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class Header extends Component {
    state = {
        classses: "cnavgroup"
	};
  toggleDrawer = value => {
        if (this.state.classses == "cnavgroup"){
            this.setState({
                classses : "cnavgroup active"
            });
        }else{
            this.setState({
                classses : "cnavgroup"
            });
        }
	};
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

                    <div className="hidden-xs">
                    <Link className={this.state.classses} to="/council">
                        <Button color="inherit">
                            <div className="footer_header_text">
                                <h4>The Council</h4>
                            </div>
                        </Button>
                    </Link>
                    <Link className={this.state.classses} to="/gallery">
                        <Button color="inherit">
                            <div className="footer_header_text">
                                <h4>Gallery</h4>
                            </div>
                        </Button>
                    </Link>
                    <Link className={this.state.classses} to="/register">
                        <Button color="inherit">
                            <div className="footer_header_text">
                                <h4>Register</h4>
                            </div>
                        </Button>
                    </Link>
                    <Link className={this.state.classses} to="/dashboard">
                        <Button color="inherit">
                            <div className="footer_header_text">
                                <h4>Admin Login</h4>
                            </div>
                        </Button>
                    </Link>

                    <Link className={this.state.classses} to="/events">
                        <Button color="inherit">
                            <div className="footer_header_text">
                                <h4>Portfolio</h4>
                            </div>
                        </Button>
                    </Link>
                    </div>
                    <IconButton className="hidden-md hidden-sm hidden-lg" aria-label="Menu" color="inherit" onClick={() => {this.toggleDrawer(true);}}>
						<MenuIcon />
					</IconButton>
                </Toolbar>
                <div className="hidden-md hidden-sm hidden-lg" data-trigger="focus">
                <ul className={this.state.classses}>
                        <li className="cnavitem">

                    <Link className={this.state.classses} to="/council">
                        <Button color="inherit">
                            <div className="footer_header_text">
                                <h4>The Council</h4>
                            </div>
                        </Button>
                    </Link>
                    </li>
                    <li className="cnavitem">
                    <Link className={this.state.classses} to="/gallery">
                        <Button color="inherit">
                            <div className="footer_header_text">
                                <h4>Gallery</h4>
                            </div>
                        </Button>
                    </Link>
                    </li>
                    <li className="cnavitem">
                    <Link className={this.state.classses} to="/register">
                        <Button color="inherit">
                            <div className="footer_header_text">
                                <h4>Register</h4>
                            </div>
                        </Button>
                    </Link>
                    </li>
                    <li className="cnavitem">
                    <Link className={this.state.classses} to="/dashboard">
                        <Button color="inherit">
                            <div className="footer_header_text">
                                <h4>Admin Login</h4>
                            </div>
                        </Button>

                    </Link>
                    </li>
                    <li className="cnavitem">
                    <Link className={this.state.classses} to="/events">
                        <Button color="inherit">
                            <div className="footer_header_text">
                                <h4>Portfolio</h4>
                            </div>
                        </Button>
                    </Link>
                    </li>
                    </ul>
                </div>
            </AppBar>
        );
    }
}

export default Header;
