import React from 'react';
import Card from '@material-ui/core/Card';
import {Button,CardHeader,
  CardMedia,CardContent,CardActions,Avatar,
  Typography,
} from '@material-ui/core';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import useStyles from "./useStyles";
import { SiFiverr } from "react-icons/si";
import useInfo from "../customHooks/useInfo";
import {Link} from "react-router-dom";
import {Fade} from "react-reveal";

export default function Offer({title, subheading, avatar, image, caption, link}) {
  const classes = useStyles();
  
  const {name} = useInfo();

  return (
      <Fade top cascade>
    <Card className={classes.root}>
      <CardHeader
          className={classes.header}
          avatar = {<Avatar 
          alt={name} src={avatar} 
          aria-label={name}
          className={classes.avatar}/>}
          
        title={title}
        subheader={subheading}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={title}
      />
     
     <CardContent style={{height:"10vh"}} >
        <Typography variant="body2" color="textSecondary" component="p">
          {caption}
        </Typography>
      </CardContent>
      <div style={{marginTop:"4em"}}>
      <CardActions disableSpacing>
        <Button 
         className={classes.header}
        component={Link}
         aria-label="Message Me"
         to="contact-me"
          startIcon={<ContactMailIcon className={classes.icons} />}>
              Message Me
        </Button>
        
        {link && 
        <>
        <Typography style={{margin:"0 5px"}}>Or</Typography>
         <Button 
         className={classes.header}
        onClick={()=>window.open({link})}
        aria-label="Fiverr"
          startIcon={<SiFiverr className={classes.icons} />}>
              Fiverr
        </Button></>
        }
      </CardActions>
     </div>
    </Card>
    </Fade>
  );
}
