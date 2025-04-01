import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  contentContainer: {
    // border: "1px solid red",
    marginTop: "5rem",
    paddingBottom: "2rem",
  },
  linkContainerMobile: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      width: "260px",
      margin: "1rem auto",
      marginTop: "2rem",
      display: "flex",
      justifyContent: "space-between",
    },
  },
  emailContainerMobile: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      width: "200px",
      margin: "2rem auto",
    },
  },
  iconeHeightMobile: {
    // width: "50px",
  },
}));
