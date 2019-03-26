import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import nightOwl from "./images/nightOwl.png";
import '../../src/App.css';

const Header = () => {
  return (
    <div>
      <AppBar id="header">
        <Toolbar id="toolBar">
          <Typography variant="title" color="inherit" id="title">
            nightOwl
          </Typography>
          <img src={nightOwl} id="owl" alt="!" height="50px" />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
