import React from "react";
import {
  Box,
  Typography,
  Container,
  Link,
  Grid,
  Button,
} from "@material-ui/core";
import { motion } from "framer-motion";
import { useStyles } from "./useStyles";
import AddToHomeScreenIcon from "@material-ui/icons/AddToHomeScreen";
import GitHubIcon from "@material-ui/icons/GitHub";

const projectContents = [
  {
    title: `Tetrixx`,
    content: `Unlock the full potential of your Supply Chain with accurate,
    granular, secured data, correct or enhance your operations to reduce
    your costs and boost your end to end Visibility.`,
    linkToSite: `https://tetrixx.io/`,
    imgLocation: `../../../tetrixx.png`,
    tech: ["HTML5", "CSS3", "React.js", "Next.js", "Node.js"],
  },
  {
    title: `Starweaver`,
    content: `This is E-learnimg web portal, which enble learning with
    interactivity for the learner. it Provide an unique learning
    experience and also real time communication with the instructor.`,
    linkToSite: `https://go.starweaver.com/on-air`,
    imgLocation: `../../../starweaver.png`,
    tech: ["HTML5", "CSS3", "React.js", "Next.js", "Node.js"],
  },
  {
    title: `Global menu`,
    content: `it was digital world, and the cost of creating an online
    footprint (website, digital menu with QR codes etc) can be
    prohibitive for many restaurants and bars.`,
    linkToSite: `https://admin-dev.globalmenu.app/login`,
    imgLocation: `../../../globalmenu.png`,
    tech: ["HTML5", "CSS3", "React.js", "Next.js", "Node.js"],
  },
  {
    title: `Yolo Connects`,
    content: `This project was based on third party API consumption. I
    integrated Facebook, Instagram & LinkedIn APIs enabling users to
    schedule posts to the application.`,
    linkToSite: `https://app.yoloconnect.in/`,
    imgLocation: `../../../yolo.png`,
    tech: ["HTML5", "CSS3", "React.js", "Next.js", "Node.js"],
  },
  {
    title: `Poolfish`,
    content: `Poolfish is an all-in-one workspace for liquidity providers —
    calculate, discover, analyze, manage & track positions, and
    more.`,
    linkToSite: `https://poolfish.xyz/calculators/uniswap`,
    imgLocation: `../../../poolfish.png`,
    tech: ["HTML5", "CSS3", "React.js", "Next.js", "Node.js"],
  },
  {
    title: `Talents Crew`,
    content: `This project provide Communities & Groups TalentsCrew provides
    an uplifting community experience in the spirit of human
    camaraderie.`,
    linkToSite: `https://talentscrew.com/`,
    imgLocation: `../../../talentsscrew.png`,
    tech: ["HTML5", "CSS3", "React.js", "Next.js", "Node.js"],
  },
];

const Project = (props) => {
  const { classes, projectTwo, title, content, tech, linkToSite, imgLocation } =
    props;
  return (
    <Box className={classes.projectMainConatiner}>
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{
          y: projectTwo ? 0 : 300,
          opacity: projectTwo ? 1 : 0,
        }}
        transition={{ delay: 0, duration: 1 }}
        style={{
          position: "relative",
          minWidth: "350px",
          cursor: "pointer",
        }}
        onClick={() => window.open(linkToSite, "_black")}
      >
        <Box className={classes.projectContentBoxReverse}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body2" className={classes.workTextContent}>
            {content}
          </Typography>
          <Box className={classes.projectLinks}>
            <Box className={classes.projectLinksItems}>
              {tech.map((techi, index) => {
                return (
                  <Typography key={index} variant="body2">
                    {techi}
                  </Typography>
                );
              })}
            </Box>
            <Box mt={2}>
              <AddToHomeScreenIcon
                onClick={() => window.open(linkToSite, "_black")}
              />
            </Box>
          </Box>
        </Box>
      </motion.div>
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: projectTwo ? 0 : 300, opacity: projectTwo ? 1 : 0 }}
        transition={{ delay: 0, duration: 1 }}
        className={classes.imageContainer}
      >
        <img
          src={imgLocation}
          width="100%"
          height="100%"
          className={classes.imageBox}
        />
      </motion.div>
    </Box>
  );
};
export const ProjectContainer = (props) => {
  const classes = useStyles();
  const { shift, projectTwo, projectThree } = props;

  return (
    <Box id="project" className={classes.root}>
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: shift ? 0 : -300, opacity: shift ? 1 : 0 }}
        transition={{ delay: 0, duration: 1 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          className={classes.somethingClass}
          variant="h5"
          color="secondary"
        >
          Project I worked on
        </Typography>

        <Box className={classes.dashClass}></Box>
      </motion.div>
      <Container maxWidth="md" className={classes.contentContainer}>
        {projectContents.map((project) => {
          return (
            <Project
              key={project.title}
              title={project.title}
              tech={project.tech}
              imgLocation={project.imgLocation}
              content={project.content}
              linkToSite={project.linkToSite}
              classes={classes}
              projectTwo={projectTwo}
            />
          );
        })}
      </Container>
    </Box>
  );
};

export default ProjectContainer;
