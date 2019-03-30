import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { CityLogo } from '../ui/icons';

import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

import SideDrawer from "./SideDrawer";

class Header extends Component {
  state = {
		drawerOpen: false
	};
  toggleDrawer = value => {
		this.setState({
			drawerOpen: value
		});
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
                    <IconButton
						              aria-label="Menu"
                         color="inherit"
						              onClick={() => {
							this.toggleDrawer(true);
						}}
					>
						<MenuIcon />
					</IconButton>
					<SideDrawer
						open={this.state.drawerOpen}
						onClose={value => {
							this.toggleDrawer(value);
						}}
					/>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;
