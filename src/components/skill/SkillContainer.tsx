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
import { useStyles } from "./useStyles";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

export const SkillContainer = () => {
  const classes = useStyles();
  return (
    <Box id="skill" className={classes.skillMainContainer}>
      <Box style={{ margin: "10px auto" }}>
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
      </Box>
      <Box className={classes.skillCardMainContainer}>
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
      </Box>
      <Box className={classes.workMainConatiner}>
        <Typography className={classes.workHeadingContainer} variant="h4">
          Where I work
        </Typography>
        <Box className={classes.workContainer}>
          <Box>
            <Typography
              style={{ color: "#ccd6f6", marginTop: "3px", fontWeight: 900 }}
              variant="body2"
            >
              Deloitte(USI)
            </Typography>
          </Box>
          <Box style={{ marginLeft: "3rem" }}>
            <List
              style={{ paddingTop: "0px", paddingBottom: "0px" }}
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
        </Box>
      </Box>
    </Box>
  );
};
