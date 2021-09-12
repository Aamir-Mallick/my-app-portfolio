import React from "react";
import { Box, Typography, Container, Grid, Button } from "@material-ui/core";
import { useStyles } from "./useStyles";
import AddToHomeScreenIcon from "@material-ui/icons/AddToHomeScreen";
import GitHubIcon from "@material-ui/icons/GitHub";

export const ProjectContainer = () => {
  const classes = useStyles();
  return (
    <Box id="project" className={classes.root}>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" color="secondary">
          Some Things I have build
        </Typography>
        <Box
          style={{
            width: "350px",
            marginLeft: "15px",
            backgroundColor: "#68686a",
            height: "1px",
          }}
        ></Box>
      </Box>
      <Container maxWidth="md" className={classes.contentContainer}>
        <Box
          className={classes.projectMainConatiner}
          style={{
            position: "relative",
          }}
        >
          <Box style={{ width: "60%", borderRadius: "5px" }}>
            <img
              src={"../../../fodify.png"}
              width="100%"
              height="100%"
              style={{ borderRadius: "5px" }}
            />
          </Box>
          <Box
            style={{
              width: "40%",
              // position: "relative",
              // border: "1px solid white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h4" align="right">
              Fodify
            </Typography>
            <Box
              style={{
                backgroundColor: "#112240",
                position: "absolute",
                padding: "2rem 3rem",
                zIndex: 1,
                right: "2px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "440px",
                borderRadius: "5px",
              }}
            >
              <Typography
                variant="body2"
                style={{ fontSize: "20px", color: "#ccd6f6" }}
              >
                It was an online food delivery application, I have implemented
                all feature like "Add to cart", "Search for cusins", "Hotel
                details"
              </Typography>
            </Box>
            <Box>
              <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Typography variant="body2">React.js</Typography>
                <Typography variant="body2">Firebase</Typography>
                <Typography variant="body2">CSS</Typography>
                <Typography variant="body2">SCSS</Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "end",
                  marginTop: "1rem",
                }}
              >
                <Box
                  style={{
                    marginRight: "1.5rem",
                    color: "#ccd6f6",
                    cursor: "pointer",
                  }}
                >
                  <AddToHomeScreenIcon />
                </Box>
                <Box
                  style={{
                    marginRight: "1.5rem",
                    color: "#ccd6f6",
                    cursor: "pointer",
                  }}
                >
                  <GitHubIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          className={classes.projectMainConatiner}
          style={{
            position: "relative",
          }}
        >
          <Box style={{ width: "60%", borderRadius: "5px" }}>
            <img
              src={"../../../starweaver.png"}
              width="100%"
              height="100%"
              style={{ borderRadius: "5px" }}
            />
          </Box>
          <Box
            style={{
              width: "40%",
              // position: "relative",
              // border: "1px solid white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h4" align="right">
              Fodify
            </Typography>
            <Box
              style={{
                backgroundColor: "#112240",
                position: "absolute",
                padding: "2rem 3rem",
                zIndex: 1,
                right: "2px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "440px",
                borderRadius: "5px",
              }}
            >
              <Typography
                variant="body2"
                style={{ fontSize: "20px", color: "#ccd6f6" }}
              >
                It was an online food delivery application, I have implemented
                all feature like "Add to cart", "Search for cusins", "Hotel
                details"
              </Typography>
            </Box>
            <Box>
              <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Typography variant="body2">React.js</Typography>
                <Typography variant="body2">Firebase</Typography>
                <Typography variant="body2">CSS</Typography>
                <Typography variant="body2">SCSS</Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "end",
                  marginTop: "1rem",
                }}
              >
                <Box
                  style={{
                    marginRight: "1.5rem",
                    color: "#ccd6f6",
                    cursor: "pointer",
                  }}
                >
                  <AddToHomeScreenIcon />
                </Box>
                <Box
                  style={{
                    marginRight: "1.5rem",
                    color: "#ccd6f6",
                    cursor: "pointer",
                  }}
                >
                  <GitHubIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          className={classes.projectMainConatiner}
          style={{
            position: "relative",
          }}
        >
          <Box style={{ width: "60%", borderRadius: "5px" }}>
            <img
              src={"../../../zomato.png"}
              width="100%"
              height="100%"
              style={{ borderRadius: "5px" }}
            />
          </Box>
          <Box
            style={{
              width: "40%",
              // position: "relative",
              // border: "1px solid white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h4" align="right">
              Fodify
            </Typography>
            <Box
              style={{
                backgroundColor: "#112240",
                position: "absolute",
                padding: "2rem 3rem",
                zIndex: 1,
                right: "2px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "440px",
                borderRadius: "5px",
              }}
            >
              <Typography
                variant="body2"
                style={{ fontSize: "20px", color: "#ccd6f6" }}
              >
                It was an online food delivery application, I have implemented
                all feature like "Add to cart", "Search for cusins", "Hotel
                details"
              </Typography>
            </Box>
            <Box>
              <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Typography variant="body2">React.js</Typography>
                <Typography variant="body2">Firebase</Typography>
                <Typography variant="body2">CSS</Typography>
                <Typography variant="body2">SCSS</Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "end",
                  marginTop: "1rem",
                }}
              >
                <Box
                  style={{
                    marginRight: "1.5rem",
                    color: "#ccd6f6",
                    cursor: "pointer",
                  }}
                >
                  <AddToHomeScreenIcon />
                </Box>
                <Box
                  style={{
                    marginRight: "1.5rem",
                    color: "#ccd6f6",
                    cursor: "pointer",
                  }}
                >
                  <GitHubIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectContainer;
