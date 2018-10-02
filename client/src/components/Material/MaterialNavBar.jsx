import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import {Tabs, Tab} from '@material-ui/core';
import Home from '../Home';
import {Link} from 'react-router-dom';

// import MenuIcon from "@material-ui/icons/Menu";
const MaterialNavBar = () => {
    return(
        <div>
        <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Menu"
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="title" color="inherit" style={{ flex: 1 }}>
            News
          </Typography>
          <Button color="inherit" component={Link} to="/signin">Login</Button>
          <Button color="inherit" component={Link} to="/">Home</Button>
        </Toolbar>
      </AppBar>
        </div>
    )
}
export default MaterialNavBar;