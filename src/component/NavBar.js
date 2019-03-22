import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import nightOwl from './images/nightOwl.png';
import "../component/Styles.css";


const NavBar = () => {
    return (
        <div>
            <AppBar position="static" id="appBar">
                <Toolbar>
                    <Typography variant="title" color="inherit" id="toolbarTypo">
                        nightOwl
                    </Typography>
                    <img src={nightOwl} id="owl" alt="!" height="50px"/>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;