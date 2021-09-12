import { makeStyles } from "@material-ui/core/styles";
import img from "/main.jpg";

export const useStyles = makeStyles((theme) => ({
  aboutMainContainer: {
    marginTop: "50px",
    backgroundColor: "#041733",
    // position: "relative",
    // top: "60px",
    // minHeight: "450px",
    // border: "5px solid red",
    // backgroundSize: "cover",
    // color: "#ffffff",
    // // overflow: "auto",
  },
  textContainer: {
    paddingTop: "5rem",
    paddingBottom: "5rem",
  },
  textContent: {
    display: "flex",
    // border: "5px solid black",
    color: "#ffffff",
    // width: "600px",
    margin: "1rem auto",
    // height: "400px",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  textContentChild_1: {
    border: "1px solid #ffffff",
    // flexGrow: 1,
  },
  textContentChild_2: {
    border: "1px solid #ffffff",
    flexBasis: 300,
    paddingTop: "4rem",
    paddingLeft: "2rem",
  },
  imageContainer: {
    // width: "300px",
    height: "200px",
    backgroundImage: `url("/aamir.jpg")`,
    // borderRadius: "100%",
    backgroundSize: "cover",
    border: "5px solid #64ffda",
  },
}));
