import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

export const useStyles = makeStyles((theme) => ({
  main: {
    // height: "200px",
    // backgroundColor: "#020e21",
  },
  toolbarContainer: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  NavMainContainer: {
    display: "block",
    flexGrow: 5,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  NavMainContainerBox: {
    display: "block",
    flexGrow: 0.5,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  headingContainer: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  navIcons: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  headerNavigationContainer: {
    flexGrow: 1,
    display: "flex",
    fontFamily: "SF Mono",
    alignItems: "center",

    justifyContent: "space-around",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  dropDownNav: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      textAlign: "center",
      // height: "250px",
      //   marginTop: "3.5rem",
      // background: "#556cd6",
    },
  },

  dropDownNavAnimation: {
    animation: `$myEffect 2000ms ${theme.transitions.easing.easeInOut}`,
    animationDirection: "alternate",
  },
  "@keyframes myEffect": {
    from: {
      opacity: 0,
      height: "0px",
    },
    to: {
      opacity: 1,
      height: "250px",
    },
  },
  dropDownNavAnimationButton: {
    animation: `$myEffectOne 7000ms ${theme.transitions.easing.easeInOut}`,
    animationDirection: "alternate",
  },
  "@keyframes myEffectOne": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },

  navLinkText: {
    color: "#ccd6f6",
    fontWeight: 900,
    letterSpacing: "2px",
    "&:hover": {
      color: "#64ffda",
      textDecoration: "none",
    },
  },
}));
