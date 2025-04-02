import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  skillMainContainer: {
    width: "60%",
    margin: "5rem auto",
    // height: "300px",
    backgroundColor: "#041733",
    // height: "450px",
    // border: "1px solid red",
  },
  skillCardMainContainer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    // flexWrap: "wrap",
    color: "#8892b0",
    // // height: "600px",
    // [theme.breakpoints.down("xs")]: {
    //   flexDirection: "column",
    //   // margin: "10px auto",
    //   padding: "0px auto",
    // },
  },
  workMainConatiner: {
    marginTop: "3rem",
  },
  workContainer: {
    marginTop: "3rem",
    display: "flex",
    color: "#ccd6f6",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      height: "400px",
      // border: "1px solid red",
      // // margin: "10px auto",
      // padding: "0px auto",
    },
  },
  workHeadingContainer: {
    color: "#64ffda",
    fontFamily: "Calibre",
    fontWeight: 900,

    [theme.breakpoints.down("xs")]: {
      margin: "1rem auto",

      textAlign: "center",
    },
  },
  listMainContainer: {
    marginLeft: "3rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: "5px",
      marginLeft: "0rem",
      width: "300px",
    },
  },
  listContainer: {
    paddingTop: "0px",
    paddingBottom: "0px",
  },
}));
