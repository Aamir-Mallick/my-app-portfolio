import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemIcon,
} from "@material-ui/core";
import { motion } from "framer-motion";
import { useStyles } from "./useStyles";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

export const SkillContainer = (props) => {
  const classes = useStyles();
  const { shift, work } = props;

  return (
    <Box id="skill" className={classes.skillMainContainer}>
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: shift ? 0 : -300, opacity: shift ? 1 : 0 }}
        transition={{ delay: 0, duration: 1 }}
        style={{ margin: "10px auto" }}
      >
        <Typography
          style={{
            textAlign: "center",
            marginTop: "20px",
            paddingTop: "20px",
            color: "#64ffda",
            fontWeight: 700,
            fontSize: "2rem",
          }}
          variant="body2"
        >
          Skills
        </Typography>
      </motion.div>
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: shift ? 0 : -300, opacity: shift ? 1 : 0 }}
        transition={{ delay: 0, duration: 1 }}
        className={classes.skillCardMainContainer}
      >
        <Box>
          <List component="nav" aria-label="main mailbox folders">
            {[
              "Javascript",
              "React.js",
              "Redux.js",
              "Typescript",
              "Next.js",
              "Node.js",
              "Epress.js",
            ].map((list) => {
              return (
                <ListItem>
                  <ListItemIcon>
                    <DoneAllIcon style={{ color: "#64ffda" }} />
                  </ListItemIcon>
                  <ListItemText primary={list} />
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box>
          <List component="nav" aria-label="main mailbox folders">
            {[
              "Bootstrap",
              "Material Ui",
              "HTML5",
              "CSS3",
              "SCSS",
              "Firebase",
              "MongoDb",
            ].map((list) => {
              return (
                <ListItem>
                  <ListItemIcon>
                    <DoneAllIcon style={{ color: "#64ffda" }} />
                  </ListItemIcon>
                  <ListItemText primary={list} />
                </ListItem>
              );
            })}
          </List>
        </Box>
      </motion.div>
      {/* <Box style={{ fontSize: "1.5rem" }} className={classes.workMainConatiner}>
        <motion.h4
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: work ? 0 : -300, opacity: work ? 1 : 0 }}
          transition={{ delay: 0, duration: 1 }}
          className={classes.workHeadingContainer}
        >
          Where I work
        </motion.h4>
        <motion.div
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: work ? 0 : -300, opacity: work ? 1 : 0 }}
          transition={{ delay: 0, duration: 1 }}
          className={classes.workContainer}
        >
          <Box>
            <Typography
              style={{ color: "#ccd6f6", marginTop: "3px", fontWeight: 900 }}
              variant="body2"
            >
              Deloitte(USI)
            </Typography>
          </Box>
          <Box className={classes.listMainContainer}>
            <List
              className={classes.listContainer}
              component="nav"
              aria-label="main mailbox folders"
            >
              <ListItem style={{ paddingTop: "0px", paddingBottom: "0px" }}>
                <ListItemText primary=" I am front-end developer at Deloitte (USI)." />
              </ListItem>

              <ListItem style={{ padding: "0px" }}>
                <ListItemIcon style={{ padding: "0px" }}>
                  <ArrowRightIcon style={{ color: "#64ffda" }} />
                </ListItemIcon>
                <ListItemText primary="We are building web application using react.js, redux" />
              </ListItem>
              <ListItem style={{ padding: "0px" }}>
                <ListItemIcon style={{ padding: "0px" }}>
                  <ArrowRightIcon style={{ color: "#64ffda" }} />
                </ListItemIcon>
                <ListItemText primary="I have worked on feature enhancement, added new feature as per client requirement" />
              </ListItem>
              <ListItem style={{ padding: "0px" }}>
                <ListItemIcon style={{ padding: "0px" }}>
                  <ArrowRightIcon style={{ color: "#64ffda" }} />
                </ListItemIcon>
                <ListItemText primary="I have solved production critical production bug" />
              </ListItem>
              <ListItem style={{ padding: "0px" }}>
                <ListItemIcon style={{ padding: "0px" }}>
                  <ArrowRightIcon style={{ color: "#64ffda" }} />
                </ListItemIcon>
                <ListItemText primary="I interact with client on daily basis to unnder their requirement for better understanding" />
              </ListItem>
            </List>
          </Box>
        </motion.div>
      </Box> */}
    </Box>
  );
};
