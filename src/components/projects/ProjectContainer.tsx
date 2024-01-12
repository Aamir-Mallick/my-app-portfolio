import React from "react";
import {
  Box,
  Typography,
  Container,
  Link,
  Grid,
  Button,
} from "@material-ui/core";
import { motion } from "framer-motion";
import { useStyles } from "./useStyles";
import AddToHomeScreenIcon from "@material-ui/icons/AddToHomeScreen";
import GitHubIcon from "@material-ui/icons/GitHub";

type shiftProps = {
  shift: boolean;
  projectTwo: boolean;
  projectThree: boolean;
};

export const ProjectContainer = (props: shiftProps) => {
  const classes = useStyles();
  const { shift, projectTwo, projectThree } = props;

  return (
    <Box id="project" className={classes.root}>
      {console.log("55", shift)}
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: shift ? 0 : -300, opacity: shift ? 1 : 0 }}
        transition={{ delay: 0, duration: 1 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          className={classes.somethingClass}
          variant="h5"
          color="secondary"
        >
          Project I worked on
        </Typography>

        <Box className={classes.dashClass}></Box>
      </motion.div>
      <Container maxWidth="md" className={classes.contentContainer}>
        <Box
          className={classes.projectMainConatiner}
          style={{
            position: "relative",
          }}
        >
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{
              x: projectTwo ? 0 : 300,
              opacity: projectTwo ? 1 : 0,
            }}
            transition={{ delay: 0, duration: 1 }}
            className={classes.projectContentContainerReverse}
          >
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
                This is E-learnimg web portal, which enble learning with
                interactivity for the learner. it Provide an unique learning
                experience and also real time communication with the instructor.
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
          </motion.div>
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: projectTwo ? 0 : 300, opacity: projectTwo ? 1 : 0 }}
            transition={{ delay: 0, duration: 1 }}
            className={classes.imageContainer}
          >
            <img
              src={"../../../starweaver.png"}
              width="100%"
              height="100%"
              className={classes.imageBox}
            />
          </motion.div>
        </Box>
        <Box
          className={classes.projectMainConatiner}
          style={{
            position: "relative",
          }}
        >
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{
              x: projectThree ? 0 : -300,
              opacity: projectThree ? 1 : 0,
            }}
            transition={{ delay: 0, duration: 1 }}
            className={classes.imageContainer}
          >
            <img
              src={"../../../yolo.png"}
              width="100%"
              height="100%"
              className={classes.imageBox}
            />
          </motion.div>
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{
              y: projectThree ? 0 : 300,
              opacity: projectThree ? 1 : 0,
            }}
            transition={{ delay: 0, duration: 1 }}
            className={classes.projectContentContainer}
          >
            <Typography
              className={classes.projectName}
              variant="h4"
              align="right"
            >
              Yolo Connects
            </Typography>
            <Box className={classes.projectContentBox}>
              <Typography
                className={classes.projectNameMobile}
                variant="h4"
                align="right"
              >
                Yolo Connects
              </Typography>
              <Typography variant="body2" className={classes.workTextContent}>
                This project was based on third party API consumption. I
                integrated Facebook, Instagram & LinkedIn APIs enabling users to
                schedule posts to the application.
              </Typography>
              <Box className={classes.projectLinksMobile}>
                <Box
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <Typography variant="body2">HTML5</Typography>
                  <Typography variant="body2">Bootstrap</Typography>
                  <Typography variant="body2">CSS3</Typography>
                  <Typography variant="body2">SCSS</Typography>
                  <Typography variant="body2">Next.js</Typography>
                  <Typography variant="body2">Node.js</Typography>
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
                    <Link href="https://app.yoloconnect.in/">
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
                    <Link href="https://app.yoloconnect.in/">
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
                <Typography variant="body2">Next.js</Typography>
                <Typography variant="body2">Node.js</Typography>
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
                  <Link href="https://app.yoloconnect.in/">
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
                  <Link href="https://app.yoloconnect.in/">
                    <GitHubIcon
                      style={{
                        color: "#ccd6f6",
                      }}
                    />
                  </Link>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Box>
        <Box
          className={classes.projectMainConatiner}
          style={{
            position: "relative",
          }}
        >
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{
              x: projectTwo ? 0 : 300,
              opacity: projectTwo ? 1 : 0,
            }}
            transition={{ delay: 0, duration: 1 }}
            className={classes.projectContentContainerReverse}
          >
            <Typography
              className={classes.projectName}
              variant="h4"
              align="left"
            >
              Poolfish
            </Typography>
            <Box className={classes.projectContentBoxReverse}>
              <Typography
                className={classes.projectNameMobile}
                variant="h4"
                align="right"
              >
                Poolfish
              </Typography>
              <Typography variant="body2" className={classes.workTextContent}>
                Poolfish is an all-in-one workspace for liquidity providers —
                calculate, discover, analyze, manage & track positions, and
                more.
              </Typography>
              <Box className={classes.projectLinksMobile}>
                <Box
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <Typography variant="body2">React.js</Typography>
                  <Typography variant="body2">Next.js</Typography>
                  <Typography variant="body2">Tailwind</Typography>
                  <Typography variant="body2">Typescript</Typography>
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
                    <Link href="https://poolfish.xyz/calculators/uniswap">
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
                <Typography variant="body2">Next.js</Typography>
                <Typography variant="body2">Tailwind</Typography>
                <Typography variant="body2">Typescript</Typography>
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
                  <Link href="https://poolfish.xyz/calculators/uniswap">
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
          </motion.div>
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: projectTwo ? 0 : 300, opacity: projectTwo ? 1 : 0 }}
            transition={{ delay: 0, duration: 1 }}
            className={classes.imageContainer}
          >
            <img
              src={"../../../poolfish.png"}
              width="100%"
              height="100%"
              className={classes.imageBox}
            />
          </motion.div>
        </Box>
        <Box
          className={classes.projectMainConatiner}
          style={{
            position: "relative",
          }}
        >
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{
              x: projectThree ? 0 : -300,
              opacity: projectThree ? 1 : 0,
            }}
            transition={{ delay: 0, duration: 1 }}
            className={classes.imageContainer}
          >
            <img
              src={"../../../talentsscrew.png"}
              width="100%"
              height="100%"
              className={classes.imageBox}
            />
          </motion.div>
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{
              y: projectThree ? 0 : 300,
              opacity: projectThree ? 1 : 0,
            }}
            transition={{ delay: 0, duration: 1 }}
            className={classes.projectContentContainer}
          >
            <Typography
              className={classes.projectName}
              variant="h4"
              align="right"
            >
              Talents Crew
            </Typography>
            <Box className={classes.projectContentBox}>
              <Typography
                className={classes.projectNameMobile}
                variant="h4"
                align="right"
              >
                Talents Crew
              </Typography>
              <Typography variant="body2" className={classes.workTextContent}>
                This project provide Communities & Groups TalentsCrew provides
                an uplifting community experience in the spirit of human
                camaraderie.
              </Typography>
              <Box className={classes.projectLinksMobile}>
                <Box
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <Typography variant="body2">React.js</Typography>
                  <Typography variant="body2">Redux</Typography>
                  <Typography variant="body2">CSS3</Typography>
                  <Typography variant="body2">SCSS</Typography>
                  <Typography variant="body2">Next.js</Typography>
                  <Typography variant="body2">Node.js</Typography>
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
                    <Link href="https://app.yoloconnect.in/">
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
                    <Link href="https://app.yoloconnect.in/">
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
                <Typography variant="body2">Redux</Typography>
                <Typography variant="body2">CSS3</Typography>
                <Typography variant="body2">SCSS</Typography>
                <Typography variant="body2">Next.js</Typography>
                <Typography variant="body2">Node.js</Typography>
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
                  <Link href="https://talentscrew.com/">
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
                  <Link href="https://talentscrew.com/">
                    <GitHubIcon
                      style={{
                        color: "#ccd6f6",
                      }}
                    />
                  </Link>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectContainer;
