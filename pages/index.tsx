import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HeaderNavBar } from "../src/components/headerNavBar/HeaderNavBar";
import { AboutSection } from "../src/components/aboutSection/AboutSection";
import { SkillContainer } from "../src/components/skill/SkillContainer";
import { ProjectContainer } from "../src/components/projects/ProjectContainer";
import { Contact } from "../src/components/contact/Contact";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  IconButton,
  Button,
  Container,
  Zoom,
  Link,
} from "@material-ui/core";

import "aos/dist/aos.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import React from "react";

export const useStyles = makeStyles((theme) => ({
  linkContainer: {
    position: "fixed",
    // width: "50px",
    left: "40px",
    top: "200px",
    height: "200px",
    zIndex: 2,

    color: "#64ffda",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  lineContainer: {
    height: "200px",
  },
  iconeHeight: {
    height: "70px",
  },
  emailContainer: {
    position: "fixed",
    right: "0px",
    top: "220px",
    height: "200px",
    color: "#64ffda",
    transform: "rotate(90deg)",
    letterSpacing: "2px",
    zIndex: 2,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "#041733" }}>
      <Box className={classes.linkContainer}>
        <Box className={classes.iconeHeight}>
          <Link href="https://github.com/Aamir-Mallick">
            <GitHubIcon style={{ color: "#64ffda", cursor: "pointer" }} />
          </Link>
        </Box>
        <Box className={classes.iconeHeight}>
          <Link href="https://www.linkedin.com/in/aamir-mallick-b4b41a187/">
            <LinkedInIcon style={{ color: "#64ffda", cursor: "pointer" }} />
          </Link>
        </Box>
        <Box className={classes.iconeHeight}>
          <TwitterIcon style={{ color: "#64ffda", cursor: "pointer" }} />
        </Box>
        <Box className={classes.iconeHeight}>
          <InstagramIcon style={{ color: "#64ffda", cursor: "pointer" }} />
        </Box>
        <Box className={classes.lineContainer}></Box>
      </Box>
      <Box className={classes.emailContainer}>
        <Typography style={{ fontSize: "20px" }} variant="body2">
          aamirmallick71@gmail.com
        </Typography>
      </Box>
      <Zoom in={true}>
        <HeaderNavBar />
      </Zoom>
      <Zoom in={true}>
        <AboutSection />
      </Zoom>
      <Zoom in={true}>
        <SkillContainer />
      </Zoom>
      <Zoom in={true}>
        <ProjectContainer />
      </Zoom>
      <Zoom in={true}>
        <Contact />
      </Zoom>
    </div>
  );
}
