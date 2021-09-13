import React from "react";
import {
  Box,
  Typography,
  Container,
  Link,
  Grid,
  Button,
} from "@material-ui/core";
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
          <Box className={classes.imageContainer}>
            <img
              src={"../../../fodify.png"}
              className={classes.imageBox}
              width="100%"
              height="100%"
            />
          </Box>
          <Box className={classes.projectContentContainer}>
            <Typography
              className={classes.projectName}
              variant="h4"
              align="right"
            >
              Fodify
            </Typography>
            <Box className={classes.projectContentBox}>
              <Typography
                className={classes.projectNameMobile}
                variant="h4"
                align="right"
              >
                Zomato Clone
              </Typography>
              <Typography variant="body2" className={classes.workTextContent}>
                It was an online food delivery application, I have implemented
                all feature like "Add to cart", "Search for cusins", "Hotel
                details"
              </Typography>
              <Box className={classes.projectLinksMobile}>
                <Box
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <Typography variant="body2">HTML5</Typography>
                  <Typography variant="body2">Bootstrap</Typography>
                  <Typography variant="body2">CSS3</Typography>
                  <Typography variant="body2">SCSS</Typography>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
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
                    <Link href="https://naughty-wilson-7983d0.netlify.app/">
                      <AddToHomeScreenIcon
                        style={{
                          color: "#ccd6f6",
                        }}
                      />
                    </Link>
                  </Box>
                  <Box
                    style={{
                      marginRight: "1.5rem",
                      color: "#ccd6f6",
                      cursor: "pointer",
                    }}
                  >
                    <Link href="https://github.com/Aamir-Mallick/fodify-Application">
                      <GitHubIcon
                        style={{
                          color: "#ccd6f6",
                        }}
                      />
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={classes.projectLinks}>
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
                  <Link href="https://naughty-wilson-7983d0.netlify.app/">
                    <AddToHomeScreenIcon
                      style={{
                        color: "#ccd6f6",
                      }}
                    />
                  </Link>
                </Box>
                <Box
                  style={{
                    marginRight: "1.5rem",
                    color: "#ccd6f6",
                    cursor: "pointer",
                  }}
                >
                  <Link href="https://github.com/Aamir-Mallick/fodify-Application">
                    <GitHubIcon
                      style={{
                        color: "#ccd6f6",
                      }}
                    />
                  </Link>
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
          <Box className={classes.projectContentContainerReverse}>
            <Typography
              className={classes.projectName}
              variant="h4"
              align="left"
            >
              Starweaver
            </Typography>
            <Box className={classes.projectContentBoxReverse}>
              <Typography
                className={classes.projectNameMobile}
                variant="h4"
                align="right"
              >
                Starweaver
              </Typography>
              <Typography variant="body2" className={classes.workTextContent}>
                It was learnig web application, where used can learn by worl
                class instructor, it was production application, I have worked
                on different UI section
              </Typography>
              <Box className={classes.projectLinksMobile}>
                <Box
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <Typography variant="body2">HTML5</Typography>
                  <Typography variant="body2">Bootstrap</Typography>
                  <Typography variant="body2">CSS3</Typography>
                  <Typography variant="body2">SCSS</Typography>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
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
                    <Link href="https://go.starweaver.com/on-air">
                      <AddToHomeScreenIcon
                        style={{
                          color: "#ccd6f6",
                        }}
                      />
                    </Link>
                  </Box>
                  <Box
                    style={{
                      marginRight: "1.5rem",
                      color: "#ccd6f6",
                      cursor: "pointer",
                    }}
                  >
                    {/* <GitHubIcon /> */}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={classes.projectLinks}>
              <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Typography variant="body2">React.js</Typography>
                <Typography variant="body2">Redux</Typography>
                <Typography variant="body2">Node.js</Typography>
                <Typography variant="body2">Firebase</Typography>
                <Typography variant="body2">Material UI</Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "start",
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
                  <Link href="https://go.starweaver.com/on-air">
                    <AddToHomeScreenIcon
                      style={{
                        color: "#ccd6f6",
                      }}
                    />
                  </Link>
                </Box>
                <Box
                  style={{
                    marginRight: "1.5rem",
                    color: "#ccd6f6",
                    cursor: "pointer",
                  }}
                >
                  {/* <GitHubIcon /> */}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={classes.imageContainer}>
            <img
              src={"../../../starweaver.png"}
              width="100%"
              height="100%"
              className={classes.imageBox}
            />
          </Box>
        </Box>
        <Box
          className={classes.projectMainConatiner}
          style={{
            position: "relative",
          }}
        >
          <Box className={classes.imageContainer}>
            <img
              src={"../../../zomato.png"}
              width="100%"
              height="100%"
              className={classes.imageBox}
            />
          </Box>
          <Box className={classes.projectContentContainer}>
            <Typography
              className={classes.projectName}
              variant="h4"
              align="right"
            >
              Zomato Clone
            </Typography>
            <Box className={classes.projectContentBox}>
              <Typography
                className={classes.projectNameMobile}
                variant="h4"
                align="right"
              >
                Zomato Clone
              </Typography>
              <Typography variant="body2" className={classes.workTextContent}>
                It was clone of famous food delivery application, i cloned it
                home page as same as it was in real,
              </Typography>
              <Box className={classes.projectLinksMobile}>
                <Box
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <Typography variant="body2">HTML5</Typography>
                  <Typography variant="body2">Bootstrap</Typography>
                  <Typography variant="body2">CSS3</Typography>
                  <Typography variant="body2">SCSS</Typography>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
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
                    <Link href="https://aamir-mallick.github.io/zomato-replica/">
                      <AddToHomeScreenIcon
                        style={{
                          color: "#ccd6f6",
                        }}
                      />
                    </Link>
                  </Box>
                  <Box
                    style={{
                      marginRight: "1.5rem",
                      color: "#ccd6f6",
                      cursor: "pointer",
                    }}
                  >
                    <Link href="https://github.com/Aamir-Mallick/zomato-replica">
                      <GitHubIcon
                        style={{
                          color: "#ccd6f6",
                        }}
                      />
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={classes.projectLinks}>
              <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Typography variant="body2">HTML5</Typography>
                <Typography variant="body2">Bootstrap</Typography>
                <Typography variant="body2">CSS3</Typography>
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
                  <Link href="https://aamir-mallick.github.io/zomato-replica/">
                    <AddToHomeScreenIcon
                      style={{
                        color: "#ccd6f6",
                      }}
                    />
                  </Link>
                </Box>
                <Box
                  style={{
                    marginRight: "1.5rem",
                    color: "#ccd6f6",
                    cursor: "pointer",
                  }}
                >
                  <Link href="https://github.com/Aamir-Mallick/zomato-replica">
                    <GitHubIcon
                      style={{
                        color: "#ccd6f6",
                      }}
                    />
                  </Link>
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
