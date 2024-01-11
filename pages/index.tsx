import Head from "next/head";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
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
import { motion } from "framer-motion";
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
  const rateRef = React.useRef(0);
  const classes = useStyles();
  const [pageShift, SetPageShift] = useState(0);
  const [shiftFlag, setShiftFlag] = useState(true);
  const [shiftFlagSkill, SetShiftFlagSkill] = useState(true);
  const [workShift, SetWorkShift] = useState(true);
  const [shiftFlagProject, SetShiftFlagProject] = useState(true);
  const [projectTwo, setProjectTwo] = useState(true);
  const [projectThree, setProjectThree] = useState(true);
  const [shiftFlagContact, SetShiftFlagConatct] = useState(true);

  const handleScroll = () => {
    rateRef.current = window.pageYOffset;
    // console.log("scroll", shiftFlag, pageShift);
    SetPageShift(window.pageYOffset);
    if (window.pageYOffset > 180) {
      setShiftFlag(false);
    }
    if (window.pageYOffset < 80) {
      setShiftFlag(true);
    }
    if (window.pageYOffset > 630) {
      SetShiftFlagSkill(false);
    }
    if (window.pageYOffset < 380) {
      SetShiftFlagSkill(true);
    }
    if (window.pageYOffset > 1080) {
      SetWorkShift(false);
    }
    if (window.pageYOffset < 1081) {
      SetWorkShift(true);
    }
    if (window.pageYOffset > 1400) {
      SetShiftFlagProject(false);
    }
    if (window.pageYOffset < 1400) {
      SetShiftFlagProject(true);
    }
    if (window.pageYOffset > 1800) {
      setProjectTwo(false);
    }
    if (window.pageYOffset < 1733) {
      setProjectTwo(true);
    }
    if (window.pageYOffset > 2253) {
      setProjectThree(false);
    }
    if (window.pageYOffset < 2127) {
      setProjectThree(true);
    }
    if (window.pageYOffset > 2600) {
      SetShiftFlagConatct(false);
    }
    if (window.pageYOffset < 2580) {
      SetShiftFlagConatct(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ backgroundColor: "#041733" }}>
      {/* {console.log("hehe", pageShift, shiftFlag)} */}
      <Box className={classes.linkContainer}>
        <Box className={classes.iconeHeight}>
          <Link href="https://github.com/Aamir-Mallick">
            <GitHubIcon style={{ color: "#64ffda", cursor: "pointer" }} />
          </Link>
        </Box>
        {/* <Box className={classes.iconeHeight}>
          <Link href="https://www.linkedin.com/in/aamir-mallick-b4b41a187/">
            <LinkedInIcon style={{ color: "#64ffda", cursor: "pointer" }} />
          </Link>
        </Box> */}
        <Box className={classes.iconeHeight}>
          <TwitterIcon style={{ color: "#64ffda", cursor: "pointer" }} />
        </Box>
        <Box className={classes.iconeHeight}>
          <Link href="https://www.instagram.com/aman_the_fire/">
            <InstagramIcon style={{ color: "#64ffda", cursor: "pointer" }} />
          </Link>
        </Box>
        <Box className={classes.lineContainer}></Box>
      </Box>
      {/* <Box className={classes.emailContainer}>
        <Typography style={{ fontSize: "20px" }} variant='body2'>
          aamirmallick71@gmail.com
        </Typography>
      </Box> */}
      <motion.div exit={{ opacity: 0 }}>
        <HeaderNavBar />

        <AboutSection shift={!shiftFlag} />

        <SkillContainer shift={!shiftFlagSkill} work={!workShift} />

        <ProjectContainer
          shift={!shiftFlagProject}
          projectTwo={!projectTwo}
          projectThree={!projectThree}
        />

        <Contact shift={!shiftFlagContact} />
      </motion.div>
    </div>
  );
}
