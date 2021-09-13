import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2rem",
  },
  contentContainer: {
    // border: "1px solid red",
    marginTop: "2rem",
  },
  projectMainConatiner: {
    display: "flex",
    color: "#64ffda",
    height: "350px",
    marginTop: "3rem",

    [theme.breakpoints.down("xs")]: {
      display: "block",
      // height: "350px",
    },
  },
  imageContainer: {
    width: "60%",
    borderRadius: "5px",

    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: "0px auto",

      height: "350px",
    },
  },
  imageBox: {
    borderRadius: "5px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: "0px auto",
    },
  },
  projectContentContainer: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  projectContentContainerReverse: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  projectContentBox: {
    backgroundColor: "#112240",
    position: "absolute",
    padding: "2rem 3rem",
    zIndex: 1,
    right: "2px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "440px",
    borderRadius: "5px",
    [theme.breakpoints.down("xs")]: {
      height: "350px",
      opacity: 0.95,
      right: "0px",

      padding: "1rem",
      width: "100%",
    },
  },
  projectContentBoxReverse: {
    backgroundColor: "#112240",
    position: "absolute",
    padding: "2rem 3rem",
    zIndex: 1,
    left: "2px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "440px",
    borderRadius: "5px",
    [theme.breakpoints.down("xs")]: {
      height: "350px",
      opacity: 0.95,
      left: "0px",

      padding: "1rem",
      width: "100%",
    },
  },
  projectName: {
    [theme.breakpoints.down("xs")]: {
      // height: "350px",
      // opacity: 0.95,
      // right: "0px",
      // padding: "1rem",
      // width: "100%",
      display: "none",
    },
  },
  projectNameMobile: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      textAlign: "center",
      marginBottom: "1rem",
    },
  },
  projectLinks: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  projectLinksMobile: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  workTextContent: {
    fontSize: "20px",
    color: "#ccd6f6",

    [theme.breakpoints.down("xs")]: {
      height: "180px",
    },
  },
}));
