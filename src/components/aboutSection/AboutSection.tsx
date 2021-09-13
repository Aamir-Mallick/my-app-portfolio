import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  Container,
} from "@material-ui/core";
import { useStyles } from "./useStyles";
// import TypeWriterEffect from "react-typewriter-effect";

export const AboutSection = () => {
  const classes = useStyles();
  return (
    <>
      <Box id="about" className={classes.aboutMainContainer}>
        <Container maxWidth="md" className={classes.textContainer}>
          <Typography
            style={{ color: "#ccd6f6", fontWeight: 900, fontFamily: "Calibre" }}
            variant="h2"
          >
            Md Aamir Mallick.
          </Typography>
          {/* <TypeWriterEffect
            textStyle={{
              fontFamily: "Red Hat Display",
              color: "#3F3D56",
              fontWeight: 900,
              fontSize: "1.5em",
            }}
            startDelay={2000}
            cursorColor="#3F3D56"
            multiText={[
              "I am Md Aamir Mallick",
              "I am front-end developer",
              "I play with back-end as well",
            ]}
            multiTextDelay={1000}
            typeSpeed={30}
          /> */}
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
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h4" color="secondary">
              About Me
            </Typography>
            <Box
              style={{
                width: "250px",
                marginLeft: "15px",
                backgroundColor: "red",
                border: "1px solid #68686a",
              }}
            ></Box>
          </Box>
          <Box style={{ display: "flex", color: "#8892b0", flexWrap: "wrap" }}>
            <Box style={{ width: "400px", margin: "1rem auto" }}>
              Hello! My name is Aamir Mallick and I enjoy creating things that
              live on the internet. My interest in web development started back
              in 2018 when I was in the college, I used see the different web
              sites, i always wonder how these web application has been
              developed, I have stared with html and css i used to create samll
              web site using html and css then later on i have stared working on
              little big web site, started cloning famous web application, after
              that i start learnign javascript that is something like miracle, I
              have stared interacting on user interaction, that was my first
              attempt to learnig javascript, then i move to react.js and have
              worked some many project where react.js was primary technology.
              that how i have stared in to web development.
            </Box>
            <Box
              style={{
                width: "400px",
                height: "200px",
                margin: "1rem auto",
                // border: "1px solid #fff",
              }}
            >
              <Box className={classes.imageContainer}></Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
