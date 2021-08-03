import React from 'react';
import Card from '@material-ui/core/Card';
import {Button,CardHeader} from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import useStyles from "./useStyles";
import GitHubIcon from '@material-ui/icons/GitHub';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import {Fade} from "react-reveal";



export default function Project({title, image, caption, demo, git}) {
  const classes = useStyles();
  

  return (
      <Fade top cascade>
    <Card className={classes.root}>
      <CardHeader          
        title={title}
       
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={title}
      />
     
     <CardContent style={{height:"10vh"}}>
        <Typography variant="body2" color="textSecondary" component="p">
          {caption}
        </Typography>
      </CardContent>
      <div style={{marginTop:"1em"}}>
      <CardActions disableSpacing>
        <Button 
         className={classes.header}
       
         aria-label="Live Demo"
         onClick={()=>window.open(demo, '_blank')}
          startIcon={<LiveTvIcon className={classes.icons} />}>
              Live Demo
        </Button>
        
         <Button 
         className={classes.header}
        onClick={()=>window.open(git, '_blank')}
        aria-label="github link"
          startIcon={<GitHubIcon className={classes.icons} />}>
              Github
        </Button>
      </CardActions>
      </div>
    </Card>
    </Fade>
  );
}
