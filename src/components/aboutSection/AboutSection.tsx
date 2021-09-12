import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  Container,
} from "@material-ui/core";
import { useStyles } from "./useStyles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import aamir from "../../../public/aamir.jpg";

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
            on building accessible, human-centered products at{" "}
          </Typography>
          <Box style={{ marginTop: "2rem" }}>
            <Button size="large" variant="outlined" color="secondary">
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
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS! Fast-forward to today, and I've had the privilege of
              working at an advertising agency, a start-up, a huge corporation,
              and a student-led design studio. My main focus these days is
              building accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients. Here are a few technologies
              I've been working with recently:
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
