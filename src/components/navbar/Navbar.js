import React from 'react'
import useStyles from './useStyles';
import {AppBar, Button, Toolbar, 
       IconButton} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import {Bounce} from 'react-reveal';
import {Link} from "react-router-dom";
import {SideBar} from "../";
import useInfo from "../customHooks/useInfo";

const Navbar = ({handleDrawerState, drawerState}) => {
   
    

    const classes = useStyles();

  return (
    
      <nav className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <IconButton
          onClick={event=>handleDrawerState(event, true)}
           edge="start" className={classes.menuButton} aria-label="menu">
            <MenuIcon  />
          </IconButton>
          <Button component={Link} to="/"><Bounce top cascade>
            {useInfo().name.split(" ")[0]}
            </Bounce></Button>
        </Toolbar>
      </AppBar>
      <SideBar 
        handleDrawerState={handleDrawerState}
        drawerState={drawerState}/>
    </nav>

  );
}

export default Navbar
