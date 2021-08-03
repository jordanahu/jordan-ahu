import React from 'react'
import useStyles from "./useStyles";
import {Typography} from "@material-ui/core";
import {Offers} from "../";
import useInfo from "../customHooks/useInfo";

const Services = () => {

    const classes = useStyles();
    const {services, images:{profile}} = useInfo();
    
    return (
        <section className={classes.root}>
            <div className={classes.toolbar}/>
            <Typography variant="h4" paragraph className={classes.title} >WHAT I OFFER</Typography>
            <Typography paragraph className={classes.skillHeading} >My services</Typography>
            <div className={classes.services}>
                {services.map(({title, subheading, image, caption, fiver}, index)=>(
                    <Offers
                    title={title}
                    subheading={subheading}
                    avatar={profile}
                    image={image}
                    link={fiver}
                    caption={caption}
                    key={index}/>
                ))}
            </div>
        
        </section>
    )
}

export default Services
