import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./useStyles";
import { useInfo } from "common/Hooks";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import { BiSupport, BiMedal } from "react-icons/bi";
import { Fade } from "react-reveal";
import {MdOutlineCastForEducation} from "react-icons/md"

const About = () => {
  const classes = useStyles();
  const {
    name,
    phone,
    email,
    aboutText,
    projects,
    yrsExp,
    images: { about },
  } = useInfo();
  const contactInfo = [
    { icon: <PersonIcon />, text: name },
    { icon: <PhoneIcon />, text: phone },
    { icon: <ContactMailIcon />, text: email },
  ];
  const experienceInfo = [
    {
      icon: <CardGiftcardIcon />,
      primary: `${projects}+ Projects`,
      secondary: "Completed",
    },

    { icon: <BiMedal />, primary: `${yrsExp}+ Years`, secondary: "Experience" },

    { icon: <BiSupport />, primary: "Support", secondary: "Online 24/7" },
  ];

  const educationInfo = [
    {
      icon:<MdOutlineCastForEducation/>,
      primary:"UNIVERSITY OF CAPE COAST",
      secondary:"BS. COMPUTER SCIENCE"
    }
  ]

  return (
    <section className={classes.root}>
      <div className={classes.toolbar} />
      <div className={classes.toolbar} />
      <Typography paragraph className={classes.heading} variant="h5">
        ABOUT ME
      </Typography>

      <div className={classes.about}>
        <div className={classes.aboutContent}>
          <img
            className={classes.aboutImage}
            src={about}
            alt={name + "'s image"}
          />

          <Typography className={classes.aboutText} variant="subtitle4">
            <Fade left>{aboutText}</Fade>
          </Typography>
        </div>
        <div className={classes.info}>
          {/* BASIC INFORMATION(CONTACT) */}
          <div className={classes.info_details}>
            <Typography paragraph className={classes.info_title}>
              Information
            </Typography>
            <div className={classes.info_details_inner}>
              <List>
                {contactInfo.map(({ icon, text }) => (
                  <Fade top>
                    <ListItem>
                      <ListItemIcon className={classes.icons}>
                        {icon}
                      </ListItemIcon>
                      <ListItemText className={classes.infoText}>
                        {text}
                      </ListItemText>
                    </ListItem>
                  </Fade>
                ))}
              </List>
            </div>
          </div>
          {/* EDUCATION */}
          <div className={classes.info_details}>
            <Typography paragraph className={classes.info_title}>
              Education
            </Typography>
            <div className={classes.info_details_inner}>
              <List>
                {educationInfo.map(({ icon, primary, secondary }) => (
                  <Fade top>
                    <ListItem>
                      <ListItemIcon className={classes.icons}>
                        {icon}
                      </ListItemIcon>
                      <ListItemText
                        className={classes.infoText}
                        primary={primary}
                        secondary={secondary}
                      />
                    </ListItem>
                  </Fade>
                ))}
              </List>
            </div>
          </div>
          {/* EXPERIENCE */}
          <div className={classes.info_details}>
            <Typography paragraph className={classes.info_title}>
              Experience and Support
            </Typography>
            <div className={classes.info_details_inner}>
              <List>
                {experienceInfo.map(({ icon, primary, secondary }) => (
                  <Fade top>
                    <ListItem>
                      <ListItemIcon className={classes.icons}>
                        {icon}
                      </ListItemIcon>
                      <ListItemText
                        className={classes.infoText}
                        primary={primary}
                        secondary={secondary}
                      />
                    </ListItem>
                  </Fade>
                ))}
              </List>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
