import React from "react";
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import Drawer from "@material-ui/core/Drawer";
const SideDrawer = props => {
  const scrollToElement = () => {
		props.onClose(false);
	};
	return (
		<Drawer
			anchor="top"
			open={props.open}
			onClose={() => {
				props.onClose(false);
			}}
		>
    <Link to="/council">
        <Button color="inherit"
        onClick={() => {
						scrollToElement();
					}}
          >
            <div className="footer_header_text">
                <h4>The Council</h4>
            </div>
        </Button>
    </Link>
    <Link to="/gallery">
    <Button color="inherit"
    onClick={() => {
        scrollToElement();
      }}
      >
            <div className="footer_header_text">
                <h4>Gallery</h4>
            </div>
        </Button>
    </Link>
    <Link to="/register">
    <Button color="inherit"
    onClick={() => {
        scrollToElement();
      }}
      >
            <div className="footer_header_text">
                <h4>Register</h4>
            </div>
        </Button>
    </Link>
    <Link to="/dashboard">
    <Button color="inherit"
    onClick={() => {
        scrollToElement();
      }}
      >
            <div className="footer_header_text">
                <h4>Admin Login</h4>
            </div>
        </Button>
    </Link>
    <Link to="/events">
    <Button color="inherit"
    onClick={() => {
        scrollToElement();
      }}
      >
            <div className="footer_header_text">
                <h4>Portfolio</h4>
            </div>
        </Button>
    </Link>
		</Drawer>
	);
};

export default SideDrawer;
