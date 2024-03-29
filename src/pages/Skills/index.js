import React from 'react'
import useStyles from "./useStyles";
import {Typography} from "@material-ui/core";
import { useInfo } from "common/Hooks";
import {ImHtmlFive} from "react-icons/im";
import {FaSass} from "react-icons/fa";
import {
  FaReact,
  FaGitSquare,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import {RiVuejsLine} from "react-icons/ri";
import {BsBootstrapFill} from "react-icons/bs";
import {
  SiJquery,
  SiRedux,
  SiAngular,
  SiJavascript,
  SiTypescript,
  SiAdobephotoshop,
  SiPython,
  SiMongodb,
  SiMaterialui,
  SiFirebase,
  SiFigma,
  SiSvelte,
  SiNestjs,
  SiExpress
} from "react-icons/si";
import {GiRobotGolem} from "react-icons/gi";
import { AiOutlineApi,AiOutlineConsoleSql } from "react-icons/ai";
import {List,ListItem,ListItemText,ListItemIcon } from '@material-ui/core';

import {Fade} from "react-reveal"

const Skills = () => {

    const classes = useStyles();
    const {skills} = useInfo();

    const frontIcons = [
      <ImHtmlFive className={classes.icons} />,
      <FaSass className={classes.icons} />,
      <SiJavascript className={classes.icons} />,
      <FaReact className={classes.icons} />,
      <SiAngular className={classes.icons} />,
      <SiSvelte className={classes.icons} />,
      <RiVuejsLine className={classes.icons} />,
      <BsBootstrapFill className={classes.icons} />,
      <SiMaterialui className={classes.icons} />,
      <SiJquery className={classes.icons} />,
      <SiAdobephotoshop className={classes.icons} />,
      <SiTypescript className={classes.icons} />,
      <SiRedux className={classes.icons} />,
      <SiFigma className={classes.icons} />,
    ];

const backIcons = [
  <SiPython className={classes.icons} />,
  <FaNodeJs className={classes.icons} />,
  <SiMongodb className={classes.icons} />,
  <GiRobotGolem className={classes.icons} />,
  <SiFirebase className={classes.icons} />,
  <AiOutlineApi className={classes.icons} />,
  <FaGitSquare className={classes.icons} />,
  <FaDocker className={classes.icons} />,
  <AiOutlineConsoleSql className={classes.icons} />,
  <SiNestjs className={classes.icons} />,
  <SiExpress className={classes.icons} />,
];


    
    

    function renderFrontSkills(icons, skills){
        
        return skills.Frontend.map(({name, progress}, index)=>{
            let progressBar = <div style={{width:progress}} className={classes.progressBar}>
                <span className={classes.percentage}>{progress}</span>
            </div>

            return (
                <List key={index}>
                <Fade top cascade><ListItem>
                    <ListItemIcon>{icons[index]}</ListItemIcon>
                    <ListItemText primary={name}
                     secondary={progressBar} />
                </ListItem>
                </Fade>
            </List>
            )
        });
    }


    function renderBackendSkills(icons, skills){
        
        return skills.Backend.map(({name, progress}, index)=>{
            let progressBar = <div style={{width:progress}} className={classes.progressBar}>
                <span className={classes.percentage}>{progress}</span>
            </div>

            return (
                <List>
                <Fade top cascade><ListItem>
                    <ListItemIcon>{icons[index]}</ListItemIcon>
                    <ListItemText primary={name}
                     secondary={progressBar} />
                </ListItem>
                </Fade>
            </List>
            )
        });
    }

    
    
    

    return (
        <section className={classes.root}>
            <div className={classes.toolbar}/>
            <div className={classes.toolbar}/>
            <Typography className={classes.skillsTitle} variant="h4">PROFESSIONAL SKILLS</Typography>
            <div className={classes.skillsContainer}>
                <div className={classes.displaySkills}>
                <Typography className={classes.skillHeading} paragraph>FRONTEND SKILLS</Typography>
                {renderFrontSkills(frontIcons, skills)}
                </div>

                <div className={classes.displaySkills}>
                <Typography className={classes.skillHeading} paragraph>BACKEND SKILLS</Typography>
                {renderBackendSkills(backIcons, skills)}
                </div>
                
            </div>            
           
        </section>
    )
}

export default Skills
