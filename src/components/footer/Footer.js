import React from 'react'
import useStyles from "./useStyles";
import {Typography} from "@material-ui/core"
import useInfo from "../customHooks/useInfo";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';
import TelegramIcon from '@material-ui/icons/Telegram';
import {Bounce} from "react-reveal";

const Footer = () => {
    const classes = useStyles();
    const {name, footerAbout, year,links:{socialMedia:social}} = useInfo();
    const socialIcons = [
        {icon:<LinkedInIcon className={classes.icon} fontSize="large"/>},
        {icon:<InstagramIcon className={classes.icon}fontSize="large"/>},
        {icon:<GitHubIcon className={classes.icon}fontSize="large"/>},
        {icon:<TwitterIcon className={classes.icon}fontSize="large"/>},
        {icon:<TelegramIcon className={classes.icon}fontSize="large"/>}
  
      ]

    return (
        <footer className={classes.root}>
            <Typography className={classes.name} >{name}</Typography>
            <Typography  className={classes.footerAbout}>{footerAbout}</Typography>
            <div className={classes.icons}>
                {socialIcons.map(({icon}, index)=>(
                  <IconButton 
                  onClick={()=>window.open(social[index], '_blank')}
                   key={index} className={classes.color}>
                    <Bounce left opposite cascade>{icon}</Bounce>
                    </IconButton>
                ))}           
    
            </div>   
            <Typography className={classes.copy}>&copy; {year}.All Rights Reserved</Typography>
        </footer>
    )
}

export default Footer
