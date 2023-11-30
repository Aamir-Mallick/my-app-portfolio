import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  Container,
} from "@material-ui/core";
import { useStyles } from "./useStyles";
import { motion } from "framer-motion";

type shiftProps = {
  shift: boolean;
};

export const AboutSection = (props: shiftProps) => {
  const classes = useStyles();
  const { shift } = props;
  // console.log("ahha", shift);
  return (
    <motion.div
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 2 }}
    >
      <Box id="about" className={classes.aboutMainContainer}>
        <Container maxWidth="md" className={classes.textContainer}>
          <Typography
            style={{ color: "#ccd6f6", fontWeight: 900, fontFamily: "Calibre" }}
            variant="h2"
          >
            I am web Developer
          </Typography>

          <Typography
            style={{
              color: "#8892b0",
              fontWeight: 900,
              fontFamily: "Calibre",
              marginTop: "1rem",
            }}
            variant="h2"
          >
            I build things for the web.
          </Typography>
          <Typography
            style={{
              color: "#8892b0",
              marginTop: "1rem",
              maxWidth: "500px",
              fontWeight: 600,
              fontSize: "1.5rem",
            }}
            variant="body2"
          >
            I'm a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I'm focused
            on building accessible, human-centered products.
          </Typography>
          <Box style={{ marginTop: "2rem" }}>
            <Button
              href="https://mail.google.com/mail/u/0/?tab=km#inbox/FMfcgzGljlqmgZZflcqLWvKKjZCKkvSK?compose=GTvVlcSBmmDLtkjmpPnTcwZxvDZHcLvFnWKfKXHpNDFjHVLGcBXMbBsPCvbVSrNHvVTrkZpLbbWpq"
              size="large"
              variant="outlined"
              color="secondary"
            >
              Get In Touch
            </Button>
          </Box>
        </Container>
        <Container maxWidth="md">
          <motion.div>
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: shift ? 0 : -300, opacity: shift ? 1 : 0 }}
              transition={{ delay: 0, duration: 1 }}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Typography variant="h4" color="secondary">
                About Me
              </Typography>
              <Box
                className={classes.aboutDash}
                style={{
                  width: "250px",
                  marginLeft: "15px",
                  backgroundColor: "red",
                  border: "1px solid #68686a",
                }}
              ></Box>
            </motion.div>
            <Box
              style={{ display: "flex", color: "#8892b0", flexWrap: "wrap" }}
            >
              <motion.div
                initial={{ y: -300, opacity: 0 }}
                animate={{ y: shift ? 0 : -300, opacity: shift ? 1 : 0 }}
                transition={{ delay: 0, duration: 1 }}
                style={{
                  width: "400px",
                  margin: "1rem auto",
                  fontSize: "1.5rem",
                }}
              >
                Hello! My name is Aamir Mallick and I enjoy creating things that
                live on the internet. My interest in web development started
                back in 2018 when I was in the college, I used see the different
                web sites, I always wonder how these web application were
                developed, I started with html and css, Used to create samll web
                site using html and css, after that I moved to working on little
                bigger web application. Started with cloning famous web
                application, Also started learning javascript that is something
                like miracle, working on user interaction, that was my first
                attempt to learnig javascript, then I moved to react.js and I
                worked on many projects where react.js was primary technology.
                that how I have stared into my web development journey.
              </motion.div>
              <motion.div
                initial={{ y: 300, opacity: 0 }}
                animate={{ y: shift ? 0 : 300, opacity: shift ? 1 : 0 }}
                transition={{ delay: 0, duration: 1 }}
                style={{
                  width: "400px",
                  height: "200px",
                  margin: "1rem auto",
                  border: "3px solid #64ffda",
                  borderRadius: "5px",
                  position: "relative",
                }}
              >
                <Box className={classes.imageContainer}></Box>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </motion.div>
  );
};
