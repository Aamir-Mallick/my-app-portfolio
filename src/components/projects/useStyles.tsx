import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2rem",
    // border: "10px solid red",
  },
  contentContainer: {
    marginTop: "2rem",
  },
  projectMainConatiner: {
    // position: "relative",
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
    cursor: "pointer",
    borderRadius: "5px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: "0px auto",
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
    width: "450px",
    height: "300px",
    borderRadius: "5px",
    [theme.breakpoints.down("xs")]: {
      height: "350px",
      width: "350px",
      opacity: 0.95,
      left: "0px",
      padding: "1rem",
      top: "11rem",
    },
  },

  projectLinksItems: {
    display: "flex",
    gap: "10px",
  },

  workTextContent: {
    fontSize: "20px",
    color: "#ccd6f6",

    [theme.breakpoints.down("xs")]: {
      height: "180px",
    },
  },
  somethingClass: {
    fontSize: "2.125rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  dashClass: {
    width: "350px",
    marginLeft: "15px",
    backgroundColor: "#68686a",
    height: "1px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));
