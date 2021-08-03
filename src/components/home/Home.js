import React from 'react';
import useStyles from './useStyles';
import {Typography, Button} from '@material-ui/core';
import useInfo from "../customHooks/useInfo";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';
import TelegramIcon from '@material-ui/icons/Telegram';
import {Bounce} from 'react-reveal';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';


const Home = () => {
  
    const classes = useStyles();
    const {images, name,resume, title, links:{socialMedia:social}} = useInfo();


    const socialIcons = [
      {icon:<LinkedInIcon fontSize="large"/>},
      {icon:<InstagramIcon fontSize="large"/>},
      {icon:<GitHubIcon fontSize="large"/>},
      {icon:<TwitterIcon fontSize="large"/>},
      {icon:<TelegramIcon fontSize="large"/>}

    ]
    
    function downloadFile(){
      let tag = document.createElement("a");
      tag.href=resume;
      tag.download = "jam_resume.pdf"
      tag.click();
    }
    

  return (
    <div className={classes.root}>
    
      <main className={classes.main}>
      <div className={classes.profile}>
           <div className={classes.toolbar}/>
           <div className={classes.toolbar}/>
          
            <img className={classes.large} alt={name} src={images.profile}/>
              
            <Typography align="center" className={classes.name}>{name}</Typography>
            <Typography style={{fontWeight:"bold"}} variant="subtitle1" align="center" >
              <Bounce top cascade>{title}</Bounce></Typography>
            </div>
            <div className={classes.icons}>
                {socialIcons.map(({icon}, index)=>(
                  <IconButton 
                  onClick={()=>window.open(social[index], '_blank')}
                   key={index} className={classes.color}>
                    <Bounce top opposite cascade>{icon}</Bounce>
                    </IconButton>
                ))}           
    
            </div>
            <Button
             onClick={downloadFile}
            startIcon={<CloudDownloadIcon/>}
             variant="contained" className={classes.download}>Download Resume</Button>
      </main>
      
            
    </div>
  );
}

export default Home
