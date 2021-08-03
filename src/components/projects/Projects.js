import React from 'react'
import useStyles from "./useStyles";
import {Project} from "../";
import useInfo from "../customHooks/useInfo";
import {Typography} from "@material-ui/core";



const Projects = () => {
    const classes = useStyles();
    const {projectsInfo} = useInfo();


    return (
       <section className={classes.root}>
            <div className={classes.toolbar}/>
            <Typography variant="h4" paragraph className={classes.title} >FEW PROJECTS OF MINE</Typography>
            <div className={classes.projects}>
                {projectsInfo.map(({demo, caption, image, git, title}, index)=>(
                    <Project
                      key={index}
                      demo={demo}
                      caption={caption}
                      image={image}
                      git={git}
                      title={title}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects
