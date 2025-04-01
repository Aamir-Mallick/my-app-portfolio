import React, { useState } from "react";
import { Box, AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { useStyles } from "./useStyles";
import DehazeIcon from "@material-ui/icons/Dehaze";
import CloseIcon from "@material-ui/icons/Close";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  Link,
} from "@material-ui/core";
// import styles from "./container.module.css";
//
export const HeaderNavBar = () => {
  const classes = useStyles();
  const [showDropDown, setShowDropDown] = useState(false);

  const DropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const tabletAndDesktopViewNavbar = () => {
    return (
      <>
        <Box className={classes.NavMainContainer}>
          <Typography
            variant="h4"
            color="secondary"
            align="center"
            style={{
              fontWeight: 900,
              letterSpacing: "2px",
            }}
          >
            Aamir Mallick
          </Typography>
        </Box>
        <Box className={classes.headerNavigationContainer}>
          <Typography variant="body2">
            <Link href="#about" className={classes.navLinkText}>
              About
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#skill" className={classes.navLinkText}>
              Skill
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#project" className={classes.navLinkText}>
              Projects
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#contact" className={classes.navLinkText}>
              Contact
            </Link>
          </Typography>
        </Box>
        <Box className={classes.NavMainContainerBox}>
          <a href="https://drive.google.com/file/d/1iGU9WTu3ce1d5850EHBv2E1s1TddhumU/view">
            <Button variant="outlined" color="secondary">
              Resume
            </Button>
          </a>
        </Box>
      </>
    );
  };

  const mobileViewNavbar = () => {
    return (
      <>
        <Box className={classes.headingContainer}>
          <Typography color="secondary" variant="h5">
            Aamir Mallick
          </Typography>
        </Box>
        <Box className={classes.navIcons}>
          {!showDropDown ? (
            <IconButton>
              <DehazeIcon style={{ color: "#ffffff" }} onClick={DropDown} />
            </IconButton>
          ) : (
            <IconButton>
              <CloseIcon style={{ color: "#ffffff" }} onClick={DropDown} />
            </IconButton>
          )}
        </Box>
      </>
    );
  };

  const navLinkDropDown = () => {
    return (
      <Box className={`${classes.dropDownNav} ${classes.dropDownNavAnimation}`}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemText
              className={classes.dropDownNavAnimationButton}
              primary={
                <Typography align="center" variant="body2">
                  <Link
                    className={classes.navLinkText}
                    href="#about"
                    onClick={() => {
                      setShowDropDown(false);
                    }}
                  >
                    About
                  </Link>
                </Typography>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              className={classes.dropDownNavAnimationButton}
              primary={
                <Typography align="center" variant="body2">
                  <Link
                    className={classes.navLinkText}
                    href="#skill"
                    onClick={() => {
                      setShowDropDown(false);
                    }}
                  >
                    Skill
                  </Link>
                </Typography>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              className={classes.dropDownNavAnimationButton}
              primary={
                <Typography align="center" variant="body2">
                  <Link
                    className={classes.navLinkText}
                    href="#project"
                    onClick={() => {
                      setShowDropDown(false);
                    }}
                  >
                    Project
                  </Link>
                </Typography>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              className={classes.dropDownNavAnimationButton}
              primary={
                <Typography align="center" variant="body2">
                  <Link
                    className={classes.navLinkText}
                    href="#contact"
                    onClick={() => {
                      setShowDropDown(false);
                    }}
                  >
                    Contact
                  </Link>
                </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              className={classes.dropDownNavAnimationButton}
              primary={
                <Typography align="center">
                  <Button variant="outlined" color="secondary">
                    Resume
                  </Button>
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Box>
    );
  };

  return (
    <>
      <Box
        style={{ border: "1px solid green" }}
        className={`${showDropDown ? classes.main : ""}`}
      >
        <AppBar>
          <Toolbar className={`${classes.toolbarContainer}`}>
            {tabletAndDesktopViewNavbar()}
            {mobileViewNavbar()}
          </Toolbar>
          {showDropDown ? <Divider /> : null}
          {showDropDown ? navLinkDropDown() : null}
        </AppBar>
      </Box>
    </>
  );
};
