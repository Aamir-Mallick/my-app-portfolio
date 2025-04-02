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

export const AboutSection = (props) => {
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
            <Box style={{ color: "#8892b0" }}>
              <motion.div
                initial={{ y: -300, opacity: 0 }}
                animate={{ y: shift ? 0 : -300, opacity: shift ? 1 : 0 }}
                transition={{ delay: 0, duration: 1 }}
                style={{
                  width: "auto",
                  margin: "1rem auto",
                  fontSize: "1.5rem",
                }}
              >
                Hello there! I'm Aamir Mallick, As a seasoned Frontend Developer
                with over 4 years of experience at Deloitte, I have honed my
                skills in creating dynamic, user-friendly web applications that
                meet the highest standards of performance and usability. My role
                at Deloitte has allowed me to work on a variety of projects,
                collaborating with cross-functional teams to deliver innovative
                solutions for clients across different industries
              </motion.div>
              <motion.div
                initial={{ y: -300, opacity: 0 }}
                animate={{ y: shift ? 0 : -300, opacity: shift ? 1 : 0 }}
                transition={{ delay: 0, duration: 1 }}
                style={{
                  width: "auto",
                  margin: "1rem auto",
                  fontSize: "1.5rem",
                }}
              >
                <div class="responsibilities">
                  <h2>Key Responsibilities</h2>
                  <ul>
                    <li>
                      <strong>Web Development:</strong> Developed and maintained
                      responsive web applications using HTML, CSS, JavaScript,
                      and modern frameworks such as React.js and Angular.
                    </li>
                    <li>
                      <strong>UI/UX Design:</strong> Worked closely with UI/UX
                      designers to implement intuitive and visually appealing
                      user interfaces, ensuring a seamless user experience.
                    </li>
                    <li>
                      <strong>Performance Optimization:</strong> Conducted
                      performance optimization techniques to enhance the speed
                      and efficiency of web applications, including code
                      splitting, lazy loading, and minimizing HTTP requests.
                    </li>
                    <li>
                      <strong>Cross-Browser Compatibility:</strong> Ensured web
                      applications are compatible across various browsers and
                      devices, performing thorough testing and debugging.
                    </li>
                    <li>
                      <strong>Version Control:</strong> Utilized Git for version
                      control, managing code repositories, and collaborating
                      with team members on code reviews and merges.
                    </li>
                    <li>
                      <strong>Agile Methodologies:</strong> Participated in
                      Agile development processes, including sprint planning,
                      daily stand-ups, and retrospectives, to ensure timely
                      delivery of high-quality software.
                    </li>
                    <li>
                      <strong>Client Interaction:</strong> Engaged with clients
                      to gather requirements, provide technical expertise, and
                      deliver tailored solutions that align with their business
                      objectives.
                    </li>
                  </ul>
                </div>
              </motion.div>
              <motion.div
                initial={{ y: 300, opacity: 0 }}
                animate={{ y: shift ? 0 : 300, opacity: shift ? 1 : 0 }}
                transition={{ delay: 0, duration: 1 }}
                style={{
                  width: "360px",
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
