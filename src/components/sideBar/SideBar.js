import React from 'react';
import useStyles from './useStyles';
import {SwipeableDrawer,List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import CodeIcon from '@material-ui/icons/Code';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import WorkIcon from '@material-ui/icons/Work';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import {Link} from "react-router-dom";

const SideBar = ({drawerState:{close}, handleDrawerState}) => {
    const classes = useStyles();

    const listContent = [
        {icon:<HomeIcon color="action"/>, text:"Home"},
        {icon:<InfoIcon color="action"/>, text:"About"},
        {icon:<CodeIcon color="action"/>, text:"Skills"},
        {icon:<RoomServiceIcon color="action"/>, text:"Services"},
        {icon:<WorkIcon color="action"/>, text:"Projects"},
        {icon:<ContactMailIcon color="action"/>, text:"Contact Me"}
        
    ]

  


    return (
        <aside>
            <SwipeableDrawer
            className={classes.drawer}
             anchor="left" open={close}
             onOpen={(e)=>handleDrawerState(e,true)}
              onClose={(e)=>handleDrawerState(e,false)}>
             <List className={classes.sideBar}>
                 {listContent.map(({icon, text},index)=>(
                     <ListItem
                     component={Link}
                     to={"/" + (text.toLowerCase()==="home"?""
                     :(text.toLowerCase() === "contact me")?"contact-me"
                     :
                     text.toLowerCase())
                     } 
                     key={index}
                     onClick={event=>handleDrawerState(event, false)}
                     button>
                         <ListItemIcon >
                             {icon}
                         </ListItemIcon>
                         <ListItemText  primary={text}/>
                     </ListItem>
                 ))}
             </List>
          </SwipeableDrawer>
        </aside>
    )
}

export default SideBar
