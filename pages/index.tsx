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
    rateRef.current = window.scrollY;
    SetPageShift(window.scrollY);
    if (window.scrollY > 180) {
      setShiftFlag(false);
    }
    if (window.scrollY < 80) {
      setShiftFlag(true);
    }
    if (window.scrollY > 521) {
      SetShiftFlagSkill(false);
    }
    if (window.scrollY < 520) {
      SetShiftFlagSkill(true);
    }
    if (window.scrollY > 602) {
      SetShiftFlagProject(false);
    }
    if (window.scrollY < 601) {
      SetShiftFlagProject(true);
    }
    if (window.scrollY > 1000) {
      setProjectTwo(false);
    }
    if (window.scrollY < 999) {
      setProjectTwo(true);
    }

    if (window.scrollY > 1453) {
      setProjectThree(false);
    }
    if (window.scrollY < 1452) {
      setProjectThree(true);
    }
    if (window.scrollY > 2600) {
      SetShiftFlagConatct(false);
    }
    if (window.scrollY < 2580) {
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
        {/* <Box className={classes.iconeHeight}>
          <TwitterIcon style={{ color: "#64ffda", cursor: "pointer" }} />
        </Box> */}
        {/* <Box className={classes.iconeHeight}>
          <Link href="https://www.instagram.com/aman_the_fire/">
            <InstagramIcon style={{ color: "#64ffda", cursor: "pointer" }} />
          </Link>
        </Box> */}
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
